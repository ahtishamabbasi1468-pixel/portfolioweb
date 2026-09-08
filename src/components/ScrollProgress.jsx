import React, { useState, useEffect } from 'react';

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
        <div className="fixed top-0 left-0 right-0 h-[2px] z-[120] pointer-events-none bg-dark-card/50">
            <div
                className="h-full bg-gradient-to-r from-warm-gold via-bright-gold to-warm-gold transition-all duration-75"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
