import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDown, ArrowRight } from 'lucide-react';
import useActiveSection from '../hooks/useActiveSection';

const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Pipeline', href: '#pipeline', id: 'pipeline' },
    { name: 'Projects', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeId = useActiveSection(navLinks.map((l) => l.id));

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-[18px] left-1/2 -translate-x-1/2 w-[94%] max-w-[1300px] z-[100]">
            <div className="h-20 px-5 sm:px-8 rounded-2xl bg-obsidian/80 backdrop-blur-xl border border-warm-gold/20 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex items-center justify-between">
                <a href="#hero" className="flex items-center gap-3.5 group" onClick={closeMenu}>
                    <div className="w-10 h-10 rounded-xl bg-dark-card border border-warm-gold/30 flex items-center justify-center transition-all duration-300 group-hover:border-warm-gold group-hover:shadow-[0_0_15px_rgba(200,169,107,0.3)]">
                        <span className="font-serif text-lg font-light text-bright-gold group-hover:scale-105 transition-transform">AR</span>
                    </div>
                    <div className="hidden sm:flex flex-col">
                        <span className="font-serif text-base tracking-tight text-cream group-hover:text-bright-gold transition-colors leading-none font-medium">
                            Ahtisham Razzaq
                        </span>
                        <span className="font-mono text-[10px] text-warm-gold uppercase tracking-[0.22em] mt-1">
                            Full-Stack Web Developer
                        </span>
                    </div>
                </a>

                <nav className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-xs font-mono tracking-widest py-1 relative group transition-colors ${
                                activeId === link.id ? 'text-bright-gold' : 'text-soft-cream/80 hover:text-bright-gold'
                            }`}
                        >
                            {link.name.toUpperCase()}
                            <span
                                className={`absolute bottom-0 left-0 h-[1.5px] bg-warm-gold transition-all duration-300 ${
                                    activeId === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}
                            />
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="/ahtisham_Razzaq.pdf"
                        download="Ahtisham_Razzaq_Resume.pdf"
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-warm-gold/40 font-mono text-[11px] text-warm-gold uppercase tracking-widest hover:border-warm-gold hover:bg-warm-gold/10 transition-all duration-300"
                    >
                        <span>Resume</span>
                        <ArrowDown size={14} />
                    </a>
                    <a
                        href="#contact"
                        className="hidden md:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-warm-gold to-bright-gold text-obsidian font-mono text-xs font-semibold tracking-wider uppercase items-center gap-2 hover:shadow-[0_0_24px_rgba(200,169,107,0.5)] transition-all duration-300 hover:scale-[1.02]"
                    >
                        <span>Let's Talk</span>
                        <ArrowRight size={16} />
                    </a>
                    <button
                        className="lg:hidden w-10 h-10 rounded-xl border border-warm-gold/30 flex items-center justify-center text-cream"
                        onClick={() => setIsOpen((p) => !p)}
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <nav className="lg:hidden mt-3 rounded-2xl bg-obsidian/95 backdrop-blur-xl border border-warm-gold/20 shadow-2xl p-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            className={`px-3 py-3 rounded-lg font-mono text-xs tracking-widest uppercase transition-colors ${
                                activeId === link.id ? 'text-bright-gold bg-warm-gold/10' : 'text-soft-cream/80 hover:text-bright-gold'
                            }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Navbar;
