import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ width: '100%', maxWidth: '900px' }}
            >
                <div className="cyber-box">
                    <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px' }}>
                        <h2 style={{ fontSize: '22px', color: 'var(--dojo-accent)', fontFamily: 'Potta One', letterSpacing: '2px' }}>[BATTLE_HISTORY]</h2>
                        <span style={{ fontSize: '13px', opacity: 0.6, fontFamily: 'Roboto Condensed', letterSpacing: '3px' }}>WARRIOR_PATH_TRACKER</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '40px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {experiences.map((exp, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelected(i)}
                                    style={{
                                        background: selected === i ? 'var(--dojo-accent)' : 'rgba(255,255,255,0.02)',
                                        color: selected === i ? 'black' : '#aaa',
                                        border: selected === i ? '1px solid var(--dojo-accent)' : '1px solid rgba(255,255,255,0.1)',
                                        padding: '12px 20px',
                                        textAlign: 'left',
                                        fontFamily: 'Roboto Condensed',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        letterSpacing: '2px',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        cursor: 'none',
                                        borderRadius: '4px'
                                    }}
                                >
                                    {exp.company}
                                </button>
                            ))}
                        </div>
                        <div>
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '8px', fontFamily: 'Potta One' }}>{experiences[selected].role}</h3>
                                <p style={{ fontSize: '0.9rem', marginBottom: '25px', color: 'var(--dojo-accent)', fontWeight: 'bold', letterSpacing: '2px' }}>{`ERA: ${experiences[selected].range}`}</p>
                                <div style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#ccc' }}>
                                    {experiences[selected].logs.map((log, i) => (
                                        <motion.p
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            style={{ marginBottom: '18px', display: 'flex' }}
                                        >
                                            <span style={{ marginRight: '20px', color: 'var(--dojo-accent)', fontWeight: 'bold' }}>KATA_{i + 1}</span>{log}
                                        </motion.p>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
