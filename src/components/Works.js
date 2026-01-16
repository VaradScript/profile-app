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
        <section className="section-wrapper" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            <div style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px' }}>
                <div style={{ position: 'relative' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'white', letterSpacing: '-1px' }}>Portfolio</h2>
                    <span style={{ position: 'absolute', top: '-15px', left: '0', fontSize: '0.7rem', fontFamily: 'JetBrains Mono', color: 'var(--dojo-accent)', letterSpacing: '4px' }}>03_EXHIBITION</span>
                </div>
                <div style={{ textAlign: 'right', display: 'none', md: 'block' }}>
                    <p style={{ color: 'rgba(255,255,255,0.2)', fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '2px' }}>V_SCR_ARCHIVE // 2024</p>
                </div>
            </div>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}
            >
                {projects.map(item => (
                    <motion.div
                        layoutId={item.id}
                        key={item.id}
                        variants={{
                            hidden: { opacity: 0, scale: 0.98 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        onClick={() => setSelectedId(item.id)}
                        className="cyber-box"
                        whileHover={{
                            borderColor: 'white',
                            backgroundColor: 'rgba(255,255,255,0.03)'
                        }}
                        style={{
                            cursor: 'pointer',
                            padding: '40px',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            minHeight: '340px'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                            <div style={{ width: '40px', height: '1px', background: 'var(--dojo-accent)' }}></div>
                            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>REF_{item.id.toUpperCase()}</span>
                        </div>

                        <motion.h3 style={{ color: 'white', marginBottom: '15px', fontSize: '1.8rem', fontWeight: 700, letterSpacing: '-0.5px' }}>{item.title}</motion.h3>
                        <motion.p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', lineHeight: '1.6', flex: 1, fontWeight: 300 }}>{item.desc}</motion.p>

                        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                {item.tech.slice(0, 2).map(t => (
                                    <span key={t} style={{ fontSize: '0.65rem', color: 'white', border: '1px solid rgba(255,255,255,0.1)', padding: '4px 10px', fontWeight: 700, fontFamily: 'JetBrains Mono', letterSpacing: '1px' }}>{t}</span>
                                ))}
                            </div>
                            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }}></div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--dojo-accent)' }}>↗</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <AnimatePresence>
                {selectedId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="modal-backdrop"
                            style={{ backgroundColor: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(15px)' }}
                            onClick={() => setSelectedId(null)}
                        />
                        <div className="modal-container-wrapper">
                            <motion.div
                                layoutId={selectedId}
                                className="cyber-box"
                                style={{ width: '95%', maxWidth: '900px', padding: 0, border: '1px solid white', overflow: 'hidden', backgroundColor: 'var(--bg-dark)' }}
                            >
                                {(() => {
                                    const item = projects.find(p => p.id === selectedId);
                                    return (
                                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
                                            <div style={{ height: '100%', minHeight: '400px', position: 'relative' }}>
                                                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.7)' }} />
                                                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--bg-dark), transparent)' }}></div>
                                            </div>
                                            <div style={{ padding: '60px', display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ color: 'var(--dojo-accent)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '5px', marginBottom: '10px' }}>03_DATA_NODE</span>
                                                <motion.h2 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 700, color: 'white' }}>{item.title}</motion.h2>
                                                <motion.p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8', marginBottom: '40px', fontWeight: 300, fontSize: '1.1rem' }}>{item.longDesc}</motion.p>

                                                <div style={{ marginBottom: '40px' }}>
                                                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                                        {item.tech.map(t => (
                                                            <span key={t} style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '6px 15px', fontSize: '0.8rem', fontWeight: 400, fontFamily: 'JetBrains Mono' }}>{t}</span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div style={{ display: 'flex', gap: '20px', marginTop: 'auto' }}>
                                                    <motion.a
                                                        whileHover={{ scale: 1.05 }}
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        style={{ background: 'white', color: 'black', padding: '16px 30px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem', fontFamily: 'JetBrains Mono' }}
                                                    >
                                                        GIT_PULL
                                                    </motion.a>
                                                    <motion.button
                                                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                                                        onClick={() => setSelectedId(null)}
                                                        style={{ background: 'transparent', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px 30px', fontWeight: 'bold', fontSize: '0.8rem', fontFamily: 'JetBrains Mono', cursor: 'pointer' }}
                                                    >
                                                        TERMINATE_SESSION
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
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
