import { createClient } from "@supabase/supabase-js";
import { NextResponse, type NextRequest } from "next/server";
import { isAdminUser } from "@/lib/adminAuth";

type ContentType = "text" | "image";
type ContentLanguage = "all" | "en" | "de";

type SiteOverrideRow = {
  id: number | string;
  key: string;
  value: string;
  content_type: ContentType;
  language: ContentLanguage;
  updated_at: string | null;
};

const json = (payload: object, status = 200) =>
  NextResponse.json(payload, {
    status,
    headers: {
      "Cache-Control": "no-store"
    }
  });

const parseBearerToken = (request: NextRequest) => {
  const authHeader = request.headers.get("authorization") || request.headers.get("Authorization") || "";
  if (!authHeader.toLowerCase().startsWith("bearer ")) return null;
  return authHeader.slice(7).trim() || null;
};

const isValidHttpUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

const getClients = () => {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !serviceRoleKey || !anonKey) {
    return null;
  }

  const authClient = createClient(supabaseUrl, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  return { authClient, adminClient };
};

const requireAdmin = async (request: NextRequest) => {
  const clients = getClients();
  if (!clients) {
    return { error: json({ message: "Server configuration is missing required Supabase environment variables." }, 500) };
  }

  const token = parseBearerToken(request);
  if (!token) {
    return { error: json({ message: "Missing bearer token." }, 401) };
  }

  const {
    data: { user },
    error
  } = await clients.authClient.auth.getUser(token);

  if (error || !user) {
    return { error: json({ message: "Invalid or expired session token." }, 401) };
  }

  if (!isAdminUser(user)) {
    return { error: json({ message: "Forbidden. Admin permissions required." }, 403) };
  }

  return { adminClient: clients.adminClient };
};

const sanitizeLanguage = (value: unknown): ContentLanguage => {
  if (value === "en" || value === "de") return value;
  return "all";
};

const sanitizeContentType = (value: unknown): ContentType | null => {
  if (value === "text" || value === "image") return value;
  return null;
};

const sanitizePayload = (payload: Record<string, unknown>) => {
  const key = typeof payload.key === "string" ? payload.key.trim() : "";
  const value = typeof payload.value === "string" ? payload.value.trim() : "";
  const contentType = sanitizeContentType(payload.content_type);

  if (!key || !value || !contentType) {
    return { error: "Key, value, and content_type are required." };
  }

  if (contentType === "image" && !isValidHttpUrl(value)) {
    return { error: "Image values must be valid HTTP/HTTPS URLs." };
  }

  return {
    data: {
      key,
      value,
      content_type: contentType,
      language: contentType === "image" ? "all" : sanitizeLanguage(payload.language)
    }
  };
};

export async function GET(request: NextRequest) {
  const auth = await requireAdmin(request);
  if ("error" in auth) return auth.error;

  const { data, error } = await auth.adminClient
    .from("site_content_overrides")
    .select("id,key,value,content_type,language,updated_at")
    .order("key", { ascending: true })
    .returns<SiteOverrideRow[]>();

  if (error) {
    return json({ message: error.message }, 400);
  }

  return json({ items: data || [] });
}

export async function POST(request: NextRequest) {
  const auth = await requireAdmin(request);
  if ("error" in auth) return auth.error;

  const payload = (await request.json()) as Record<string, unknown>;
  const parsed = sanitizePayload(payload);
  if ("error" in parsed) {
    return json({ message: parsed.error }, 400);
  }

  const { error } = await auth.adminClient.from("site_content_overrides").insert(parsed.data);

  if (error) {
    return json({ message: error.message }, 400);
  }

  return json({ ok: true }, 201);
}

export async function PATCH(request: NextRequest) {
  const auth = await requireAdmin(request);
  if ("error" in auth) return auth.error;

  const payload = (await request.json()) as Record<string, unknown>;
  const id = payload.id;

  if (typeof id !== "number" && typeof id !== "string") {
    return json({ message: "A valid row id is required." }, 400);
  }

  const parsed = sanitizePayload(payload);
  if ("error" in parsed) {
    return json({ message: parsed.error }, 400);
  }

  const { error } = await auth.adminClient.from("site_content_overrides").update(parsed.data).eq("id", id);

  if (error) {
    return json({ message: error.message }, 400);
  }

  return json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const auth = await requireAdmin(request);
  if ("error" in auth) return auth.error;

  const payload = (await request.json()) as Record<string, unknown>;
  const id = payload.id;

  if (typeof id !== "number" && typeof id !== "string") {
    return json({ message: "A valid row id is required." }, 400);
  }

  const { error } = await auth.adminClient.from("site_content_overrides").delete().eq("id", id);

  if (error) {
    return json({ message: error.message }, 400);
  }

  return json({ ok: true });
}
