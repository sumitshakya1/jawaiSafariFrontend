'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const FloatingWhatsApp = dynamic(
  () => import('@/global/components/cta/FloatingWhatsApp').then((m) => m.FloatingWhatsApp),
  { ssr: false }
);

export function LazyWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setMounted(true), { timeout: 1500 });
    } else {
      const t = setTimeout(() => setMounted(true), 500);
      return () => clearTimeout(t);
    }
  }, []);

  if (!mounted) return null;

  return <FloatingWhatsApp />;
}
