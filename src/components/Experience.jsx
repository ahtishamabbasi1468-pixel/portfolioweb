import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-cream text-obsidian relative border-b border-warm-gold/30" id="experience">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex items-center justify-between pb-8 mb-16 border-b border-warm-gold/30">
                    <span className="font-mono text-xs text-warm-gold tracking-[0.25em] uppercase font-semibold">
                        06 // Experience
                    </span>
                </div>

                <div className="relative pl-6 md:pl-10 space-y-16 border-l-2 border-warm-gold/40">
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-cream border-4 border-warm-gold shadow-md" />
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                            <div className="lg:col-span-4 space-y-1">
                                <span className="font-mono text-xs px-3 py-1 rounded bg-cream-tint border border-warm-gold/30 text-warm-gold font-semibold inline-block">
                                    Jan 2026 — Present
                                </span>
                                <h4 className="font-serif text-3xl text-obsidian mt-2 font-medium">MoroSoft</h4>
                                <span className="font-mono text-xs text-muted block">Rawalpindi, Pakistan</span>
                            </div>
                            <div className="lg:col-span-8 space-y-3">
                                <span className="font-mono text-xs text-warm-gold uppercase tracking-wider font-bold">
                                    Full-Stack Web Developer
                                </span>
                                <ul className="font-sans text-base text-obsidian/85 leading-relaxed font-normal space-y-2 list-disc pl-5">
                                    <li>Developed and maintained 5+ production-level web applications using modern JavaScript frameworks.</li>
                                    <li>Designed responsive and intuitive UI using HTML, CSS, and React, improving user engagement.</li>
                                    <li>Integrated RESTful APIs and implemented local data persistence using MongoDB and PostgreSQL.</li>
                                    <li>Implemented Google AdMob ads (Banner, Interstitial, Native) across multiple apps.</li>
                                    <li>Optimized ad placement to balance user experience and revenue generation while ensuring AdMob policy compliance.</li>
                                    <li>Optimized memory usage, background tasks, and app startup performance.</li>
                                    <li>Collaborated with designers, backend engineers, and QA teams in an Agile/Scrum environment.</li>
                                    <li>Followed clean coding standards, performed code reviews, and ensured scalable architecture.</li>
                                </ul>
                                <div className="flex flex-wrap gap-2 pt-2 font-mono text-[11px] text-obsidian">
                                    <span className="px-2.5 py-1 bg-white rounded border border-warm-gold/30">React</span>
                                    <span className="px-2.5 py-1 bg-white rounded border border-warm-gold/30">ASP.NET Core</span>
                                    <span className="px-2.5 py-1 bg-white rounded border border-warm-gold/30">SQL Server</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
