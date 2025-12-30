import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="section-wrapper">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', whiteSpace: 'nowrap' }}>
                        <span style={{ color: 'var(--about-accent)', fontFamily: 'Fira Code', fontSize: '20px', marginRight: '10px' }}>01.</span>
                        Biography.js
                    </h2>
                    <div style={{ height: '1px', width: '200px', backgroundColor: 'var(--about-accent)', opacity: 0.3, marginLeft: '20px' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <div>
                        <p className="desc-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            Hello! I'm <span style={{ color: 'var(--about-accent)' }}>Varad</span>, a developer who loves the intersection of design and code. My journey in tech started with a curiosity for how websites are built, which evolved into a passion for creating high-performance web applications.
                        </p>
                        <p className="desc-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            I thrive in environments where I can build complex systems with clean, maintainable code. Whether it's crafting pixel-perfect UIs or architecting robust backends, I'm always looking for the next challenge.
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', listStyle: 'none', marginTop: '30px', fontFamily: 'Fira Code', fontSize: '14px' }}>
                            {['React / Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Three.js', 'Tailwind CSS'].map(t => (
                                <li key={t} style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--about-accent)', marginRight: '10px' }}>▹</span>{t}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        style={{ position: 'relative', width: '280px', height: '280px', border: '2px solid var(--about-accent)', borderRadius: '8px' }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <div style={{ position: 'absolute', inset: '-15px', border: '1px dashed var(--about-accent)', opacity: 0.4, borderRadius: '8px' }}></div>
                        <div style={{ width: '100%', height: '100%', background: 'var(--about-accent)', opacity: 0.1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: 'var(--about-accent)', fontSize: '12px', fontFamily: 'Fira Code' }}>[IMAGE_LOAD_PENDING]</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
