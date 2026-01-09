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
                        <span style={{ color: 'var(--cyber-accent)', fontFamily: 'JetBrains Mono', fontSize: '20px', marginRight: '10px' }}>01.</span>
                        Biography.sys
                    </h2>
                    <div style={{ height: '1px', width: '200px', backgroundColor: 'var(--cyber-accent)', opacity: 0.3, marginLeft: '20px' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <p className="desc-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            Hello! I'm <span style={{ color: 'var(--cyber-accent)' }}>Varad</span>, a digital architect obsessed with system optimization. My core function is designing high-performance interfaces.
                        </p>
                        <p className="desc-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            I operate in environments that demand precision. From the kernel of the backend to the pixels of the frontend, I ensure every byte counts.
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', listStyle: 'none', marginTop: '30px', fontFamily: 'JetBrains Mono', fontSize: '14px', color: '#888' }}>
                            {['React / Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Three.js', 'Tailwind CSS'].map(t => (
                                <li key={t} style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--cyber-accent)', marginRight: '10px' }}>▹</span>{t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        style={{ position: 'relative', width: '280px', height: '280px', border: '2px solid var(--cyber-accent)', borderRadius: '2px' }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <div style={{ position: 'absolute', inset: '-15px', border: '1px dashed var(--cyber-accent)', opacity: 0.4, borderRadius: '2px' }}></div>
                        <div style={{ width: '100%', height: '100%', background: 'rgba(204, 255, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: 'var(--cyber-accent)', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>[AVATAR_IMG_MISSING]</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
