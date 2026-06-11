import { NextRequest, NextResponse } from "next/server";
import { getAllComments, saveComment } from "@/lib/comments";

export async function GET() {
  const comments = getAllComments();
  return NextResponse.json({ comments });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const name = String(body?.name || "").trim();
  const comment = String(body?.comment || "").trim();
  const rating = Number(body?.rating);

  if (!name || !comment || !rating || rating < 1 || rating > 5) {
    return NextResponse.json(
      { error: "Nome, comentário e avaliação entre 1 e 5 são obrigatórios." },
      { status: 400 },
    );
  }

  saveComment(name, rating, comment);
  return NextResponse.json({ success: true });
}
