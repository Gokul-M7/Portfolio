import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, Github, Instagram } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";
import './Hero.css';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = ["Full Stack Developer", "AI Enthusiast", "IoT Developer", "Problem Solver"];

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, roles, typingSpeed]);

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                {/* Left Side: Profile Image with Yellow Background */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="profile-container">
                        <div className="yellow-bg"></div>
                        <div className="image-placeholder"></div>
                    </div>
                </motion.div>

                {/* Right Side: Text Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '10px' }}>Hi There,</h2>
                    <h1>
                        I'm <span className="highlight">Gokul</span>
                    </h1>
                    <h3 style={{ fontSize: '1.8rem', margin: '15px 0', color: 'var(--text-primary)', fontWeight: 'bold' }}>
                        I Am Into <span className="highlight-text">{text}</span>
                        <span className="cursor">|</span>
                    </h3>

                    <p style={{
                        margin: '20px 0',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: 'var(--text-secondary)',
                        maxWidth: '600px'
                    }}>
                        As a student of Electronics and Communication Engineering and an enthusiastic web developer, I love creating intelligent systems that combine automation, hardware, and software.
                        I work on projects involving real-time automation, AI-based tools, and full-stack development.
                        To expand my developer toolkit, I am always learning new technologies. I enjoy coming up with effective solutions to real-world issues, and I'm always willing to work with others on fascinating web development and automation projects.
                    </p>

                    <div className="hero-buttons" style={{ marginTop: '30px', marginBottom: '30px' }}>
                        <a href="#contact" className="btn btn-primary" style={{ borderRadius: '30px', padding: '12px 30px', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                            Contact Me <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </a>
                    </div>

                    <div className="social-icons">
                        <a href="#" className="social-icon"><Linkedin size={20} /></a>
                        <a href="#" className="social-icon"><Github size={20} /></a>
                        <a href="#" className="social-icon"><SiLeetcode size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
