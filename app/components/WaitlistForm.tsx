"use client";

import { useState, FormEvent } from "react";

type Status = { type: "idle" } | { type: "loading" } | { type: "success"; msg: string } | { type: "error"; msg: string };

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (status.type === "loading") return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus({ type: "error", msg: "Please enter a valid email." });
      return;
    }

    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ type: "error", msg: data.error || "Something went wrong. Try again." });
        return;
      }
      setStatus({ type: "success", msg: "You're on the list! We'll be in touch." });
      setEmail("");
    } catch {
      setStatus({ type: "error", msg: "Network error. Check your connection and try again." });
    }
  }

  return (
    <div>
      <form className="form-row" method="post" action="/api/waitlist" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status.type === "loading"}
          autoComplete="email"
          required
        />
        <button type="submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? "JOINING…" : "JOIN THE WAITLIST"} <span>→</span>
        </button>
      </form>

      {(status.type === "success" || status.type === "error") && (
        <div className={`form-message ${status.type}`}>{status.msg}</div>
      )}

      <div className="waitlist-meta">
        <div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Early access only
        </div>
        <div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
          No spam. Ever.
        </div>
        <div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
          Cancel anytime.
        </div>
      </div>
    </div>
  );
}
