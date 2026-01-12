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

import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Custom Cursor Trail Logic
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const trailCount = 8; // Number of trail dots

  const [booting, setBooting] = useState(true); // New Boot State
  const [appState, setAppState] = useState('init');
  const [activeSection, setActiveSection] = useState('section-hero');
  const [theme, setTheme] = useState('aka'); // 'aka' (red) or 'ao' (blue)

  useEffect(() => {
    // Initial State
    const isMobile = window.innerWidth <= 768;
    setAppState(isMobile ? 'lock' : 'login');

    // Mouse Tracking for custom cursor
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Main Cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Sync Theme with Section
  useEffect(() => {
    // AKA SECTIONS: Hero, Experience (Odd)
    // AO SECTIONS: About, Works (Even)
    // Contact: Aka (Power finish)
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

  // Trail Animation Loop
  useEffect(() => {
    let animationFrame;

    // Initialize trail positions
    const trails = trailRefs.current;
    const points = Array(trailCount).fill({ x: 0, y: 0 });

    const animateTrail = () => {
      let { x, y } = mousePosition;

      trails.forEach((trail, index) => {
        if (trail) {
          // Ease logic
          const prev = points[index];
          const nextX = prev.x + (x - prev.x) * (0.4 - index * 0.03);
          const nextY = prev.y + (y - prev.y) * (0.4 - index * 0.03);

          trail.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) scale(${1 - index * 0.1})`;

          points[index] = { x: nextX, y: nextY };
          // The next point chases the "current target", which we update to be THIS point for the NEXT trail segment? 
          // Actually standard simple trail: subsequent points chase the mouse with more lag.
          // Better implementation for "snake":
          // We can just use the mousePosition global, but with different lerp factors.
        }
      });

      animationFrame = requestAnimationFrame(animateTrail);
    };
    // animateTrail(); // Disabled manual loop to save cycles if using framer motion elsewhere, but let's keep it simple for now or use the CSS approach
    // Actually the previous implementation logic was missing the ref assignment in the loop. 
    // Let's rely on the separate component below which handles its own RAF.

    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);


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
          {/* Global Overlays */}
          <div className="noise-bg"></div>
          <div className="crt-scanlines"></div>
          <div className="vignette"></div>

          {/* Dynamic Backgrounds */}
          {appState === 'active' && <ParticlesBackground theme={theme} />}
          {appState === 'active' && <KumiteBackground theme={theme} />}

          {appState === 'active' && <StatusBar theme={theme} />}
          {appState === 'active' && window.innerWidth <= 768 && <MobileDock activeSection={activeSection} />}

          {/* New "Liquid" Trail Cursor (Desktop Only) */}
          {window.innerWidth > 768 && (
            <>
              <div ref={cursorRef} className="cursor-dot" style={{ background: theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)' }} />
              {[...Array(trailCount)].map((_, i) => (
                <CursorTrailPoint key={i} index={i} target={mousePosition} theme={theme} />
              ))}
            </>
          )}

          {appState === 'login' && <LoginScreen onEnter={() => setAppState('active')} />}
          {appState === 'lock' && <LockScreen onUnlock={() => setAppState('active')} />}

          {appState === 'active' && (
            <main className="dashboard-main">
              {/* Section Indicator (Japanese) */}
              <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)', zIndex: 10 }}>
                <span className="text-jp" style={{ fontSize: '2rem', color: theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)', opacity: 0.5, transition: 'color 0.5s' }}>
                  {activeSection === 'section-hero' && '英雄'}
                  {activeSection === 'section-about' && '自己'}
                  {activeSection === 'section-experience' && '経験'}
                  {activeSection === 'section-works' && '作品'}
                  {activeSection === 'section-contact' && '連絡'}
                </span>
              </div>

              <div className="hero-glow" style={{ background: `radial-gradient(circle, ${theme === 'aka' ? 'rgba(231,76,60,0.15)' : 'rgba(52,152,219,0.15)'} 0%, transparent 70%)`, transition: 'background 1s' }}></div>

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

// Sub-component for Trail Point with independent animation loop for performance
const CursorTrailPoint = ({ index, target, theme }) => {
  const ref = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let raf;
    const animate = () => {
      const delay = (index + 1) * 2; // Physics delay factor
      // Simple lerp
      const lx = pos.current.x + (target.x - pos.current.x) / delay;
      const ly = pos.current.y + (target.y - pos.current.y) / delay;

      pos.current = { x: lx, y: ly };

      if (ref.current) {
        ref.current.style.transform = `translate3d(${lx}px, ${ly}px, 0) scale(${1 - index * 0.08})`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, index]);

  // Trail color mixing
  const color = theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)';

  return <div ref={ref} className="cursor-trail" style={{ opacity: 0.6 - index * 0.05, borderColor: color, background: `color-mix(in srgb, ${color} 20%, transparent)` }} />;
};

export default App;