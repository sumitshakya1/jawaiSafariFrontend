'use client';

import React, { Suspense, useEffect, useState } from 'react';

// Dynamically import FloatingWhatsApp only after page is interactive
const FloatingWhatsApp = React.lazy(() =>
  import('@/global/components/cta/FloatingWhatsApp').then((m) => ({ default: m.FloatingWhatsApp }))
);

/**
 * LazyWhatsApp — Defers the WhatsApp floating button until after page load.
 * This removes it from the critical path, reducing TBT and FCP cost.
 * Visually identical: the button appears within ~500ms of page becoming interactive.
 */
export function LazyWhatsApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer until after browser is idle (after first paint & hydration)
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setMounted(true), { timeout: 2000 });
    } else {
      // Fallback: defer 500ms for browsers without requestIdleCallback
      const t = setTimeout(() => setMounted(true), 500);
      return () => clearTimeout(t);
    }
  }, []);

  if (!mounted) return null;

  return (
    <Suspense fallback={null}>
      <FloatingWhatsApp />
    </Suspense>
  );
}
