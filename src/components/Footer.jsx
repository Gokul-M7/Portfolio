import React from 'react';
import { Linkedin, Github } from 'lucide-react';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
        <footer style={{ padding: '50px 0', background: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(10px)', borderTop: '1px solid var(--text-secondary)', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: 'var(--text-primary)' }}>Gokul</h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                    <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} className="social-link">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} className="social-link">
                        <Github size={20} />
                    </a>
                    <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', transition: 'all 0.3s ease', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} className="social-link">
                        <SiLeetcode size={20} />
                    </a>
                </div>

                <p style={{ color: 'var(--text-secondary)' }}>
                    &copy; {new Date().getFullYear()} Gokul. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
