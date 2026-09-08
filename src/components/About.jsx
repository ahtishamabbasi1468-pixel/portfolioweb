import React from 'react';
import { motion } from 'framer-motion';

const LAYERS = [
    {
        n: '01',
        title: 'Responsive Frontend & Reactive UI',
        desc: 'React, modern JavaScript, HTML5/CSS3 and interactive interfaces built for clarity and speed.',
        tag: 'Client',
    },
    {
        n: '02',
        title: 'REST APIs & Backend Services',
        desc: 'ASP.NET Core Web API and Node.js services with clean, well-structured endpoints.',
        tag: 'Server',
    },
    {
        n: '03',
        title: 'Domain Logic & Architecture',
        desc: 'MVC architecture, repository pattern and role-based access control across projects.',
        tag: 'Logic',
    },
    {
        n: '04',
        title: 'Persistent Data Storage',
        desc: 'SQL Server with Entity Framework Core, plus Firebase/Firestore for real-time apps.',
        tag: 'Data',
    },
];

const About = () => {
    return (
        <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-cream text-obsidian relative border-b border-warm-gold/30" id="about">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex items-center justify-between pb-8 mb-16 border-b border-warm-gold/30">
                    <span className="font-mono text-xs text-warm-gold tracking-[0.25em] uppercase font-semibold">
                        01 // About
                    </span>
                    <span className="font-mono text-xs text-muted uppercase hidden sm:inline">
                        End-to-End Methodology
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <motion.div
                        className="lg:col-span-5 space-y-6"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-obsidian font-normal">
                            I BUILD COMPLETE <br />
                            <span className="italic text-warm-gold font-normal">DIGITAL EXPERIENCES.</span>
                        </h2>
                        <p className="font-sans text-lg text-obsidian/80 leading-relaxed font-normal">
                            I'm a Full-Stack Web Developer specializing in React, ASP.NET Core,
                            REST APIs and database-driven applications. I don't just build
                            screens — I put together the whole system, from the interface
                            down to the database.
                        </p>
                        <div className="p-6 rounded-2xl bg-cream-tint border border-warm-gold/40 space-y-2">
                            <span className="font-mono text-xs text-warm-gold font-bold tracking-wider uppercase">
                                How I Work
                            </span>
                            <p className="font-serif text-xl italic text-obsidian">
                                "Clean structure on the backend. Careful attention to detail on the interface."
                            </p>
                        </div>
                    </motion.div>

                    <div className="lg:col-span-7 space-y-4">
                        {LAYERS.map((layer, i) => (
                            <motion.div
                                key={layer.n}
                                className="p-7 rounded-2xl bg-white/70 backdrop-blur-sm border border-warm-gold/35 shadow-sm hover:shadow-md transition-all duration-300 hover:border-warm-gold group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4">
                                        <span className="font-mono text-sm font-semibold text-warm-gold mt-1">LAYER {layer.n}</span>
                                        <div>
                                            <h4 className="font-serif text-2xl text-obsidian group-hover:text-warm-gold transition-colors font-medium">
                                                {layer.title}
                                            </h4>
                                            <p className="font-sans text-sm text-obsidian/75 mt-1">{layer.desc}</p>
                                        </div>
                                    </div>
                                    <span className="font-mono text-xs px-3 py-1 rounded bg-cream-tint text-obsidian font-medium shrink-0">
                                        {layer.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
