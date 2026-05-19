import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    // FIX: Extra double brackets [[ ]] hata kar single array [ ] kar diya hai
    const projects = [
        {
            id: 1,
            title: 'Repair Your Car (Intelligent Vehicle Assistance)',
            description: 'A comprehensive full-stack platform connecting users with vehicle experts. Features real-time multi-role logic (Admin, Expert, User), dynamic troubleshooting steps with image/video rendering, and user feedback/rating modules.',
            tags: ['ReactJS', 'ASP.NET Web API', 'SQL Server', 'Entity Framework'],
            link: '#',
            github: '#'
        },
        {
            id: 2,
            title: 'Gym Management System',
            description: 'A robust web application designed to streamline gym operations. Includes member onboarding, membership plan subscription tracking, attendance management, and an interactive dashboard for financial reports and analytics.',
            tags: ['ReactJS', 'ASP.NET', 'SQL Server', 'CSS Transitions'],
            link: '#',
            github: '#'
        },
        {
            id: 3,
            title: 'Micro-Task Earning Platform',
            description: 'A simple and intuitive earning website where users can perform daily micro-tasks, view video tutorials, and track points. Features a clean, secure dashboard for balance management and real-time ledger records.',
            tags: ['ReactJS', 'Node.js', 'RESTful APIs', 'Bootstrap'],
            link: '#',
            github: '#'
        },
        {
            id: 4,
            title: 'Local Connect App Platform',
            description: 'A responsive full-stack platform focused on bridging the gap between local service providers and community users, highlighting professional mobile-first grid layouts and optimized query performance.',
            tags: ['ReactJS', 'ASP.NET', 'RESTful APIs', 'SQL Server'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <section className="projects-section container" id="projects">
            <h2 className="section-title gradient-text">Technical Projects</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card glass-card">
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
                            <a href={project.github} className="icon-link" aria-label="GitHub Repository">
                                <Github size={20} />
                            </a>
                            <a href={project.link} className="icon-link" aria-label="Live Demo">
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;