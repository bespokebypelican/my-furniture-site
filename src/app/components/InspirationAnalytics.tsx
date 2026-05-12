"use client"
import { useEffect } from 'react';

export function InspirationAnalytics() {
  useEffect(() => {
    window.gtag?.('event', 'inspiration_view');
  }, []);
  return null;
}
