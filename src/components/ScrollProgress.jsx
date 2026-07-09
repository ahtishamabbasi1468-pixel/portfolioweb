import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

/**
 * Thin gradient bar pinned to the very top of the viewport that fills up
 * as the visitor scrolls down the page.
 */
const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(pct);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="scroll-progress-track">
            <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default ScrollProgress;
