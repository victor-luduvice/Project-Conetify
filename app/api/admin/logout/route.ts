import { NextResponse } from "next/server";
import { clearAdminSessionCookie } from "@/lib/auth";

export async function GET() {
  const response = NextResponse.redirect("/admin/login");
  clearAdminSessionCookie(response);
  return response;
}
