import { NextRequest, NextResponse } from "next/server";
import { saveNewsletterLead } from "@/lib/newsletter";
import { hasSupabaseConfig } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    if (process.env.NODE_ENV === "production" && !hasSupabaseConfig()) {
      return NextResponse.json(
        { error: "A inscrição está temporariamente indisponível." },
        { status: 503 },
      );
    }

    const body = await req.json();
    const email = String(body?.email || "")
      .trim()
      .toLowerCase();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json(
        { error: "Digite um e-mail válido." },
        { status: 400 },
      );
    }

    const saved = await saveNewsletterLead(email);
    return NextResponse.json({ success: true, alreadyExists: !saved });
  } catch (error) {
    console.error("Erro ao salvar inscrição da newsletter:", error);
    return NextResponse.json(
      { error: "Não foi possível cadastrar o e-mail agora." },
      { status: 503 },
    );
  }
}
