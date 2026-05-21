# UpOrPay — Waitlist Site

A Next.js 15 / React 19 landing page for the UpOrPay waitlist. Emails submitted via the form are written to a Google Sheet you control (acts as your "Excel" — view/export from anywhere).

Built to deploy on Vercel.

---

## 1. Local setup

```bash
cd waitlist-web
npm install
cp .env.local.example .env.local
# fill in the three GOOGLE_* values (see section 2)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 2. Google Sheets setup (one-time, ~10 minutes)

You'll create a free Google service account and let it write to a sheet you own.

### a) Create the sheet

1. Go to [sheets.new](https://sheets.new) — name it something like `UpOrPay Waitlist`.
2. In row 1, add headers (optional but nice): `Timestamp | Email | IP | User Agent | Referer`.
3. Copy the **Sheet ID** from the URL: `https://docs.google.com/spreadsheets/d/`**`<SHEET_ID>`**`/edit` → this is `GOOGLE_SHEET_ID`.

### b) Create a service account

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create a new project (or pick one).
2. In the search bar, find **"Google Sheets API"** → click **Enable**.
3. Go to **APIs & Services → Credentials → Create credentials → Service account**.
   - Name: `waitlist-writer` (anything).
   - Skip the optional steps; click **Done**.
4. Click into the new service account → **Keys** tab → **Add key → Create new key → JSON**. A JSON file downloads.

From that JSON file you need two fields:
- `client_email` → goes into `GOOGLE_CLIENT_EMAIL`
- `private_key` → goes into `GOOGLE_PRIVATE_KEY` (keep the `\n` characters as literal `\n` when pasting into Vercel; the API route converts them).

### c) Share the sheet with the service account

In the Google Sheet, click **Share** and add the `client_email` from the JSON as an **Editor**. (This is the step everyone forgets — without it, you'll get a permission error.)

### d) Put the values in `.env.local`

```env
GOOGLE_SHEET_ID=1AbC...xyz
GOOGLE_CLIENT_EMAIL=waitlist-writer@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIE...\n-----END PRIVATE KEY-----\n"
```

The private key must be wrapped in double quotes so the `\n` survives as a literal.

Restart `npm run dev` and submit the form — you should see a row appear in the sheet.

---

## 3. Deploy to Vercel

1. Push this folder to a GitHub repo (the rest of the monorepo can come along — Vercel will only build `waitlist-web/`).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. **Root Directory:** set this to `waitlist-web`.
4. Framework: Next.js (auto-detected).
5. **Environment Variables** — add the same three from `.env.local`:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_PRIVATE_KEY` — paste the full key INCLUDING the `\n` characters as literal `\n`. Vercel preserves them and the code converts them at runtime.
6. Deploy.

That's it. Use the Vercel-assigned domain (or add a custom one in Project → Domains) for your Instagram link.

---

## 4. Viewing the data

Just open the Google Sheet. Download as Excel with **File → Download → Microsoft Excel (.xlsx)** any time.

---

## File map

- [app/page.tsx](app/page.tsx) — landing page markup (server component)
- [app/components/Nav.tsx](app/components/Nav.tsx) — top nav + mobile menu
- [app/components/WaitlistForm.tsx](app/components/WaitlistForm.tsx) — the email form
- [app/api/waitlist/route.ts](app/api/waitlist/route.ts) — POST handler that appends to the sheet
- [app/globals.css](app/globals.css) — all styles, ported from the original HTML

---

## Troubleshooting

- **"The caller does not have permission"** → you forgot step 2c. Share the sheet with the service account email.
- **"Unable to parse range: Sheet1!A:E"** → your first tab isn't named `Sheet1`. Rename it, or edit the `range` in `app/api/waitlist/route.ts`.
- **"error:1E08010C:DECODER routines"** or similar key error → the `\n` in `GOOGLE_PRIVATE_KEY` didn't survive. Re-paste with literal `\n` and wrap the value in double quotes locally.
- **Form spins forever locally** → check the terminal running `npm run dev` — the route logs the real error.
# uporpay
