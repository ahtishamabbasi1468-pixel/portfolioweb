import { useEffect, useState } from 'react';

/**
 * Cheap heuristic for whether we should show the full 3D scene / heavy
 * animations, or fall back to something lighter for mobile / low-power
 * devices and people who asked for reduced motion.
 */
const useDeviceCapability = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 768px)');
        const motionMql = window.matchMedia('(prefers-reduced-motion: reduce)');

        const updateMobile = () => setIsMobile(mql.matches);
        const updateMotion = () => setReducedMotion(motionMql.matches);

        updateMobile();
        updateMotion();

        mql.addEventListener('change', updateMobile);
        motionMql.addEventListener('change', updateMotion);
        return () => {
            mql.removeEventListener('change', updateMobile);
            motionMql.removeEventListener('change', updateMotion);
        };
    }, []);

    return { isMobile, reducedMotion, shouldSimplify: isMobile || reducedMotion };
};

export default useDeviceCapability;
