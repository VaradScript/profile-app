import React, { useState, useEffect } from 'react';
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mouseMoved, setMouseMoved] = useState(false);
  const [appState, setAppState] = useState('init'); // init -> login/lock -> active
  const [activeSection, setActiveSection] = useState('section-hero');

  useEffect(() => {
    // Initial State Determination based on Reference Flow
    const isMobile = window.innerWidth <= 768;
    setAppState(isMobile ? 'lock' : 'login');
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!mouseMoved) setMouseMoved(true);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseMoved]);

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
        <div
          className="cursor-main"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: mouseMoved ? 1 : 0
          }}
        ></div>
      )}

      {appState === 'login' && <LoginScreen onEnter={() => setAppState('active')} />}

      {appState === 'lock' && <LockScreen onUnlock={() => setAppState('active')} />}

      {appState === 'active' && (
        <main className="dashboard-main">
          <div className="hero-glow"></div>
          <div id="section-hero">
            <div className="section-wrapper">
              <Hero />
            </div>
          </div>
          <div id="section-about">
            <div className="section-wrapper">
              <About />
            </div>
          </div>
          <div id="section-experience">
            <div className="section-wrapper">
              <Experience />
            </div>
          </div>
          <div id="section-works">
            <div className="section-wrapper">
              <Works />
            </div>
          </div>
          <div id="section-contact">
            <div className="section-wrapper">
              <Contact />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;