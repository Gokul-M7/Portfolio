import React from 'react';
import './Education.css';

const Education = () => {
    const education = [
        {
            title: "B.E. in Electronics and Communication Engineering",
            subtitle: "KPR Institute of Engineering and Technology",
            date: "2023 - 2027",
            description: "CGPA: 8.14"
        },
        {
            title: "Minors in Software Development Engineering",
            subtitle: "KPR Institute of Engineering and Technology",
            date: "2024 - 2027",
            description: "CGPA: 8.33"
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">My <span>Education</span></h2>

                <div className="education-timeline">
                    {education.map((item, index) => (
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

export default Education;
