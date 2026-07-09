import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to any element + a boolean that flips to true
 * once that element scrolls into the viewport (using IntersectionObserver).
 */
const useScrollReveal = (options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(node);
            }
        }, options);

        observer.observe(node);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [ref, isVisible];
};

export default useScrollReveal;
