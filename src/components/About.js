import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section-wrapper">
            <motion.div
                className="cyber-box"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', whiteSpace: 'nowrap' }}>
                        <span style={{ color: 'var(--dojo-accent)', fontFamily: 'JetBrains Mono', fontSize: '20px', marginRight: '10px' }}>01.</span>
                        Philosophy.zen
                    </h2>
                    <div style={{ height: '1px', width: '200px', backgroundColor: 'var(--dojo-accent)', opacity: 0.3, marginLeft: '20px' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <motion.div>
                        <motion.p className="desc-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#ccc' }}>
                            I am <span style={{ color: 'var(--dojo-accent)', fontWeight: 'bold' }}>Varad</span>, a digital warrior dedicated to the mastery of code. My path is one of discipline, where every project is a Dojo and every challenge is a trial to sharpen my spirit.
                        </motion.p>
                        <motion.p className="desc-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem', color: '#aaa' }}>
                            Whether crafting decentralized architectures or pixel-perfect frontends, I maintain a state of Mushin (No-Mind)—acting with instinctual precision to deliver systems that are as beautiful as they are functional.
                        </motion.p>

                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ color: 'var(--dojo-accent)', fontSize: '0.9rem', letterSpacing: '3px', marginBottom: '20px' }}>// CURRENT_DISCIPLINES</h4>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', listStyle: 'none', fontFamily: 'Roboto Condensed', fontSize: '16px', color: '#888' }}>
                                {['React Mastery', 'Backend Fist (Node)', 'TypeScript Kata', 'System Architecture', 'UI/UX Ninjutsu', 'Performance Zen'].map(t => (
                                    <div key={t} style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ color: 'var(--dojo-accent)', marginRight: '12px', fontSize: '1.2rem' }}>⚔️</span>{t}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            width: '320px', height: '400px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                                alt="Sensei Spirit"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) contrast(1.2) brightness(0.8)' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0a, transparent)' }}></div>
                            <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white', fontFamily: 'Potta One', fontSize: '1.5rem', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>武士道</div>
                        </div>
                        {/* Decorative Frames */}
                        <div style={{ position: 'absolute', top: '-10px', right: '-10px', width: '100px', height: '100px', borderTop: '2px solid var(--dojo-accent)', borderRight: '2px solid var(--dojo-accent)', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', width: '100px', height: '100px', borderBottom: '2px solid var(--dojo-accent)', borderLeft: '2px solid var(--dojo-accent)', zIndex: 0 }}></div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
