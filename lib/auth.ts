import crypto from "crypto";
import { NextResponse } from "next/server";

export const ADMIN_USERNAME = process.env.NEWSLETTER_ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD =
  process.env.NEWSLETTER_ADMIN_PASSWORD || "conetify123";
export const AUTH_SECRET =
  process.env.NEWSLETTER_AUTH_SECRET || "replace-this-with-a-strong-secret";
export const AUTH_COOKIE_NAME = "newsletter-admin-session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 dias

function createSignature(payload: string) {
  return crypto.createHmac("sha256", AUTH_SECRET).update(payload).digest("hex");
}

export function createAdminToken() {
  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `${ADMIN_USERNAME}:${expires}`;
  return `${payload}:${createSignature(payload)}`;
}

export function verifyAdminToken(token?: string) {
  if (!token) {
    return false;
  }

  const [username, expires, signature] = token.split(":");
  if (!username || !expires || !signature) {
    return false;
  }

  if (username !== ADMIN_USERNAME) {
    return false;
  }

  if (Number(expires) < Date.now()) {
    return false;
  }

  return signature === createSignature(`${username}:${expires}`);
}

export function setAdminSessionCookie(res: NextResponse, token: string) {
  res.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: token,
    httpOnly: true,
    maxAge: SESSION_MAX_AGE,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export function clearAdminSessionCookie(res: NextResponse) {
  res.cookies.set({
    name: AUTH_COOKIE_NAME,
    value: "",
    httpOnly: true,
    maxAge: 0,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export function isValidAdminCredentials(username: string, password: string) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}
