import React from 'react';
import './Experience.css';

const Experience = () => {
    const internships = [
        {
            title: "Software Developer Intern",
            subtitle: "Sonsoa Technologies Ltd, England.",
            date: "January 2025",
            description: "Contributed to developing Rehab360 Project."
        },
        {
            title: "Web Developer Intern",
            subtitle: "Hifi11 Technologies, Dharmapuri.",
            date: "July 2025",
            description: "Contributed to Real World Projects."
        },
        {
            title: "Electronics Assembly, Testing & Automation",
            subtitle: "ECI System Private Limited, Coimbatore.",
            date: "Jan 2025",
            description: "Worked on electronics assembly and automation testing."
        }
    ];

    const timelineData = internships;

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">My <span>Experience</span></h2>

                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass">
                                <span className="timeline-date">{item.date}</span>
                                <h3>{item.title}</h3>
                                <h4>{item.subtitle}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
