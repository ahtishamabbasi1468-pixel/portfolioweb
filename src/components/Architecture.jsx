import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Boxes, Network, Cpu, Database } from 'lucide-react';

const STACKS = {
    dotnet: {
        label: '.NET Stack',
        nodes: [
            { icon: User, label: 'End User', sub: 'HTTPS / TLS' },
            { icon: Boxes, label: 'React', sub: 'UI & State' },
            { icon: Network, label: 'REST API', sub: 'JSON' },
            { icon: Cpu, label: 'ASP.NET Core', sub: 'Domain Logic', highlight: true },
            { icon: Database, label: 'SQL Server', sub: 'Persistence' },
        ],
    },
    firebase: {
        label: 'Firebase Stack',
        nodes: [
            { icon: User, label: 'End User', sub: 'HTTPS / TLS' },
            { icon: Boxes, label: 'React + Redux', sub: 'UI & State' },
            { icon: Network, label: 'Firebase Auth', sub: 'Identity' },
            { icon: Cpu, label: 'Firestore', sub: 'Realtime Sync', highlight: true },
            { icon: Database, label: 'Cloud Storage', sub: 'Persistence' },
        ],
    },
};

const Architecture = () => {
    const [active, setActive] = useState('dotnet');
    const stack = STACKS[active];

    return (
        <section
            className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-obsidian text-cream relative border-b border-warm-gold/20 overflow-hidden"
            id="pipeline"
        >
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-16 border-b border-warm-gold/20 gap-4">
                    <span className="font-mono text-xs text-bright-gold tracking-eyebrow uppercase font-semibold">
                        03 // System Pipeline
                    </span>
                    <div className="flex gap-2">
                        {Object.entries(STACKS).map(([key, s]) => (
                            <button
                                key={key}
                                onClick={() => setActive(key)}
                                className={`font-mono text-[11px] uppercase tracking-widest px-3 py-1.5 rounded-lg border transition-all ${
                                    active === key
                                        ? 'bg-warm-gold text-obsidian border-warm-gold font-semibold'
                                        : 'border-warm-gold/30 text-soft-cream/70 hover:border-warm-gold/60'
                                }`}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6 md:p-12 rounded-3xl bg-dark-card border border-warm-gold/25 relative shadow-2xl overflow-x-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            className="min-w-[700px] relative py-8 flex items-center justify-between"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none">
                                <line
                                    x1="60" x2="calc(100% - 60px)" y1="50%" y2="50%"
                                    stroke="rgba(200,169,107,0.3)" strokeDasharray="6 6" strokeWidth="2"
                                />
                            </svg>

                            {stack.nodes.map(({ icon: Icon, label, sub, highlight }, i) => (
                                <div key={label} className="flex flex-col items-center text-center relative z-10 space-y-2">
                                    <div
                                        className={
                                            highlight
                                                ? 'w-16 h-16 rounded-2xl bg-gradient-to-br from-warm-gold to-bright-gold text-obsidian flex items-center justify-center shadow-[0_0_30px_rgba(200,169,107,0.4)] ring-2 ring-bright-gold/40'
                                                : 'w-16 h-16 rounded-2xl bg-obsidian border border-warm-gold/40 flex items-center justify-center text-bright-gold shadow-lg'
                                        }
                                    >
                                        <Icon size={24} />
                                    </div>
                                    <span className={`font-mono text-xs font-medium ${highlight ? 'text-bright-gold font-bold' : 'text-cream'}`}>
                                        {label}
                                    </span>
                                    <span className="font-mono text-[10px] text-muted">{sub}</span>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-8 pt-6 border-t border-warm-gold/20 flex flex-wrap items-center gap-x-8 gap-y-2 font-mono text-xs text-muted">
                        <div>SECURITY: <span className="text-bright-gold">HTTPS / TLS</span></div>
                        <div>ARCHITECTURE: <span className="text-cream">Layered / MVC</span></div>
                        <div>DATA FORMAT: <span className="text-cream">JSON</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
