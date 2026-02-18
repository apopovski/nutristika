import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type HomepageContentRow = {
  title: string | null;
  description: string | null;
};

const fallbackHomepageContent = {
  title: "We’re more than a meal plan.",
  description:
    "I support adults who want to feel better in their bodies without restrictive diets or quick fixes. As a registered dietitian, I combine evidence-based nutrition, plant-forward culinary guidance, and behavior coaching to help you create habits that truly last."
};

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
    return jsonResponse(fallbackHomepageContent);
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  const { data, error } = await supabaseAdmin
    .from("homepage_content")
    .select("title,description")
    .order("id", { ascending: true })
    .limit(1)
    .maybeSingle<HomepageContentRow>();

  if (error || !data) {
    return jsonResponse(fallbackHomepageContent);
  }

  return jsonResponse({
    title: data.title?.trim() || fallbackHomepageContent.title,
    description: data.description?.trim() || fallbackHomepageContent.description
  });
}
