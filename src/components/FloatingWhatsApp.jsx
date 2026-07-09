import React from 'react';
import './FloatingWhatsApp.css';

/**
 * Persistent floating WhatsApp button, visible on every section of the page.
 * Opens a direct WhatsApp chat in a new tab.
 */
const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/923110506636"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp"
            aria-label="Chat on WhatsApp"
        >
            <span className="floating-whatsapp-ping"></span>
            <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
                <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.34.664 4.523 1.814 6.377L4 29l7.84-1.775A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm6.99 16.98c-.302.85-1.49 1.56-2.44 1.766-.65.14-1.5.25-4.35-.934-3.65-1.51-6-5.21-6.18-5.45-.18-.24-1.47-1.96-1.47-3.74 0-1.78.93-2.65 1.26-3.01.3-.33.66-.41.88-.41.22 0 .44.002.63.012.2.01.47-.076.735.56.302.72.996 2.49 1.083 2.67.086.18.145.39.03.63-.11.24-.17.39-.34.6-.17.21-.36.47-.51.63-.17.18-.35.37-.15.72.2.35.9 1.48 1.93 2.4 1.33 1.19 2.45 1.56 2.8 1.73.35.17.55.15.75-.09.2-.24.86-1 1.09-1.35.23-.35.46-.29.77-.17.32.11 2.02.95 2.37 1.13.35.17.58.26.66.4.09.15.09.85-.21 1.7Z" />
            </svg>
            <span className="floating-whatsapp-tooltip">Chat on WhatsApp</span>
        </a>
    );
};

export default FloatingWhatsApp;
