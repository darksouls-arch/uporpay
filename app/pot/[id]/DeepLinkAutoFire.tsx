'use client';

import { useEffect, useState } from 'react';

const ANDROID_PACKAGE = 'app.uporpay.mobile';

/**
 * Chrome on Android often ignores a script redirect to a custom scheme;
 * an intent:// URL naming the package is the form it reliably honours.
 */
function toAndroidIntent(deepLink: string): string {
  const match = deepLink.match(/^([a-z][a-z0-9+.-]*):\/\/(.*)$/i);
  if (!match || match[1] === 'exp') return deepLink;
  const [, scheme, rest] = match;
  return `intent://${rest}#Intent;scheme=${scheme};package=${ANDROID_PACKAGE};end`;
}

interface Props {
  deepLink: string;
  delayMs?: number;
}

export function DeepLinkAutoFire({ deepLink, delayMs = 400 }: Props) {
  const [tried, setTried] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = /android/.test(ua);
    const isMobile = isAndroid || /iphone|ipad|ipod/.test(ua);
    if (!isMobile) return;

    const t = setTimeout(() => {
      setTried(true);
      window.location.href = isAndroid ? toAndroidIntent(deepLink) : deepLink;
    }, delayMs);
    return () => clearTimeout(t);
  }, [deepLink, delayMs]);

  if (!tried) return null;
  return (
    <noscript />
  );
}
