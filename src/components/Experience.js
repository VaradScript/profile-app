import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
    {
        company: "Hyperion Systems",
        role: "Lead Frontend Engineer",
        range: "JAN 2023 - PRESENT",
        logs: [
            "Architected a distributed design system used across 12 product lines, ensuring UI consistency.",
            "Reduced TTFB (Time to First Byte) by 60% through aggressive SSR optimization and Edge caching.",
            "Implemented real-time collaboration features using CRDTs and low-latency WebSockets."
        ]
    },
    {
        company: "Stellar Logic",
        role: "Full Stack Developer",
        range: "MAR 2021 - DEC 2022",
        logs: [
            "Built a high-throughput data processing engine handling 1M+ events per minute using Node.js.",
            "Designed and implemented complex PostgreSQL schemas for optimized multi-tenant data isolation.",
            "Collaborated with UX teams to deliver accessible, WCAG-compliant customer dashboards."
        ]
    },
    {
        company: "ByteForge Inc.",
        role: "Junior Web Developer",
        range: "JUN 2019 - FEB 2021",
        logs: [
            "Developed responsive landing pages and interactive marketing assets using React.",
            "Automated CI/CD pipelines reducing deployment errors by 35%.",
            "Maintained and updated legacy PHP/MySQL applications for enterprise clients."
        ]
    }
];

const Experience = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className="section-wrapper">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', maxWidth: '1100px' }}
            >
                <div style={{ marginBottom: '60px' }}>
                    <div style={{ position: 'relative' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: 700, color: 'white', letterSpacing: '-1px' }}>Timeline</h2>
                        <span style={{ position: 'absolute', top: '-15px', left: '0', fontSize: '0.7rem', fontFamily: 'JetBrains Mono', color: 'var(--dojo-accent)', letterSpacing: '4px' }}>02_CHRONOLOGY</span>
                    </div>
                </div>

                <div className="cyber-box" style={{ padding: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', padding: '40px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {experiences.map((exp, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => setSelected(i)}
                                    whileHover={{ x: 10 }}
                                    style={{
                                        background: selected === i ? 'white' : 'transparent',
                                        color: selected === i ? 'black' : 'rgba(255,255,255,0.4)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        padding: '24px',
                                        textAlign: 'left',
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        letterSpacing: '2px',
                                        transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                        cursor: 'pointer',
                                        borderRadius: '2px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <span>{exp.company}</span>
                                    {selected === i && <span style={{ color: 'var(--dojo-accent)' }}>●</span>}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div style={{ padding: '60px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div style={{ marginBottom: '30px' }}>
                                    <h3 style={{ fontSize: '2.2rem', color: 'white', fontWeight: 700, letterSpacing: '-0.5px', marginBottom: '10px' }}>{experiences[selected].role}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--dojo-accent)', fontWeight: 700, letterSpacing: '3px', fontFamily: 'JetBrains Mono' }}>{experiences[selected].range}</span>
                                        <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.05)' }}></div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                                    {experiences[selected].logs.map((log, i) => (
                                        <div key={i} style={{ position: 'relative', paddingLeft: '40px' }}>
                                            <div style={{ position: 'absolute', left: 0, top: '10px', width: '20px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>{log}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
