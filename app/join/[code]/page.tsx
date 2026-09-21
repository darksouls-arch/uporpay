import type { Metadata } from 'next';
import { InviteLanding } from '../../components/InviteLanding';

interface PageProps {
  params: Promise<{ code: string }>;
  searchParams: Promise<{ exp?: string }>;
}

// Invite links the backend hands out: https://uporpay.vercel.app/join/CODE.
// With the APK installed, Android opens these straight in the app (see
// public/.well-known/assetlinks.json); this page is only the fallback.
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const title = "You're invited to a pot on UpOrPay";
  const description = 'Show up. Or pay up. Real stakes with real friends.';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://uporpay.vercel.app/join/${code}`,
      siteName: 'UpOrPay',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: { index: false, follow: false },
  };
}

export default async function JoinInvitePage({ params, searchParams }: PageProps) {
  const { code } = await params;
  const { exp } = await searchParams;
  const safeCode = encodeURIComponent(code.toUpperCase());
  const appLink = exp ? `exp://${exp}/--/join/${safeCode}` : `uporpay://join/${safeCode}`;

  return <InviteLanding appLink={appLink} code={code.toUpperCase()} codeLabel="Invite code" />;
}
