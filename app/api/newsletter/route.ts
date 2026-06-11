import { NextRequest, NextResponse } from "next/server";
import { saveNewsletterLead } from "@/lib/newsletter";

export async function POST(req: NextRequest) {
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
}
