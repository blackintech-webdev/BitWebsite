import { useCallback, useEffect, useState } from "react";

/**
 * Owns the active index and advances it every `intervalMs`
 * until the user picks one manually.
 *
 * Returns { active, select }. Pass `select` as HeaderButtons' onChange.
 */
export default function useAutoCycle(count, intervalMs = 5000) {
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Re-runs after every change, so each tab gets a full interval
    const id = setTimeout(() => setActive((a) => (a + 1) % count), intervalMs);
    return () => clearTimeout(id);
  }, [active, stopped, count, intervalMs]);

  const select = useCallback((i) => {
    setStopped(true); // user took control
    setActive(i);
  }, []);

  return { active, select };
}