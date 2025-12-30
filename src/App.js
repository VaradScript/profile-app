import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Contact from './components/Contact';
import './App.css';

const SidebarSocials = () => (
  <div style={{ position: 'fixed', bottom: 0, left: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 50 }}>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '25px', marginBottom: '20px' }}>
      <li><a href="https://github.com" target="_blank" rel="noreferrer" style={{ writingMode: 'vertical-rl', color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'Fira Code' }}>GitHub</a></li>
      <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ writingMode: 'vertical-rl', color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'Fira Code' }}>LinkedIn</a></li>
      <li><a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ writingMode: 'vertical-rl', color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'Fira Code' }}>Twitter</a></li>
    </ul>
    <div style={{ width: '1px', height: '90px', backgroundColor: 'var(--text-secondary)' }}></div>
  </div>
);

const SidebarEmail = () => (
  <div style={{ position: 'fixed', bottom: 0, right: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 50 }}>
    <a href="mailto:varad@example.com" style={{ writingMode: 'vertical-rl', marginBottom: '20px', letterSpacing: '0.1em', fontSize: '13px', color: 'var(--text-secondary)', fontFamily: 'Fira Code' }}>
      varad@example.com
    </a>
    <div style={{ width: '1px', height: '90px', backgroundColor: 'var(--text-secondary)' }}></div>
  </div>
);

function App() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: 'var(--bg-color)', overflowX: 'hidden', minHeight: '100vh', position: 'relative' }}>
      <div className="crt-overlay"></div>
      <div
        className="cursor-blob"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      ></div>
      <SidebarSocials />
      <SidebarEmail />
      <main style={{ padding: '0 150px' }}>
        <Hero />
        <About />
        <Experience />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;