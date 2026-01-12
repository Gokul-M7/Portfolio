import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar glass ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-content">
                <div className="logo">
                    <span className="logo-icon">G</span>
                </div>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="nav-actions">
                    <div className="social-links">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:your.email@example.com" aria-label="Email" title="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                    <a 
                        href="/resume.pdf" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                        aria-label="View Resume"
                        title="View Resume"
                    >
                        <FileText size={18} />
                        <span>Resume</span>
                    </a>
                    <ThemeToggle />
                </div>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {isOpen && (
                    <div className="mobile-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="/resume.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button-mobile"
                            style={{ marginTop: '10px' }}
                        >
                            <FileText size={18} />
                            <span>View Resume</span>
                        </a>
                        <div className="mobile-social">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:your.email@example.com">
                                <Mail size={20} />
                            </a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <ThemeToggle />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
