import { NextRequest, NextResponse } from "next/server";
import { getAllComments, saveComment } from "@/lib/comments";
import { hasSupabaseConfig } from "@/lib/supabase";

export async function GET() {
  try {
    const comments = await getAllComments();
    return NextResponse.json({ comments });
  } catch (error) {
    console.error("Erro ao carregar comentários:", error);
    return NextResponse.json(
      { error: "Não foi possível carregar os comentários." },
      { status: 503 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    if (process.env.NODE_ENV === "production" && !hasSupabaseConfig()) {
      return NextResponse.json(
        { error: "O envio de comentários está temporariamente indisponível." },
        { status: 503 },
      );
    }

    const body = await req.json();
    const name = String(body?.name || "").trim();
    const comment = String(body?.comment || "").trim();
    const rating = Number(body?.rating);

    if (
      !name ||
      name.length > 100 ||
      !comment ||
      comment.length > 2000 ||
      !Number.isInteger(rating) ||
      rating < 1 ||
      rating > 5
    ) {
      return NextResponse.json(
        { error: "Nome, comentário e avaliação entre 1 e 5 são obrigatórios." },
        { status: 400 },
      );
    }

    await saveComment(name, rating, comment);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao salvar comentário:", error);
    return NextResponse.json(
      { error: "Não foi possível enviar o comentário agora." },
      { status: 503 },
    );
  }
}
