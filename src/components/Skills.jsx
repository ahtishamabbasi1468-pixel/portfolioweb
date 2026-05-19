import React from 'react';
import './Skills.css';

const Skills = () => {
    // FIX: Array structure ko simple single array [] banaya hai, double [[]] nahi.
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["JavaScript", "C# (C-Sharp)", "SQL", "Python", "C++", "HTML5/CSS3"]
        },
        {
            title: "Frontend Development",
            skills: ["ReactJS", "React Hooks", "State Management", "Bootstrap", "Responsive UI/UX"]
        },
        {
            title: "Backend Development",
            skills: ["ASP.NET Core Web API", "ASP.NET MVC", "Entity Framework", "Node.js"]
        },
        {
            title: "Architecture & Patterns",
            skills: ["MVC Architecture", "Repository Pattern", "Multi-Role Authentication", "RESTful APIs Design"]
        },
        {
            title: "Databases & Storage",
            skills: ["SQL Server (MSSQL)", "Entity Framework Core", "Local Storage", "Database Design"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git & GitHub", "Visual Studio", "VS Code", "Postman", "IIS Server Configuration"]
        }
    ];

    return (
        <section className="skills-section container" id="skills">
            <h2 className="section-title gradient-text">Technical Skills</h2>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card glass-card">
                        <h3 className="skill-category-title">{category.title}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;