import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        title: 'HireX',
        category: 'AI/ML',
        description: 'An end-to-end AI-powered hiring platform automating resume screening, assessments, interview scheduling, and email workflows for GCCs.',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
        github: '#',
        live: '#'
    },
    {
        title: 'Effi-Track',
        category: 'Web Dev',
        description: 'A real-time employee and project monitoring website designed to improve task management by tracking project details, monitoring deadlines, and sending automated alerts.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
        github: '#',
        live: '#'
    },
    {
        title: 'RescueX',
        category: 'AI/ML',
        description: 'An intelligent drone-powered disaster relief system that rapidly detects risks, locates survivors, and delivers aid to support life-saving rescue operations.',
        image: 'https://images.unsplash.com/photo-1508614589041-895b8c9d7ef5?auto=format&fit=crop&q=80&w=600',
    },
    {
        title: 'Fertilizer Dispenser',
        category: 'IoT',
        description: 'A compact vehicle that effectively applies fertilizer on both sides of crop rows, increasing farming precision and lowering manual labor costs.',
        image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=600',
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Web Dev', 'AI/ML', 'IoT'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">My <span>Projects</span></h2>

                {/* Filter Buttons */}
                <div className="filter-container" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`btn ${filter === cat ? 'btn-primary' : 'btn-outline'}`}
                            style={{ padding: '8px 20px', borderRadius: '25px', transition: 'all 0.3s ease' }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-container">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={`project-card glass ${index % 2 !== 0 ? 'reverse' : ''}`}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <div style={{ marginBottom: '10px' }}>
                                        <span className="badge glass" style={{ fontSize: '0.8rem', padding: '5px 12px' }}>{project.category}</span>
                                    </div>
                                    <p>{project.description}</p>
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} className="btn btn-outline">
                                                <Github size={18} style={{ marginRight: '8px' }} /> GitHub
                                            </a>
                                        )}
                                        {project.live && (
                                            <a href={project.live} className="btn btn-primary">
                                                <ExternalLink size={18} style={{ marginRight: '8px' }} /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Projects;
