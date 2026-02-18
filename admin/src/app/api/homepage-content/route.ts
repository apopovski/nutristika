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

export async function GET() {
  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(fallbackHomepageContent, {
      status: 200,
      headers: { "Cache-Control": "no-store" }
    });
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
    return NextResponse.json(fallbackHomepageContent, {
      status: 200,
      headers: { "Cache-Control": "no-store" }
    });
  }

  return NextResponse.json(
    {
      title: data.title?.trim() || fallbackHomepageContent.title,
      description: data.description?.trim() || fallbackHomepageContent.description
    },
    {
      status: 200,
      headers: { "Cache-Control": "no-store" }
    }
  );
}
