import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import useDeviceCapability from '../hooks/useDeviceCapability';

const HeroScene = lazy(() => import('./HeroScene'));

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] },
    }),
};

const TECH_PILLS = ['React', 'C#', 'ASP.NET Core', 'JavaScript', 'SQL Server', 'MongoDB', 'Git'];

const Profile = () => {
    const { shouldSimplify } = useDeviceCapability();

    return (
        <section
            className="relative min-h-screen w-full bg-obsidian flex items-center pt-32 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden border-b border-warm-gold/15"
            id="hero"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-transparent pointer-events-none" />
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#c8a96b 1px, transparent 1px), linear-gradient(90deg, #c8a96b 1px, transparent 1px)',
                backgroundSize: '48px 48px',
            }} />

            <motion.div
                className="max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
                {/* Left column */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-7">
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-dark-card/90 border border-warm-gold/30 backdrop-blur-md w-fit shadow-md"
                        custom={0} variants={fadeUp}
                    >
                        <span className="w-2 h-2 rounded-full bg-bright-gold animate-pulse-gold" />
                        <span className="font-mono text-xs text-bright-gold uppercase tracking-eyebrow font-medium">
                            Full-Stack Web Developer/ designer
                        </span>
                    </motion.div>

                    <motion.div className="space-y-1" custom={1} variants={fadeUp}>
                        <h1 className="font-serif text-6xl sm:text-7xl xl:text-8xl text-cream tracking-tight uppercase leading-[0.95] font-light">
                            Ahtisham
                        </h1>
                        <h1 className="font-serif text-6xl sm:text-7xl xl:text-8xl text-warm-gold tracking-tight uppercase leading-[0.95] italic font-normal">
                            Razzaq
                        </h1>
                    </motion.div>

                    <motion.p
                        className="font-sans text-base sm:text-lg text-soft-cream/90 max-w-xl font-light leading-relaxed"
                        custom={2} variants={fadeUp}
                    >
                        <strong className="text-cream font-medium">
                            I BUILD DIGITAL PRODUCTS FROM INTERFACE TO BACKEND.
                        </strong>{' '}
                        I create modern web applications, scalable REST APIs and complete
                        full-stack systems with React and ASP.NET Core.
                    </motion.p>

                    <motion.div className="flex flex-wrap items-center gap-4 pt-2" custom={3} variants={fadeUp}>
                        <a
                            href="#work"
                            className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-warm-gold to-bright-gold text-obsidian font-mono text-xs uppercase tracking-widest font-semibold flex items-center gap-2 hover:shadow-[0_0_30px_rgba(200,169,107,0.45)] transition-all duration-300"
                        >
                            <span>View My Work</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#contact"
                            className="px-7 py-3.5 rounded-xl bg-dark-card border border-warm-gold/40 text-cream font-mono text-xs uppercase tracking-widest font-medium hover:border-warm-gold hover:bg-warm-gold/10 transition-all duration-300 flex items-center gap-2"
                        >
                            Let's Talk
                        </a>
                    </motion.div>

                    <motion.div
                        className="pt-8 border-t border-warm-gold/20 grid grid-cols-3 gap-6 max-w-lg"
                        custom={4} variants={fadeUp}
                    >
                        <div>
                            <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Current Focus</span>
                            <span className="font-mono text-xs text-bright-gold font-medium mt-0.5 block">React &amp; ASP.NET Core</span>
                        </div>
                        <div>
                            <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Based In</span>
                            <span className="font-mono text-xs text-cream font-medium mt-0.5 block">Rawalpindi, Pakistan</span>
                        </div>
                        <div>
                            <span className="font-mono text-[10px] text-muted uppercase tracking-wider block">Status</span>
                            <span className="font-mono text-xs text-bright-gold font-medium mt-0.5 block">Open to Work</span>
                        </div>
                    </motion.div>

                    <motion.div className="pt-2 flex flex-wrap gap-2.5 items-center" custom={5} variants={fadeUp}>
                        <span className="font-mono text-[10px] text-muted uppercase tracking-widest mr-2">Tech Arsenal:</span>
                        {TECH_PILLS.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg bg-dark-card border border-warm-gold/20 flex items-center gap-1.5 text-cream text-xs font-mono"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold" />
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Right column: 3D scene panel */}
                <motion.div
                    className="lg:col-span-6 relative flex items-center justify-center"
                    custom={2} variants={fadeUp}
                >
                    <div className="w-full h-[420px] sm:h-[500px] lg:h-[560px] relative rounded-3xl overflow-hidden border border-warm-gold/25 bg-dark-card/40 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.8)] flex items-center justify-center">
                        {!shouldSimplify ? (
                            <Suspense fallback={null}>
                                <HeroScene reduced={false} />
                            </Suspense>
                        ) : (
                            <div className="font-serif text-6xl text-warm-gold/50 italic">AR</div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Profile;
