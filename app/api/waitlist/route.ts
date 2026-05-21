import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function getAuth() {
  const clientEmail = getEnv("GOOGLE_CLIENT_EMAIL");
  const rawKey = getEnv("GOOGLE_PRIVATE_KEY");
  // Vercel stores newlines as the literal "\n" — convert back to real newlines.
  const privateKey = rawKey.replace(/\\n/g, "\n");

  return new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";
  let rawEmail = "";
  try {
    if (contentType.includes("application/json")) {
      const body = (await req.json()) as { email?: string };
      rawEmail = body.email || "";
    } else {
      // Handle application/x-www-form-urlencoded or multipart/form-data
      // (the no-JS / pre-hydration fallback from the form).
      const form = await req.formData();
      rawEmail = String(form.get("email") || "");
    }
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = rawEmail.trim().toLowerCase();
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  try {
    const auth = getAuth();
    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = getEnv("GOOGLE_SHEET_ID");

    const userAgent = req.headers.get("user-agent") || "";
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const referer = req.headers.get("referer") || "";

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[new Date().toISOString(), email, ip, userAgent, referer]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[waitlist] sheets append failed:", message);
    return NextResponse.json(
      { error: "Could not save your signup. Please try again in a moment." },
      { status: 500 }
    );
  }
}
