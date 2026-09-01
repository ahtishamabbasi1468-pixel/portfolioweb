import React from 'react';
import { Github, Linkedin, Mail, Smartphone, Download } from 'lucide-react';
import useTypingEffect from '../hooks/useTypingEffect';
import './Profile.css';

const ROLES = [
    'Fullstack Web Developer',
    'React JS Developer',
    'ASP.NET Core Developer',
    'REST API Developer',
];

const Profile = () => {
    const typedRole = useTypingEffect(ROLES, 90, 45, 1400);

    return (
        <section className="profile-section container animate-fade-in" id="profile">
            <div className="profile-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name gradient-text">Ahtisham Razzaq</h1>
                <h3 className="role">
                    {typedRole}
                    <span className="typing-cursor">|</span>
                </h3>
                <p className="bio text-muted">
                    Highly motivated Full-Stack Web Developer specializing in building scalable, user-focused web applications. Proficient in frontend development using ReactJS and modern JavaScript, paired with strong backend integration experience in ASP.NET and RESTful APIs. Adept at responsive UI design, efficient state management, and performance optimization. Passionate about writing clean, maintainable code to deliver high-performance digital solutions.
                </p>

                <div className="social-links">
                    <a href="#contact" className="social-btn primary">
                        <Mail size={20} /> Contact Me
                    </a>
                    <a href="/ahtisham_Razzaq.pdf" download="Ahtisham_Razzaq_Resume.pdf" className="social-btn secondary">
                        <Download size={20} /> Download Resume
                    </a>
                    <a href="https://github.com/ahtishamabbasi1468-pixel" className="social-icon" target="_blank" rel="noreferrer">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/ahtisham-razzaq-528402361?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="social-icon" target="_blank" rel="noreferrer">
                        <Linkedin size={24} />
                    </a>
                    <a href="tel:+923110506636" className="social-icon">
                        <Smartphone size={24} />
                    </a>
                </div>
            </div>

            <div className="profile-image-container animate-float">
                <div className="image-wrapper glow-effect">
                    <div className="animated-border"></div>
                    <div className="avatar-placeholder" style={{ padding: '6px' }}>
                        <img
                            src="/me.jpeg"
                            alt="Ahtisham Razzaq"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                        />
                    </div>
                </div>
                <div className="floating-badge badge-1 glass-card">
                    <span className="badge-icon">💻</span> Web Developer
                </div>
                <div className="floating-badge badge-2 glass-card">
                    <span className="badge-icon">⚡</span> React js, ASP.NET, RESTful APIs
                </div>
            </div>
        </section>
    );
};

export default Profile;
