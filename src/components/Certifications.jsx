import React, { useState, useEffect } from 'react';
import { Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadCertifications = async () => {
            try {
                // Try to fetch metadata file
                const response = await fetch('/certificates/data.json');
                if (response.ok) {
                    const data = await response.json();
                    setCertifications(data);
                } else {
                    setCertifications([]);
                }
            } catch (error) {
                console.log('Certificates data file not yet created. Upload certificate images to /public/certificates/ folder with data.json');
                setCertifications([]);
            } finally {
                setLoading(false);
            }
        };

        loadCertifications();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const emptyState = (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-secondary)', gridColumn: '1 / -1' }}>
            <Award size={48} style={{ margin: '0 auto 20px', opacity: 0.3 }} />
            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>Add Your Certificates</h3>
            <p style={{ marginBottom: '20px' }}>
                Create a folder <code style={{ backgroundColor: 'var(--bg-secondary)', padding: '4px 8px', borderRadius: '4px', color: 'var(--primary-color)' }}>public/certificates</code> and add your certificate images with a <code style={{ backgroundColor: 'var(--bg-secondary)', padding: '4px 8px', borderRadius: '4px', color: 'var(--primary-color)' }}>data.json</code> file.
            </p>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                Format for data.json:
                <pre style={{ backgroundColor: 'var(--bg-secondary)', padding: '15px', borderRadius: '8px', overflow: 'auto', textAlign: 'left', marginTop: '10px', fontSize: '0.8rem' }}>
{`[
  {
    "id": 1,
    "title": "Certificate Title",
    "issuer": "Issuing Organization",
    "date": "2024",
    "image": "cert-filename.jpg",
    "description": "Optional description"
  }
]`}
                </pre>
            </p>
        </div>
    );

    return (
        <section id="certifications" style={{ padding: '100px 0', backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="container">
                <h2 className="section-title">My <span>Certifications</span></h2>

                {loading ? (
                    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            style={{ display: 'inline-block' }}
                        >
                            <Zap size={40} style={{ color: 'var(--primary-color)' }} />
                        </motion.div>
                        <p style={{ marginTop: '15px', color: 'var(--text-secondary)' }}>Loading certifications...</p>
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}
                    >
                        {certifications.length > 0 ? (
                            certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    variants={itemVariants}
                                    className="glass"
                                    style={{
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease'
                                    }}
                                    whileHover={{ transform: 'translateY(-10px)' }}
                                >
                                    {/* Certificate Image */}
                                    <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            src={`/certificates/${cert.image}`}
                                            alt={cert.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            loading="lazy"
                                        />
                                    </div>
                                    
                                    {/* Certificate Info */}
                                    <div style={{ padding: '25px' }}>
                                        <h3 style={{ marginBottom: '8px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Award size={20} style={{ color: 'var(--primary-color)' }} />
                                            {cert.title}
                                        </h3>
                                        <p style={{ color: 'var(--primary-color)', fontWeight: '600', marginBottom: '8px' }}>
                                            {cert.issuer}
                                        </p>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '12px' }}>
                                            📅 {cert.date}
                                        </p>
                                        {cert.description && (
                                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.4', fontStyle: 'italic' }}>
                                                {cert.description}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            emptyState
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
