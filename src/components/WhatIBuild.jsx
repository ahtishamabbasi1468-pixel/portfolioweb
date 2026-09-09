import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CAPABILITIES = [
    {
        n: '01',
        tag: 'Domain Systems',
        title: 'Full-Stack Web Applications',
        desc: 'End-to-end applications combining ASP.NET Core endpoints with responsive React interfaces — built for real users, not just demos.',
    },
    {
        n: '02',
        tag: 'Backend & Data',
        title: 'REST APIs & Admin Dashboards',
        desc: 'Well-structured REST APIs paired with data-dense admin dashboards for real-time CRUD, inventory and analytics.',
    },
    {
        n: '03',
        tag: 'Immersive UI',
        title: 'Interactive 3D & Motion',
        desc: 'React Three Fiber scenes and Framer Motion animations used where they genuinely add to the experience — not just for show.',
    },
    {
        n: '04',
        tag: 'Persistence',
        title: 'Database Design & Optimization',
        desc: 'Relational schema design in SQL Server with Entity Framework Core, plus Firebase/MongoDB for real-time and document-driven apps.',
    },
    {
        n: '04',
        title: 'UI/UX & Design',
        desc: 'Modern, responsive, and user-friendly interfaces with clean layouts and engaging visual experiences.',
        tag: 'Design',
    },
];

const WhatIBuild = () => {
    return (
        <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-obsidian text-cream relative border-b border-warm-gold/20" id="services">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-warm-gold/20">
                    <div>
                        <span className="font-mono text-xs text-bright-gold tracking-eyebrow uppercase font-semibold">
                            05 // Capabilities
                        </span>
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mt-2 font-light">Capabilities &amp; Disciplines</h2>
                    </div>
                </div>

                <div className="divide-y divide-warm-gold/20">
                    {CAPABILITIES.map((c, i) => (
                        <motion.div
                            key={c.n}
                            className="py-9 group flex flex-col lg:flex-row lg:items-center justify-between gap-5 transition-all duration-300 hover:pl-4"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: i * 0.06 }}
                        >
                            <div className="space-y-2 max-w-2xl">
                                <span className="font-mono text-xs text-bright-gold uppercase tracking-widest">
                                    {c.n} // {c.tag}
                                </span>
                                <h3 className="font-serif text-3xl sm:text-4xl text-cream group-hover:text-bright-gold transition-colors font-light">
                                    {c.title}
                                </h3>
                                <p className="font-sans text-sm sm:text-base text-soft-cream/70 font-light pt-1">
                                    {c.desc}
                                </p>
                            </div>
                            <ArrowRight className="text-warm-gold shrink-0 group-hover:translate-x-3 transition-transform duration-300" size={32} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIBuild;
