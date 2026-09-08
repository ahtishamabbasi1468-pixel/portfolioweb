import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, X } from 'lucide-react';

const projects = [
    {
        id: 1,
        num: '01',
        category: 'Full-Stack Platform',
        title: 'Repair Your Car — Vehicle Assistance',
        description: 'A comprehensive full-stack platform connecting users with vehicle experts. Features real-time multi-role logic (Admin, Expert, User), dynamic troubleshooting steps with image/video rendering, and user feedback/rating modules.',
        tags: ['ReactJS', 'ASP.NET Web API', 'SQL Server', 'Entity Framework'],
        image: '/Repair your car.jpg',
        link: '',
        github: 'https://github.com/ahtishamabbasi1468-pixel/Repair-your-car.git',
        problem: 'Vehicle owners often struggle to diagnose issues on their own and lack quick, structured access to expert guidance.',
        solution: 'A multi-role platform where users describe an issue and get step-by-step troubleshooting content curated by verified experts, with admin oversight.',
        features: ['Multi-role access: Admin, Expert, User', 'Dynamic troubleshooting steps with image/video', 'User feedback & rating system', 'Secure authentication'],
    },
    {
        id: 2,
        num: '02',
        category: 'Business Management',
        title: 'Gym Management System',
        description: 'A robust web application designed to streamline gym operations. Includes member onboarding, membership plan subscription tracking, attendance management, and an interactive dashboard for financial reports and analytics.',
        tags: ['ReactJS', 'ASP.NET', 'SQL Server', 'CSS Transitions'],
        image: '/Gym.png',
        link: '',
        github: 'https://github.com/ahtishamabbasi1468-pixel/Gym-Management',
        problem: 'Gyms managing memberships, attendance, and payments manually lose time and accuracy.',
        solution: 'A centralized system to onboard members, track subscriptions and attendance, and visualize revenue through an admin dashboard.',
        features: ['Member onboarding & profiles', 'Membership plan & subscription tracking', 'Attendance management', 'Financial reports & analytics dashboard'],
    },
    {
        id: 3,
        num: '03',
        category: 'Earning Platform',
        title: 'Micro-Task Earning Platform',
        description: 'A simple and intuitive earning website where users can perform daily micro-tasks, view video tutorials, and track points. Features a clean, secure dashboard for balance management and real-time ledger records.',
        tags: ['ReactJS', 'Node.js', 'RESTful APIs', 'Bootstrap'],
        image: '/Micro earning.png',
        link: '',
        github: '',
        problem: 'Users looking for flexible micro-earning opportunities need a simple, trustworthy way to complete tasks and track payouts.',
        solution: 'A lightweight platform with daily micro-tasks, tutorials, and a transparent balance/ledger system.',
        features: ['Daily micro-task feed', 'Video tutorials', 'Real-time balance & ledger records', 'Secure dashboard'],
    },
    {
        id: 5,
        num: '04',
        category: 'E-Commerce',
        title: 'Professional E-Commerce Web Application',
        description: 'A comprehensive full-stack e-commerce solution featuring secure user authentication, dynamic product catalog, real-time cart management, and an integrated Admin Dashboard for monitoring revenue, managing inventory, and processing customer orders.',
        tags: ['ReactJS', 'ASP.NET Web API', 'MS SQL Server', 'RESTful APIs'],
        image: '/Skin.png',
        link: '',
        github: 'https://github.com/ahtishamabbasi1468-pixel/e-commerce.git',
        problem: 'Small brands need a full-featured storefront with real admin control over inventory and orders, not just a static catalog.',
        solution: 'A complete e-commerce app with secure auth, a dynamic catalog, cart management, and an admin dashboard for revenue and inventory.',
        features: ['Secure user authentication', 'Dynamic product catalog', 'Real-time cart management', 'Admin dashboard: revenue, inventory, orders'],
    },
    {
        id: 6,
        num: '05',
        category: 'Automotive Showroom',
        title: 'Ignis Motors — Smart Car Showroom',
        description: 'A premium smart car showroom web application with car listings, EMI calculator, test-drive booking, wishlists, reviews, and a full-featured 16-section admin panel with real-time CRUD, analytics, and role-based access.',
        tags: ['React.js', 'Redux Toolkit', 'Vite', 'Firebase'],
        image: '/ShowRoom.png',
        link: '',
        github: 'https://github.com/ahtishamabbasi1468-pixel/Showroom',
        problem: 'Car showrooms need a modern digital storefront that also gives staff a powerful, real-time back office.',
        solution: 'A Firebase-backed showroom app with rich browsing (EMI calculator, wishlists, reviews) and a 16-section real-time admin panel.',
        features: ['Car listings, EMI calculator, test-drive booking', 'Wishlists & reviews', '16-section admin panel with real-time CRUD', 'Role-based access & analytics'],
    },
];

const DeviceMockup = ({ project }) => {
    const handleErr = (e) => {
        e.target.style.display = 'none';
        e.target.parentElement.classList.add('bg-dark-card');
    };
    return (
        <div className="relative rounded-2xl bg-obsidian p-3 md:p-4 device-screen-shadow border border-warm-gold/40 group overflow-hidden">
            <div className="flex items-center justify-between px-3 pb-2 border-b border-warm-gold/20 mb-2">
                <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[10px] text-warm-gold truncate max-w-[55%]">{project.category}</span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-dark-card flex items-center justify-center">
                <img
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                    onError={handleErr}
                    loading="lazy"
                />
            </div>
        </div>
    );
};

const ProjectCard = ({ project, index, onOpen }) => {
    const reversed = index % 2 === 1;
    return (
        <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
                className={`lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <DeviceMockup project={project} />
            </motion.div>

            <motion.div
                className={`lg:col-span-5 space-y-6 ${reversed ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <span className="font-mono text-xs text-warm-gold tracking-widest uppercase font-bold">
                    PROJECT {project.num} // {project.category}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-obsidian font-normal">{project.title}</h3>
                <p className="font-sans text-base text-obsidian/80 leading-relaxed font-normal">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs px-3 py-1 bg-white border border-warm-gold/30 rounded-lg text-obsidian">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-5 pt-2">
                    <button
                        onClick={() => onOpen(project)}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-obsidian font-semibold border-b-2 border-warm-gold pb-1 hover:text-warm-gold transition-colors"
                    >
                        <span>View Case Study</span>
                        <ArrowRight size={16} />
                    </button>
                    {project.github && (
                        <a
                            href={project.github} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-obsidian/70 hover:text-warm-gold transition-colors"
                        >
                            <Github size={15} /> Code
                        </a>
                    )}
                </div>
            </motion.div>
        </article>
    );
};

const CaseStudyModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[150] bg-obsidian/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-cream text-obsidian rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10 relative border border-warm-gold/40"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: 20 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button onClick={onClose} className="absolute top-6 right-6 w-9 h-9 rounded-full bg-obsidian/10 flex items-center justify-center hover:bg-obsidian/20 transition-colors">
                        <X size={18} />
                    </button>
                    <span className="font-mono text-xs text-warm-gold tracking-eyebrow uppercase font-semibold">Case Study</span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-obsidian mt-2 mb-6 font-normal">{project.title}</h3>

                    <div className="space-y-5">
                        <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-warm-gold mb-1">Problem</h4>
                            <p className="font-sans text-sm text-obsidian/80 leading-relaxed">{project.problem}</p>
                        </div>
                        <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-warm-gold mb-1">Solution</h4>
                            <p className="font-sans text-sm text-obsidian/80 leading-relaxed">{project.solution}</p>
                        </div>
                        <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-warm-gold mb-1">Main Features</h4>
                            <ul className="list-disc pl-5 space-y-1 font-sans text-sm text-obsidian/80">
                                {project.features.map((f) => <li key={f}>{f}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-mono text-xs uppercase tracking-wider text-warm-gold mb-1">Technology Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="font-mono text-xs px-3 py-1 bg-white border border-warm-gold/30 rounded-lg text-obsidian">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-8 pt-6 border-t border-warm-gold/20">
                        {project.github ? (
                            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-obsidian text-cream font-mono text-xs uppercase tracking-widest">
                                <Github size={16} /> Code
                            </a>
                        ) : null}
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-warm-gold to-bright-gold text-obsidian font-mono text-xs uppercase tracking-widest font-semibold">
                                <ExternalLink size={16} /> Live Demo
                            </a>
                        ) : null}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <section className="py-24 md:py-28 px-6 md:px-12 lg:px-20 bg-cream text-obsidian relative border-b border-warm-gold/30" id="work">
            <div className="max-w-[1300px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 pb-8 border-b border-warm-gold/30">
                    <div>
                        <span className="font-mono text-xs text-warm-gold tracking-eyebrow uppercase font-semibold">
                            04 // Selected Work
                        </span>
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian mt-2 font-light">Featured Case Studies</h2>
                    </div>
                </div>

                <div className="space-y-24 md:space-y-28">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} index={i} onOpen={setActiveProject} />
                    ))}
                </div>
            </div>

            <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
        </section>
    );
};

export default Projects;
