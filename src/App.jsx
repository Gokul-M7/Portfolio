import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Blog from './components/Blog'; // Renamed to Achievements internally
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'var(--primary-color)',
          transformOrigin: '0%',
          zIndex: 2000
        }}
      />

      <ParticlesBackground />

      <Navbar />

      <main>
        <Hero />

        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>

        <RevealOnScroll>
          <Education />
        </RevealOnScroll>

        <RevealOnScroll>
          <Experience />
        </RevealOnScroll>

        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>

        <RevealOnScroll>
          <Certifications />
        </RevealOnScroll>

        <RevealOnScroll>
          <Blog />
        </RevealOnScroll>

        <RevealOnScroll>
          <Testimonials />
        </RevealOnScroll>

        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>

      <Footer />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="glass"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            padding: '12px',
            borderRadius: '50%',
            color: 'var(--primary-color)',
            border: '1px solid var(--primary-color)',
            cursor: 'pointer',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
