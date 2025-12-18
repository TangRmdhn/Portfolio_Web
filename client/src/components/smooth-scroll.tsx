import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "wouter";

export default function SmoothScroll() {
  const [pathname] = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 2.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.7,
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // 2. Animation Frame Loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 3. Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []); // Run once on mount

  // 4. Force scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      // immediate: true means "jump instantly", don't animate the scroll up
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]); // Trigger every time URL changes

  return null;
}