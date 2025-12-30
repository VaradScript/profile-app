import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace('section-', '');
          setCurrentSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('.section-wrapper');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`App theme-${currentSection}`}>
      <div className="crt-frame"></div>
      <div className="crt-scanlines"></div>

      {/* Dynamic Theme Cursor */}
      <div
        className={`cursor-main cursor-${currentSection}`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      ></div>

      <main>
        <div id="section-hero">
          <Hero />
        </div>
        <div id="section-about">
          <About />
        </div>
        <div id="section-experience">
          <Experience />
        </div>
        <div id="section-works">
          <Works />
        </div>
        <div id="section-contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;