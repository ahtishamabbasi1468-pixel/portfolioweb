import React from 'react';
import { ArrowUp } from 'lucide-react';

const FOOTER_LINKS = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-obsidian text-cream py-16 px-6 md:px-12 lg:px-20 border-t border-warm-gold/20">
            <div className="max-w-[1300px] mx-auto space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-warm-gold/15">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-dark-card border border-warm-gold/40 flex items-center justify-center">
                            <span className="font-serif text-2xl font-light text-bright-gold">AR</span>
                        </div>
                        <div>
                            <span className="font-serif text-xl tracking-tight text-cream block font-medium">Ahtisham Razzaq</span>
                            <span className="font-mono text-[11px] text-warm-gold uppercase tracking-widest">Full-Stack Web Developer/Designer</span>
                        </div>
                    </div>

                    <nav className="flex flex-wrap items-center gap-6 font-mono text-xs text-soft-cream/80 uppercase tracking-widest">
                        {FOOTER_LINKS.map((l) => (
                            <a key={l.name} href={l.href} className="hover:text-bright-gold transition-colors">
                                {l.name}
                            </a>
                        ))}
                    </nav>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 font-mono text-xs text-warm-gold hover:text-bright-gold transition-colors uppercase tracking-widest group"
                    >
                        <span>Back to Top</span>
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted">
                    <span>© {year} Ahtisham Razzaq. All rights reserved.</span>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/ahtishamabbasi1468-pixel" className="hover:text-bright-gold transition-colors">GitHub</a>
                        <span>·</span>
                        <a href="https://www.linkedin.com/in/ahtisham-razzaq-528402361" className="hover:text-bright-gold transition-colors">LinkedIn</a>
                        <span>·</span>
                        <a href="https://wa.me/923110506636" className="hover:text-bright-gold transition-colors">WhatsApp</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
