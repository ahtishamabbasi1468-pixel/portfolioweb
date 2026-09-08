import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className="py-16 px-6 md:px-12 lg:px-20 bg-cream text-obsidian relative border-b border-warm-gold/30" id="education">
            <div className="max-w-[1300px] mx-auto">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-warm-gold/20"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="lg:col-span-4 space-y-1">
                        <span className="font-mono text-xs text-warm-gold tracking-eyebrow uppercase font-semibold">Education</span>
                        <span className="font-mono text-xs px-3 py-1 mt-2 rounded bg-cream-tint border border-warm-gold/30 text-warm-gold font-semibold inline-block">
                            Sep 2022 — Jul 2026
                        </span>
                    </div>
                    <div className="lg:col-span-8 space-y-2">
                        <h4 className="font-serif text-2xl text-obsidian font-medium">Bachelor of Science in Computer Science</h4>
                        <span className="font-mono text-xs text-muted block">Arid Agriculture University, Rawalpindi, Pakistan</span>
                        <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] text-obsidian">
                            <span className="px-2.5 py-1 bg-white rounded border border-warm-gold/30">Data Structures &amp; Algorithms</span>
                            <span className="px-2.5 py-1 bg-white rounded border border-warm-gold/30">OOP</span>
                            <span className="px-2.5 py-1 bg-white rounded border border-warm-gold/30">Database Systems</span>
                            <span className="px-2.5 py-1 bg-white rounded border border-warm-gold/30">Software Engineering</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
