import React from 'react';
import './Education.css';

const Education = () => {
    const education = [
        {
            title: "B.E. in Electronics and Communication Engineering",
            subtitle: "KPR Institute of Engineering and Technology",
            date: "2023 - 2027",
            description: "CGPA: 8.14",
            icon: "🎓"
        },
        {
            title: "Minors in Software Development Engineering",
            subtitle: "KPR Institute of Engineering and Technology",
            date: "2024 - 2027",
            description: "CGPA: 8.33",
            icon: "💻"
        },
        {
            title: "Higher Secondary (Maths/Biology)",
            subtitle: "Sri Vijay Vidyalaya Matric Hr. Sec. School – Dharmapuri",
            date: "2021 - 2023",
            description: "Percentage: 90% | Cutoff: 176",
            icon: "🏫"
        }
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">My <span>Education</span></h2>

                <div className="education-grid">
                    {education.map((item, index) => (
                        <div key={index} className="education-card glass">
                            <div className="card-header">
                                <span className="education-icon">{item.icon}</span>
                                <span className="education-date">{item.date}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
