import { useCallback, useEffect, useState } from 'react';

// No need for Appearance type with multiple options anymore
export type Appearance = 'dark';

// Apply dark theme function - always applies dark
const applyDarkTheme = () => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
  }
};

// Initialize theme function - always initializes to dark
export function initializeTheme() {
  applyDarkTheme();
  // No event listeners needed since we're always using dark mode
}

// Simplified useAppearance hook - always returns dark
export function useAppearance() {
  // Always set to dark
  const [appearance] = useState<Appearance>('dark');

  // updateAppearance is now a no-op function since we only allow dark mode
  const updateAppearance = useCallback(() => {
    // Do nothing - we always stay in dark mode
    // No need to update localStorage or cookies
  }, []);

  // Apply dark theme on mount
  useEffect(() => {
    applyDarkTheme();
    // No cleanup needed since we're not adding event listeners
  }, []);

  return { appearance, updateAppearance } as const;
}
