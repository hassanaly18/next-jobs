import { createSupabaseServerClient } from "@/utils/supabase-server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createSupabaseServerClient();

  const { data, err } = await supabase.from("jobs").select("*");

  if (err) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req) {
  try {
    const supabase = createSupabaseServerClient();

    const { title, description, company, recruiter_id } = await req.json();

    if (!title || !description || !company || !recruiter_id) {
      return NextResponse.json(
        { error: "All the fields should be filled" },
        { status: 400 }
      );
    }

    const { data, err } = await supabase
      .from("jobs")
      .insert([{ title, description, company, recruiter_id }])
      .select()
      .single();

    if (err) throw err;

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, {status:500});
  }
}
