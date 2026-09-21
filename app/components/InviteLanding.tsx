import { DeepLinkAutoFire } from '../pot/[id]/DeepLinkAutoFire';

interface Props {
  /** Custom-scheme link that opens the installed app. */
  appLink: string;
  code: string;
  codeLabel: string;
}

/** Fallback page shown when an invite link opens in the browser instead of the app. */
export function InviteLanding({ appLink, code, codeLabel }: Props) {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'var(--bg)',
        color: 'var(--text)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 24px',
        textAlign: 'center',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <DeepLinkAutoFire deepLink={appLink} />

      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 14px',
          background: 'var(--lime-soft)',
          color: 'var(--lime)',
          borderRadius: 999,
          border: '1px solid var(--lime-glow)',
          fontSize: 12,
          letterSpacing: 1,
          fontWeight: 700,
          marginBottom: 28,
        }}
      >
        <span>⚡</span>
        <span>YOU'RE INVITED</span>
      </div>

      <h1
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(40px, 9vw, 72px)',
          lineHeight: 1.02,
          margin: 0,
          letterSpacing: -0.5,
        }}
      >
        Show Up.
        <br />
        <span style={{ color: 'var(--lime)' }}>Or Pay.</span>
      </h1>

      <p
        style={{
          color: 'var(--muted)',
          fontSize: 16,
          lineHeight: 1.5,
          maxWidth: 360,
          marginTop: 18,
          marginBottom: 32,
        }}
      >
        A friend dropped you a pot.
        <br />
        Stake real money. Show up or fund the winners.
      </p>

      <a
        href={appLink}
        style={{
          display: 'inline-block',
          background: 'var(--lime)',
          color: '#000',
          padding: '16px 32px',
          borderRadius: 999,
          fontWeight: 800,
          fontSize: 15,
          textDecoration: 'none',
          letterSpacing: 0.3,
          boxShadow: '0 8px 24px var(--lime-glow)',
        }}
      >
        Open in app →
      </a>

      <div
        style={{
          marginTop: 36,
          padding: '20px 22px',
          background: 'var(--panel)',
          border: '1px solid var(--line)',
          borderRadius: 16,
          maxWidth: 360,
          width: '100%',
        }}
      >
        <p
          style={{
            margin: 0,
            color: 'var(--muted)',
            fontSize: 12,
            letterSpacing: 1,
            fontWeight: 700,
          }}
        >
          DON'T HAVE THE APP YET?
        </p>
        <p style={{ marginTop: 8, marginBottom: 16, fontSize: 14, color: 'var(--text)' }}>
          Get UpOrPay to join the pot.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          <span
            style={{
              padding: '10px 16px',
              background: 'var(--panel-2)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              fontSize: 13,
              color: 'var(--muted)',
            }}
          >
            App Store — soon
          </span>
          <span
            style={{
              padding: '10px 16px',
              background: 'var(--panel-2)',
              border: '1px solid var(--line)',
              borderRadius: 12,
              fontSize: 13,
              color: 'var(--muted)',
            }}
          >
            Play Store — soon
          </span>
        </div>
      </div>

      <p
        style={{
          marginTop: 28,
          color: 'var(--dim)',
          fontSize: 11,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {codeLabel}: {code}
      </p>
    </main>
  );
}
