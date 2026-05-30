'use client';

import { useEffect, useState } from 'react';

interface Props {
  deepLink: string;
  delayMs?: number;
}

export function DeepLinkAutoFire({ deepLink, delayMs = 400 }: Props) {
  const [tried, setTried] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /android|iphone|ipad|ipod/.test(ua);
    if (!isMobile) return;

    const t = setTimeout(() => {
      setTried(true);
      window.location.href = deepLink;
    }, delayMs);
    return () => clearTimeout(t);
  }, [deepLink, delayMs]);

  if (!tried) return null;
  return (
    <noscript />
  );
}
