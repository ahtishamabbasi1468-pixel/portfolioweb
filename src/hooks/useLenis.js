import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Sets up Lenis smooth scrolling for the whole page.
 * Respects prefers-reduced-motion by skipping smoothing entirely.
 */
const useLenis = () => {
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            duration: 1.1,
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        const rafId = requestAnimationFrame(raf);

        // Let in-page anchor links (#section) use Lenis' smooth scrollTo
        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;
            const id = anchor.getAttribute('href');
            if (!id || id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                lenis.scrollTo(target, { offset: -80 });
            }
        };
        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);
};

export default useLenis;
