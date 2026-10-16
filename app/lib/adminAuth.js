import { cookies } from "next/headers";
import crypto from "crypto";

const ADMIN_EMAIL = "alifazmiruddin@gmail.com";
const ADMIN_PASSWORD = "@zmir1999";
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET || "azmir-portfolio-admin-blog-secret";
const COOKIE_NAME = "admin_blog_session";

function sign(value) {
  return crypto.createHmac("sha256", SESSION_SECRET).update(value).digest("hex");
}

export function checkCredentials(email, password) {
  return (
    email?.toString().trim().toLowerCase() === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  );
}

export async function createSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, sign(ADMIN_EMAIL), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAuthed() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return token === sign(ADMIN_EMAIL);
}
