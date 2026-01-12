import React from 'react';
import { motion } from 'framer-motion';
import {
    FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaLinux, FaFigma
} from 'react-icons/fa';
import {
    SiC, SiOpencv, SiMongodb, SiMysql, SiExpress, SiNextdotjs, SiTailwindcss, SiArduino, SiCanva, SiPostgresql, SiFirebase, SiVercel
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: <FaJava color="#007396" /> },
                { name: "C", icon: <SiC color="#A8B9CC" /> },
                { name: "Python", icon: <FaPython color="#3776AB" /> },
                { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> }
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
                { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> }
            ]
        },
        {
            title: "Libraries & Frameworks",
            skills: [
                { name: "React.js", icon: <FaReact color="#61DAFB" /> },
                { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
                { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
                { name: "Express.js", icon: <SiExpress color="#000000" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
                { name: "OpenCV", icon: <SiOpencv color="#5C3EE8" /> },
                { name: "Mongoose", icon: <SiMongodb color="#47A248" /> }
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
                { name: "GitHub", icon: <FaGithub color="#181717" /> },
                { name: "Figma", icon: <FaFigma color="#F24E1E" /> },
                { name: "Canva", icon: <SiCanva color="#00C4CC" /> },
                { name: "Arduino IDE", icon: <SiArduino color="#00979D" /> },
                { name: "Linux", icon: <FaLinux color="#FCC624" /> },
                { name: "Vercel", icon: <SiVercel color="#000000" /> }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
                { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
                { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
                { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <section id="skills" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 className="section-title">Technical <span>Skills</span></h2>

                {skillCategories.map((category, index) => (
                    <div key={index} style={{ marginBottom: '40px' }}>
                        <h3 style={{
                            color: 'var(--text-primary)',
                            marginBottom: '20px',
                            borderLeft: '4px solid var(--primary-color)',
                            paddingLeft: '10px'
                        }}>
                            {category.title}
                        </h3>
                        <motion.div
                            className="skills-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
                                gap: '15px'
                            }}
                        >
                            {category.skills.map((skill, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="skill-card glass"
                                    whileHover={{ scale: 1.05, translateY: -5 }}
                                    style={{
                                        padding: '15px 10px',
                                        borderRadius: '12px',
                                        textAlign: 'center',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <div style={{ fontSize: '2rem' }}>
                                        {skill.icon}
                                    </div>
                                    <span style={{
                                        color: 'var(--text-secondary)',
                                        fontWeight: '500',
                                        fontSize: '0.85rem'
                                    }}>
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
