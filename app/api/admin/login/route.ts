import { NextRequest, NextResponse } from "next/server";
import {
  createAdminToken,
  isAdminConfigured,
  isValidAdminCredentials,
  setAdminSessionCookie,
} from "@/lib/auth";

export async function POST(req: NextRequest) {
  if (!isAdminConfigured()) {
    return NextResponse.json(
      { error: "O acesso administrativo ainda não está configurado." },
      { status: 503 },
    );
  }

  const body = await req.json();
  const username = String(body?.username || "");
  const password = String(body?.password || "");

  if (!isValidAdminCredentials(username, password)) {
    return NextResponse.json(
      { error: "Usuário ou senha inválidos." },
      { status: 401 },
    );
  }

  const token = createAdminToken();
  const response = NextResponse.json({ success: true });
  setAdminSessionCookie(response, token);
  return response;
}
