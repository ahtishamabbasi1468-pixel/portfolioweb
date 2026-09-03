import React from 'react';
import { ExternalLink, Github, ImageOff } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Repair Your Car (Intelligent Vehicle Assistance)',
            description: 'A comprehensive full-stack platform connecting users with vehicle experts. Features real-time multi-role logic (Admin, Expert, User), dynamic troubleshooting steps with image/video rendering, and user feedback/rating modules.',
            tags: ['ReactJS', 'ASP.NET Web API', 'SQL Server', 'Entity Framework'],
            image: '/Repair your car.jpg',
            link: '',
            github: 'https://github.com/ahtishamabbasi1468-pixel/Repair-your-car.git'
        },
        {
            id: 2,
            title: 'Gym Management System',
            description: 'A robust web application designed to streamline gym operations. Includes member onboarding, membership plan subscription tracking, attendance management, and an interactive dashboard for financial reports and analytics.',
            tags: ['ReactJS', 'ASP.NET', 'SQL Server', 'CSS Transitions'],
            image: '/Gym.png',
            link: '',
            github: 'https://github.com/ahtishamabbasi1468-pixel/Gym-Management'
        },
        {
            id: 3,
            title: 'Micro-Task Earning Platform',
            description: 'A simple and intuitive earning website where users can perform daily micro-tasks, view video tutorials, and track points. Features a clean, secure dashboard for balance management and real-time ledger records.',
            tags: ['ReactJS', 'Node.js', 'RESTful APIs', 'Bootstrap'],
            image: '/Micro earning.png',
            link: '',
            github: ''
        },
        // {
        //     id: 4,
        //     title: 'Local Connect App Platform',
        //     description: 'A responsive full-stack platform focused on bridging the gap between local service providers and community users, highlighting professional mobile-first grid layouts and optimized query performance.',
        //     tags: ['ReactJS', 'ASP.NET', 'RESTful APIs', 'SQL Server'],
        //     // image: '/projects/local-connect.jpg',
        //     link: '',
        //     github: ''
        // },
        {
            id: 5,
            title: 'Professional E-Commerce Web Application',
            description: 'A comprehensive full-stack e-commerce solution featuring secure user authentication, dynamic product catalog, real-time cart management, and an integrated Admin Dashboard for monitoring revenue, managing inventory, and processing customer orders.',
            tags: ['ReactJS', 'ASP.NET Web API', 'MS SQL Server', 'RESTful APIs', 'State Management'],
            image: '/Skin.png',
            link: '',
            github: 'https://github.com/ahtishamabbasi1468-pixel/e-commerce.git'
        },
        {
            id: 6,
            title: 'Ignis Motors - Smart Car Showroom',
            description: 'A premium smart car showroom web application with car listings, EMI calculator, test-drive booking, wishlists, reviews, and a full-featured 16-section admin panel with real-time CRUD, analytics, and role-based access.',
            tags: ['React.js', 'Redux Toolkit', 'Vite', 'Firebase', 'Framer Motion'],
            image: '/ShowRoom.png',
            link: '',
            github: 'https://github.com/ahtishamabbasi1468-pixel/Showroom'
        }

    ];

    const handleImgError = (e) => {
        e.target.style.display = 'none';
        e.target.parentElement.classList.add('no-image');
    };

    return (
        <section className="projects-section container" id="projects">
            <h2 className="section-title gradient-text">Technical Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card glass-card">
                        <div className="project-image-wrapper">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                                loading="lazy"
                                onError={handleImgError}
                            />
                            <div className="no-image-fallback">
                                <ImageOff size={28} />
                                <span>Screenshot coming soon</span>
                            </div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc text-muted">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links">
                            {project.github ? (
                                <a
                                    href={project.github}
                                    className="icon-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub Repository"
                                >
                                    <Github size={20} /> Code
                                </a>
                            ) : (
                                <span className="icon-link disabled" aria-disabled="true">
                                    <Github size={20} /> Code
                                </span>
                            )}

                            {project.link ? (
                                <a
                                    href={project.link}
                                    className="icon-link primary"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink size={20} /> Live Demo
                                </a>
                            ) : (
                                <span className="icon-link disabled" aria-disabled="true">
                                    <ExternalLink size={20} /> Coming Soon
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
