import React from 'react';
import './AmbientBackground.css';

/**
 * Purely decorative, fixed-position background: a few soft blurred gradient
 * blobs that slowly drift. CSS-only (no canvas/WebGL) so it's cheap on every
 * device, and respects prefers-reduced-motion globally via index.css.
 */
const AmbientBackground = () => {
    return (
        <div className="ambient-bg" aria-hidden="true">
            <span className="ambient-blob ambient-blob-1" />
            <span className="ambient-blob ambient-blob-2" />
            <span className="ambient-blob ambient-blob-3" />
            <div className="ambient-grid" />
        </div>
    );
};

export default AmbientBackground;
