import React, { useState, useEffect, useRef } from 'react';
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
import ParticlesBackground from './components/ParticlesBackground';
// import ShadowSensei from './components/ShadowSensei'; // Replaced by Kumite
import KumiteBackground from './components/KumiteBackground';
// import KatanaSlash from './components/KatanaSlash'; // Import globally if we want it to run on appState change
import DojoBootSequence from './components/DojoBootSequence';

import InkCursor from './components/InkCursor';

import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [booting, setBooting] = useState(true); // New Boot State
  const [appState, setAppState] = useState('active'); // Default active for now
  const [activeSection, setActiveSection] = useState('section-hero');
  const [theme, setTheme] = useState('aka'); // 'aka' (red) or 'ao' (blue)

  useEffect(() => {
    // Mouse Tracking for custom interactions if needed
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Sync Theme with Section
  useEffect(() => {
    const themeMap = {
      'section-hero': 'aka',
      'section-about': 'ao',
      'section-experience': 'aka',
      'section-works': 'ao',
      'section-contact': 'aka'
    };
    const newTheme = themeMap[activeSection] || 'aka';
    setTheme(newTheme);

    // Update CSS Variables dynamically
    const root = document.documentElement;
    if (newTheme === 'aka') {
      root.style.setProperty('--dojo-accent', 'var(--kumite-aka)');
      root.style.setProperty('--dojo-glow', 'var(--aka-glow)');
    } else {
      root.style.setProperty('--dojo-accent', 'var(--kumite-ao)');
      root.style.setProperty('--dojo-glow', 'var(--ao-glow)');
    }

  }, [activeSection]);


  // Section Observer
  useEffect(() => {
    if (appState !== 'active') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
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

  // Enhanced Reveal Variants
  const revealVariants = {
    hidden: { opacity: 0, y: 50, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className={`App theme-${theme}`}>
      {/* BOOT SEQUENCE */}
      {booting && (
        <DojoBootSequence onComplete={() => setBooting(false)} />
      )}

      {!booting && (
        <>

          {/* Theme Transition Flash */}
          <motion.div
            key={theme}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: 'fixed', inset: 0, zIndex: 12000,
              background: theme === 'aka' ? 'radial-gradient(circle, var(--kumite-aka) 0%, transparent 80%)' : 'radial-gradient(circle, var(--kumite-ao) 0%, transparent 80%)',
              mixBlendMode: 'overlay',
              pointerEvents: 'none'
            }}
          />

          {/* Transition Flash / Sensei's Gaze */}
          <motion.div
            initial={{ scaleY: 0, opacity: 1 }}
            animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, times: [0, 0.5, 1], ease: "anticipate" }}
            style={{
              position: 'fixed', inset: 0, zIndex: 11000,
              background: 'white', transformOrigin: 'center'
            }}
          />

          {/* Global Overlays */}
          <div className="noise-bg"></div>
          <div className="vignette"></div>

          {/* New Ink Cursor */}
          {window.innerWidth > 768 && <InkCursor theme={theme} />}

          {/* Rest of the UI */}

          {appState === 'login' && <LoginScreen onEnter={() => setAppState('active')} />}
          {appState === 'lock' && <LockScreen onUnlock={() => setAppState('active')} />}

          {appState === 'active' && (
            <main className="dashboard-main">
              {/* Floating Kanji floating behind sections */}
              <motion.div
                style={{ position: 'fixed', fontSize: '20vw', fontWeight: 'bold', color: 'rgba(255,255,255,0.02)', zIndex: 0, top: '20%', left: '10%', pointerEvents: 'none' }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                武
              </motion.div>

              {/* Section Indicator (Japanese) */}
              <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: 10 }}>
                <span className="text-jp" style={{ fontSize: '2.5rem', color: theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)', opacity: 0.8, transition: 'color 0.5s', textShadow: `0 0 20px ${theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)'}` }}>
                  {activeSection === 'section-hero' && '英雄'}
                  {activeSection === 'section-about' && '自己'}
                  {activeSection === 'section-experience' && '経験'}
                  {activeSection === 'section-works' && '作品'}
                  {activeSection === 'section-contact' && '連絡'}
                </span>
              </div>

              <div className="hero-glow" style={{ background: `radial-gradient(circle, ${theme === 'aka' ? 'rgba(231,76,60,0.2)' : 'rgba(52,152,219,0.2)'} 0%, transparent 70%)`, transition: 'background 1s' }}></div>

              {['section-hero', 'section-about', 'section-experience', 'section-works', 'section-contact'].map((sectionId, idx) => {
                const Component = {
                  'section-hero': Hero,
                  'section-about': About,
                  'section-experience': Experience,
                  'section-works': Works,
                  'section-contact': Contact
                }[sectionId];

                return (
                  <motion.div
                    key={sectionId}
                    id={sectionId}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={revealVariants}
                    style={{ position: 'relative', zIndex: 1 }}
                  >
                    <div className="section-wrapper">
                      <Component />
                    </div>
                  </motion.div>
                );
              })}
            </main>
          )}
        </>
      )}
    </div>
  );
}

export default App;