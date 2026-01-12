import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title">Contact <span>Me</span></h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', marginTop: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Let's Work Together</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            I'm open to freelance opportunities and full-time positions. Feel free to reach out!
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Email</h4>
                                    <a href="mailto:gokulvm2005@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>your.email@example.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Phone</h4>
                                    <a href="tel:+91 6383920727" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>+1 234 567 890</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '5px' }}>Location</h4>
                                    <p style={{ color: 'var(--text-secondary)' }}>City, Country</p>
                                </div>
                            </div>
                        </div>

                        {/* Resume Download Button */}
                        <a 
                            href="/resume.pdf" 
                            download 
                            className="btn btn-primary" 
                            style={{ marginTop: '30px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                        >
                            <span>📥 Download Resume</span>
                        </a>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
                        <div className="glass" style={{ padding: '40px', borderRadius: '15px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--primary-color)' }}>Quick Connect</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
                                Reach out via email or phone. I typically respond within 24 hours.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <a 
                                    href="mailto:your.email@example.com"
                                    className="btn btn-primary"
                                    style={{ padding: '12px 24px' }}
                                >
                                    Send Email
                                </a>
                                <a 
                                    href="tel:+1234567890"
                                    className="btn btn-outline"
                                    style={{ padding: '12px 24px' }}
                                >
                                    Call Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
