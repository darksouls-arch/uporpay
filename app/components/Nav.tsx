"use client";

import { useState } from "react";

function LogoMark({ size = 42, inner = 24 }: { size?: number; inner?: number }) {
  return (
    <div
      className="logo-mark"
      style={{ width: size, height: size, borderRadius: size > 36 ? 10 : 8 }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: inner, height: inner }}
      >
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    </div>
  );
}

export function Logo({ small = false }: { small?: boolean }) {
  if (small) {
    return (
      <div className="logo" style={{ fontSize: 18 }}>
        <LogoMark size={34} inner={18} />
        <span>
          Up<span className="accent">Or</span>Pay
        </span>
      </div>
    );
  }
  return (
    <div className="logo">
      <LogoMark />
      <span>
        Up<span className="accent">Or</span>Pay
      </span>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <Logo />
        <div className="nav-links">
          <a href="#how">How It Works</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#waitlist" className="cta-btn desktop-cta">
          JOIN WAITLIST <span className="arrow">→</span>
        </a>
        <button
          className={`hamburger${open ? " open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        <a href="#how" onClick={close}>How It Works</a>
        <a href="#features" onClick={close}>Features</a>
        <a href="#faq" onClick={close}>FAQ</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="#waitlist" className="cta-btn" onClick={close}>
          JOIN WAITLIST <span>→</span>
        </a>
      </div>
    </>
  );
}
