import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * Wraps any section and fades/slides it into view the first time
 * it enters the viewport while scrolling.
 */
const Reveal = ({ children, className = '' }) => {
    const [ref, isVisible] = useScrollReveal();

    return (
        <div ref={ref} className={`reveal ${isVisible ? 'reveal-visible' : ''} ${className}`}>
            {children}
        </div>
    );
};

export default Reveal;
