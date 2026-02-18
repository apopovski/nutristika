import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type SiteContentOverrideRow = {
  key: string;
  value: string;
  content_type: "text" | "image";
  language: "all" | "en" | "de" | null;
};

type TextByKey = Record<string, Partial<Record<"all" | "en" | "de", string>>>;
type ImageByKey = Record<string, string>;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

const jsonResponse = (payload: object) =>
  NextResponse.json(payload, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
      ...corsHeaders
    }
  });

const emptyPayload = {
  items: [] as Array<{
    key: string;
    value: string;
    contentType: "text" | "image";
    language: "all" | "en" | "de";
  }>,
  textByKey: {} as TextByKey,
  imageByKey: {} as ImageByKey
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders
  });
}

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse(emptyPayload);
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  const { data, error } = await supabaseAdmin
    .from("site_content_overrides")
    .select("key,value,content_type,language")
    .order("key", { ascending: true })
    .returns<SiteContentOverrideRow[]>();

  if (error || !data) {
    return jsonResponse(emptyPayload);
  }

  const textByKey: TextByKey = {};
  const imageByKey: ImageByKey = {};

  const items = data
    .map((row) => {
      const key = row.key?.trim();
      const value = row.value?.trim();
      const contentType = row.content_type;
      const language = row.language === "en" || row.language === "de" ? row.language : "all";

      if (!key || !value || (contentType !== "text" && contentType !== "image")) {
        return null;
      }

      if (contentType === "text") {
        if (!textByKey[key]) {
          textByKey[key] = {};
        }
        textByKey[key][language] = value;
      }

      if (contentType === "image") {
        imageByKey[key] = value;
      }

      return {
        key,
        value,
        contentType,
        language
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return jsonResponse({
    items,
    textByKey,
    imageByKey
  });
}
