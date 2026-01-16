import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section-wrapper">
            <motion.div
                className="cyber-box"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', maxWidth: '1200px' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '60px' }}>
                    <div style={{ position: 'relative' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-1px', color: 'white' }}>
                            Philosophy
                        </h2>
                        <span style={{ position: 'absolute', top: '-15px', left: '0', fontSize: '0.7rem', fontFamily: 'JetBrains Mono', color: 'var(--dojo-accent)', letterSpacing: '4px' }}>01_ORIGIN</span>
                    </div>
                    <div style={{ height: '1px', flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', marginLeft: '40px' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
                    <div>
                        <motion.p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', color: 'white', fontWeight: 300 }}>
                            I am <span style={{ color: 'var(--dojo-accent)', fontWeight: 500 }}>Varad</span>, an architect of digital realms where discipline meets innovation. My methodology is rooted in the precision of martial arts—every line of code is a calculate strike, every project a masterwork in evolution.
                        </motion.p>
                        <motion.p style={{ fontSize: '1rem', lineHeight: '2', color: 'rgba(255,255,255,0.4)', fontWeight: 300, marginBottom: '40px' }}>
                            Beyond syntax and architecture lies the essence of Mushin: acting without hesitation. I build systems that don't just function, but flow with instinctual grace, bridging the gap between complexity and clarity.
                        </motion.p>

                        <div style={{ marginTop: '50px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                                <div style={{ width: '30px', height: '1px', background: 'var(--dojo-accent)' }}></div>
                                <h4 style={{ color: 'white', fontSize: '0.8rem', letterSpacing: '5px', fontWeight: 700 }}>MASTERY_SET</h4>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px 40px' }}>
                                {['React Ecosystem', 'Node Performance', 'TypeScript Logic', 'Cloud Architecture', 'Interface Design', 'Core Engineering'].map(t => (
                                    <div key={t} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '10px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                            <div style={{ width: '4px', height: '4px', background: 'var(--dojo-accent)', borderRadius: '50%' }}></div>
                                            <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 300 }}>{t}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative', justifySelf: 'center' }}>
                        <div style={{
                            width: '380px', height: '500px',
                            background: 'rgba(255,255,255,0.01)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '15px',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
                                    alt="Sensei Spirit"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.7)' }}
                                />
                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark), transparent)' }}></div>
                            </div>

                            {/* Overlay Label */}
                            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
                                <div style={{ fontSize: '2rem', color: 'white', fontFamily: 'Potta One', marginBottom: '5px' }}>武士道</div>
                                <div style={{ fontSize: '0.6rem', color: 'var(--dojo-accent)', letterSpacing: '5px', fontWeight: 700 }}>BUSHIDO_CODE</div>
                            </div>
                        </div>

                        {/* Premium White Framing */}
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderTop: '1px solid white', borderRight: '1px solid white', opacity: 0.1 }}></div>
                        <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '100px', height: '100px', borderBottom: '1px solid white', borderLeft: '1px solid white', opacity: 0.1 }}></div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
