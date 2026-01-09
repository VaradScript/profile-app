import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import LockScreen from './components/LockScreen';
import LoginScreen from './components/LoginScreen';
import StatusBar from './components/StatusBar';
import MobileDock from './components/MobileDock';
import './App.css';

function App() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring settings for that "perfect" lag/fluidity
  const springConfig = { damping: 25, stiffness: 200 };
  const auraX = useSpring(mouseX, springConfig);
  const auraY = useSpring(mouseY, springConfig);

  const [mouseMoved, setMouseMoved] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [appState, setAppState] = useState('init'); // init -> login/lock -> active
  const [activeSection, setActiveSection] = useState('section-hero');

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!mouseMoved) setMouseMoved(true);

      const target = e.target;
      const isClickable = target.closest('button, a, .slider-handle, .dock-item');
      setIsHovered(!!isClickable);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseMoved, mouseX, mouseY]);

  useEffect(() => {
    // Initial State Determination based on Reference Flow
    const isMobile = window.innerWidth <= 768;
    setAppState(isMobile ? 'lock' : 'login');
  }, []);

  // Section Observer for Mobile Dock
  useEffect(() => {
    if (appState !== 'active') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['section-hero', 'section-about', 'section-experience', 'section-works', 'section-contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [appState]);

  return (
    <div className="App">
      {/* Global Overlays */}
      <div className="noise-bg"></div>
      <div className="crt-scanlines"></div>
      <div className="vignette"></div>

      {appState === 'active' && <StatusBar />}
      {appState === 'active' && window.innerWidth <= 768 && <MobileDock activeSection={activeSection} />}

      {/* Global Cursor (Desktop Only) */}
      {window.innerWidth > 768 && (
        <>
          <motion.div
            className={`cursor-main ${isHovered ? 'hover' : ''} ${isClicked ? 'click' : ''}`}
            animate={{
              width: isClicked ? 15 : (isHovered ? 50 : 20),
              height: isClicked ? 15 : (isHovered ? 50 : 20),
              backgroundColor: isClicked ? 'var(--cyber-accent)' : (isHovered ? 'rgba(204, 255, 0, 0.1)' : 'transparent')
            }}
            style={{
              x: mouseX,
              y: mouseY,
              translateX: '-50%',
              translateY: '-50%',
              opacity: mouseMoved ? 1 : 0
            }}
          />
          <motion.div
            className="cursor-aura"
            animate={{
              width: isHovered ? 120 : 80,
              height: isHovered ? 120 : 80,
            }}
            style={{
              x: auraX,
              y: auraY,
              translateX: '-50%',
              translateY: '-50%',
              opacity: mouseMoved ? 0.3 : 0
            }}
          />
        </>
      )}

      {appState === 'login' && <LoginScreen onEnter={() => setAppState('active')} />}

      {appState === 'lock' && <LockScreen onUnlock={() => setAppState('active')} />}

      {appState === 'active' && (
        <main className="dashboard-main">
          <div className="hero-glow"></div>

          <motion.div
            id="section-hero"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-wrapper">
              <Hero />
            </div>
          </motion.div>

          <motion.div
            id="section-about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-wrapper">
              <About />
            </div>
          </motion.div>

          <motion.div
            id="section-experience"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-wrapper">
              <Experience />
            </div>
          </motion.div>

          <motion.div
            id="section-works"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-wrapper">
              <Works />
            </div>
          </motion.div>

          <motion.div
            id="section-contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-wrapper">
              <Contact />
            </div>
          </motion.div>
        </main>
      )}
    </div>
  );
}

export default App;