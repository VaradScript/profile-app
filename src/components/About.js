import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-wrapper">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                        <span style={{ color: 'var(--accent)', fontFamily: 'Fira Code', fontSize: '20px', marginRight: '10px' }}>01.</span>
                        About Me
                    </h2>
                    <div style={{ height: '1px', width: '300px', backgroundColor: 'var(--bg-tertiary)', marginLeft: '20px' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px' }}>
                    <div>
                        <p className="desc-text" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                            Hello! My name is Varad and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <p className="desc-text" style={{ maxWidth: '100%', marginBottom: '20px' }}>
                            Fast-forward to today, and I’ve had the pleasure of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                        </p>
                        <p className="desc-text" style={{ maxWidth: '100%' }}>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 200px))', listStyle: 'none', padding: 0, marginTop: '20px', gap: '10px' }}>
                            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Framer Motion'].map(tech => (
                                <li key={tech} style={{ color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'Fira Code', display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--accent)', fontSize: '14px', marginRight: '10px' }}>▹</span> {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <motion.div
                        style={{ position: 'relative', width: '300px', height: '300px' }}
                        whileHover={{ x: -10, y: -10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div style={{ position: 'absolute', top: '20px', left: '20px', width: '100%', height: '100%', border: '2px solid var(--accent)', borderRadius: '4px', zIndex: 1 }}></div>
                        <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: 'var(--accent)', borderRadius: '4px', zIndex: 2, overflow: 'hidden', opacity: 0.7 }}>
                            <div style={{ width: '100%', height: '100%', background: 'var(--bg-secondary)', mixBlendMode: 'multiply' }}></div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
