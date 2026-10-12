import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";

export const AUTH_COOKIE_NAME = "newsletter-admin-session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 dias

function getAdminConfig() {
  const username = process.env.NEWSLETTER_ADMIN_USERNAME;
  const password = process.env.NEWSLETTER_ADMIN_PASSWORD;
  const secret = process.env.NEWSLETTER_AUTH_SECRET;

  if (
    !username ||
    username.includes(":") ||
    !password ||
    password.length < 12 ||
    !secret ||
    secret.length < 32
  ) {
    return null;
  }

  return { username, password, secret };
}

export function isAdminConfigured() {
  return getAdminConfig() !== null;
}

function createSignature(payload: string) {
  const config = getAdminConfig();
  if (!config) {
    throw new Error("Configure secure admin credentials before enabling login.");
  }

  return createHmac("sha256", config.secret).update(payload).digest("hex");
}

export function createAdminToken() {
  const config = getAdminConfig();
  if (!config) {
    throw new Error("Configure secure admin credentials before enabling login.");
  }

  const expires = Date.now() + SESSION_MAX_AGE * 1000;
  const payload = `${config.username}:${expires}`;
  return `${payload}:${createSignature(payload)}`;
}

export function verifyAdminToken(token?: string) {
  if (!token || !getAdminConfig()) {
    return false;
  }

  const [username, expires, signature] = token.split(":");
  if (!username || !expires || !signature) {
    return false;
  }

  if (username !== getAdminConfig()?.username) {
    return false;
  }

  if (Number(expires) < Date.now()) {
    return false;
  }

  const expectedSignature = createSignature(`${username}:${expires}`);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);
  return actualBuffer.length === expectedBuffer.length && timingSafeEqual(actualBuffer, expectedBuffer);
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
  const config = getAdminConfig();
  if (!config) {
    return false;
  }

  const submittedUsername = Buffer.from(username);
  const expectedUsername = Buffer.from(config.username);
  const submittedPassword = Buffer.from(password);
  const expectedPassword = Buffer.from(config.password);

  return (
    submittedUsername.length === expectedUsername.length &&
    submittedPassword.length === expectedPassword.length &&
    timingSafeEqual(submittedUsername, expectedUsername) &&
    timingSafeEqual(submittedPassword, expectedPassword)
  );
}
