import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 'hades',
        title: "HadesConnect",
        desc: "A secure remote desktop and emergency switch solution integrated with Discord.",
        longDesc: "HadesConnect is a powerful tool designed for remote system management via Discord. It features a unique 'Kill Switch' functionality, secure remote desktop controls, and real-time execution handling, making it a robust solution for admins.",
        tech: ["Java", "Discord API", "Robot Class", "Networking"],
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
        link: "https://github.com/VaradScript/HadesConnect"
    },
    {
        id: 'emotion',
        title: "Emotion-Detection",
        desc: "Deep learning model for real-time facial emotion recognition.",
        longDesc: "Utilizing advanced CNN architectures, this project detects human emotions from live video feeds with high accuracy. Built for scalability and integration into larger AI interactions systems.",
        tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
        image: "https://images.unsplash.com/photo-1555532538-dcdbd01d373d?auto=format&fit=crop&w=800&q=80",
        link: "https://github.com/VaradScript/Emotion-Detection"
    },
    {
        id: 'facex',
        title: "FaceXprso",
        desc: "AI-driven facial expression analysis platform.",
        longDesc: "FaceXprso goes beyond simple emotion detection by analyzing micro-expressions to gauge user sentiment in real-time. Ideal for UX research and accessibility tools.",
        tech: ["Python", "Keras", "AI", "Computer Vision"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
        link: "https://github.com/VaradScript/FaceXprso"
    },
    {
        id: 'portfolio',
        title: "VaradScript.io",
        desc: "My personal digital playground and portfolio.",
        longDesc: "The very site you are looking at (or its predecessor). A showcase of modern web technologies, 3D animations, and experimental UI designs.",
        tech: ["React", "Three.js", "Framer Motion", "Cyber-UI"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
        link: "https://github.com/VaradScript/VaradScript.github.io"
    }
];

const Works = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section className="section-wrapper">
            <div style={{ textAlign: 'left', marginBottom: '50px', borderLeft: '4px solid var(--dojo-accent)', paddingLeft: '20px' }}>
                <h2 className="section-title" style={{ fontSize: '32px', letterSpacing: '2px' }}>[PROJECT_ARCHIVE]</h2>
                <p style={{ color: 'var(--dojo-accent)', fontFamily: 'JetBrains Mono', fontSize: '14px' }}>SELECTED_REPOSITORY_DATA_v2</p>
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
            >
                {projects.map(item => (
                    <motion.div
                        layoutId={item.id}
                        key={item.id}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        onClick={() => setSelectedId(item.id)}
                        className="cyber-box project-card"
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 20px var(--dojo-accent)',
                            borderColor: 'var(--dojo-accent)'
                        }}
                        style={{
                            cursor: 'pointer',
                            background: 'rgba(255,255,255,0.02)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            transition: 'border-color 0.3s'
                        }}
                    >
                        <motion.h3 style={{ color: 'white', marginBottom: '10px', fontSize: '1.4rem' }}>{item.title}</motion.h3>
                        <motion.p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.4' }}>{item.desc}</motion.p>
                        <div style={{ marginTop: '20px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {item.tech.slice(0, 3).map(t => (
                                <span key={t} className="tech-tag" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--dojo-accent)' }}>{t}</span>
                            ))}
                        </div>
                        <div className="card-shine" />
                    </motion.div>
                ))}
            </motion.div>

            <div style={{ marginTop: '50px', textAlign: 'center' }}>
                <a href="https://github.com/VaradScript" target="_blank" rel="noreferrer" className="outline-btn" style={{ borderColor: 'var(--dojo-accent)', color: 'var(--dojo-accent)' }}>
                    VIEW_GITHUB_PROFILE
                </a>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="modal-backdrop"
                            onClick={() => setSelectedId(null)}
                        />
                        <div className="modal-container-wrapper">
                            <motion.div
                                layoutId={selectedId}
                                className="cyber-box modal-content"
                            >
                                {(() => {
                                    const item = projects.find(p => p.id === selectedId);
                                    return (
                                        <>
                                            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '4px', marginBottom: '20px' }}>
                                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <motion.h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{item.title}</motion.h2>
                                            <motion.p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>{item.longDesc}</motion.p>

                                            <div style={{ marginBottom: '30px' }}>
                                                <h4 style={{ color: 'var(--dojo-accent)', marginBottom: '10px', fontSize: '0.9rem' }}>// TECH_STACK</h4>
                                                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                                    {item.tech.map(t => (
                                                        <span key={t} className="tech-tag" style={{ fontSize: '0.9rem', padding: '6px 12px' }}>{t}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', gap: '20px', marginTop: 'auto' }}>
                                                <a href={item.link} target="_blank" rel="noreferrer" className="modal-btn primary">
                                                    VIEW_SOURCE
                                                </a>
                                                <button onClick={() => setSelectedId(null)} className="modal-btn secondary">
                                                    CLOSE_INTFC
                                                </button>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Works;
