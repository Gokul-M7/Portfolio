import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Doe',
            role: 'CEO, Tech Startup',
            text: 'Excellent developer with great attention to detail. Delivered the project on time with high quality code.',
            avatar: '👨‍💼'
        },
        {
            name: 'Jane Smith',
            role: 'Product Manager, Fortune 500',
            text: 'Very professional and easy to work with. Great communication skills and problem-solving abilities.',
            avatar: '👩‍💼'
        },
        {
            name: 'Mike Johnson',
            role: 'Founder, Digital Agency',
            text: 'One of the best developers I\'ve worked with. Highly skilled in both frontend and backend development.',
            avatar: '👨‍💻'
        },
        {
            name: 'Sarah Williams',
            role: 'CTO, SaaS Company',
            text: 'Impressive technical knowledge and creative problem-solving. Definitely recommend for any project.',
            avatar: '👩‍💻'
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000); // Auto-rotate every 5 seconds
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" style={{ padding: '100px 0' }}>
            <div className="container">
                <h2 className="section-title">What <span>Clients Say</span></h2>

                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="glass"
                            style={{
                                padding: '50px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                minHeight: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <Quote style={{ fontSize: '2rem', margin: '0 auto 20px', opacity: 0.3 }} />
                            <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                "{testimonials[current].text}"
                            </p>
                            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>
                                {testimonials[current].avatar}
                            </div>
                            <h3 style={{ marginBottom: '5px' }}>
                                {testimonials[current].name}
                            </h3>
                            <p style={{ color: 'var(--primary-color)', fontWeight: '500' }}>
                                {testimonials[current].role}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    backgroundColor: current === index ? 'var(--primary-color)' : 'var(--bg-tertiary)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Arrow Navigation */}
                    <button
                        onClick={prev}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={next}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--primary-color)',
                            color: 'white',
                            border: 'none',
                            padding: '10px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
