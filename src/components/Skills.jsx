import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Boxes,
    Braces,
    Server,
    GitBranch,
    Database,
    Workflow,
    Layers,
    Smartphone,
    Globe,
    Palette,
    PenTool,
    Image,
    Layout
} from 'lucide-react';

const SKILLS = [
    // Development
    {
        icon: Code2,
        tag: 'Core',
        title: 'C# / .NET',
        sub: 'ASP.NET Core Web API'
    },
    {
        icon: Boxes,
        tag: 'Frontend',
        title: 'React.js',
        sub: 'Hooks & State Management'
    },
    {
        icon: Braces,
        tag: 'Language',
        title: 'JavaScript',
        sub: 'Modern ES6+'
    },
    {
        icon: Globe,
        tag: 'Markup',
        title: 'HTML5 / CSS3',
        sub: 'Responsive UI'
    },
    {
        icon: Server,
        tag: 'Backend',
        title: 'ASP.NET MVC',
        sub: 'Entity Framework'
    },
    {
        icon: Database,
        tag: 'RDBMS',
        title: 'SQL Server',
        sub: 'Stored Procs & EF Core'
    },
    {
        icon: Layers,
        tag: 'NoSQL',
        title: 'MongoDB / Firebase',
        sub: 'Document & Realtime DB'
    },
    {
        icon: Workflow,
        tag: 'API',
        title: 'RESTful APIs',
        sub: 'Design & Integration'
    },
    {
        icon: GitBranch,
        tag: 'Tools',
        title: 'Git & GitHub',
        sub: 'Version Control'
    },
    {
        icon: Smartphone,
        tag: 'Mobile',
        title: 'React Native',
        sub: 'Cross-Platform Apps'
    },

    // UI/UX & Design
    {
        icon: Palette,
        tag: 'UI/UX',
        title: 'Figma',
        sub: 'UI Design & Prototyping'
    },
    {
        icon: PenTool,
        tag: 'Design',
        title: 'Canva',
        sub: 'Graphics & Visual Design'
    },
    {
        icon: PenTool,
        tag: 'UI Design',
        title: 'Adobe XD',
        sub: 'Wireframes & Prototypes'
    },
    {
        icon: Image,
        tag: 'Graphics',
        title: 'Photoshop',
        sub: 'Image Editing & Design'
    },
    {
        icon: Layout,
        tag: 'Web Design',
        title: 'Responsive Design',
        sub: 'Modern UI & UX'
    },
];

const Skills = () => {
    return (
        <section
            className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-obsidian text-cream relative border-b border-warm-gold/20"
            id="skills"
        >
            <div className="max-w-[1300px] mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-warm-gold/20">

                    <div>
                        <span className="font-mono text-xs text-bright-gold tracking-eyebrow uppercase font-semibold">
                            02 // Skills
                        </span>

                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-cream mt-2 font-light">
                            Skills & Expertise
                        </h2>
                    </div>

                    <p className="font-mono text-xs text-muted max-w-sm">
                        A production-ready toolkit spanning full-stack development,
                        UI/UX design, and modern digital experiences.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                    {SKILLS.map(({ icon: Icon, tag, title, sub }, i) => (

                        <motion.div
                            key={title}
                            className="
                                p-6
                                rounded-2xl
                                bg-dark-card
                                border
                                border-warm-gold/20
                                hover:border-warm-gold/60
                                transition-all
                                duration-300
                                flex
                                flex-col
                                justify-between
                                h-44
                                group
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3
                            }}
                            transition={{
                                duration: 0.4,
                                delay: (i % 5) * 0.06
                            }}
                        >

                            {/* Top */}
                            <div className="flex justify-between items-start">

                                <Icon
                                    className="
                                        w-7
                                        h-7
                                        text-warm-gold
                                        group-hover:scale-110
                                        transition-transform
                                        duration-300
                                    "
                                />

                                <span
                                    className="
                                        font-mono
                                        text-[10px]
                                        text-bright-gold
                                        font-semibold
                                        uppercase
                                    "
                                >
                                    {tag}
                                </span>

                            </div>

                            {/* Bottom */}
                            <div>

                                <h5
                                    className="
                                        font-serif
                                        text-lg
                                        text-cream
                                        group-hover:text-bright-gold
                                        transition-colors
                                        font-medium
                                    "
                                >
                                    {title}
                                </h5>

                                <p
                                    className="
                                        font-mono
                                        text-[11px]
                                        text-muted
                                        mt-1
                                    "
                                >
                                    {sub}
                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;