import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook that triggers a CSS class when an element enters the viewport.
 * Respects prefers-reduced-motion.
 * @param {Object} options
 * @param {string} [options.threshold=0.15] — visibility threshold
 * @param {string} [options.rootMargin='0px 0px -40px 0px'] — root margin
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
