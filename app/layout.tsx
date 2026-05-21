import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UpOrPay — Show Up. Or Pay.",
  description:
    "Stake real money on plans with friends. No-shows lose. Attendees win. Join the UpOrPay waitlist for early access.",
  openGraph: {
    title: "UpOrPay — Show Up. Or Pay.",
    description:
      "Stake real money on plans with friends. No-shows lose. Attendees win.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UpOrPay — Show Up. Or Pay.",
    description:
      "Stake real money on plans with friends. No-shows lose. Attendees win.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
