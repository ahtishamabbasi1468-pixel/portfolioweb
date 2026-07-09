import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import './BackToTop.css';

/**
 * Floating button that fades in once the visitor scrolls past the hero
 * section and smooth-scrolls back to the top when clicked.
 */
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            className={`back-to-top ${visible ? 'back-to-top-visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <ArrowUp size={20} />
        </button>
    );
};

export default BackToTop;
