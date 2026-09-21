import type { Metadata } from 'next';
import { InviteLanding } from '../../components/InviteLanding';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ exp?: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const title = "You're invited to a pot on UpOrPay";
  const description = 'Show up. Or pay up. Real stakes with real friends.';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://uporpay.vercel.app/pot/${id}`,
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

export default async function PotInvitePage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { exp } = await searchParams;
  const appLink = exp ? `exp://${exp}/--/pot/${id}` : `uporpay://pot/${id}`;

  return <InviteLanding appLink={appLink} code={id} codeLabel="Pot ID" />;
}
