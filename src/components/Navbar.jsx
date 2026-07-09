import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { name: 'Home', href: '#profile' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scroll when the mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#profile" className="navbar-logo gradient-text" onClick={closeMenu}>
                    AR<span className="navbar-logo-dot">.</span>
                </a>

                <div className={`navbar-links ${isOpen ? 'navbar-links-open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="navbar-link"
                            onClick={closeMenu}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Theme toggle shows inside the mobile drawer too */}
                    <button
                        className="theme-toggle-btn mobile-only"
                        onClick={toggleTheme}
                        aria-label="Toggle dark / light mode"
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
                </div>

                <div className="navbar-actions">
                    <button
                        className="theme-toggle-btn desktop-only"
                        onClick={toggleTheme}
                        aria-label="Toggle dark / light mode"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        className="navbar-toggle"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
