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
                    <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--cyber-border)', paddingBottom: '10px' }}>
                        <h2 style={{ fontSize: '18px', color: 'var(--cyber-accent)', fontFamily: 'JetBrains Mono' }}>[LOG_FILES/WORK_HISTORY]</h2>
                        <span style={{ fontSize: '12px', opacity: 0.6, fontFamily: 'JetBrains Mono' }}>VARAD_OS_KERNEL_v1.0</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '40px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {experiences.map((exp, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelected(i)}
                                    style={{
                                        background: selected === i ? 'var(--cyber-accent)' : 'transparent',
                                        color: selected === i ? 'black' : 'var(--cyber-accent)',
                                        border: '1px solid var(--cyber-accent)',
                                        padding: '10px 15px',
                                        textAlign: 'left',
                                        fontFamily: 'JetBrains Mono',
                                        fontSize: '13px',
                                        transition: '0.2s',
                                        cursor: 'none'
                                    }}
                                >
                                    {`${selected === i ? '>>' : '>'} ${exp.company}`}
                                </button>
                            ))}
                        </div>
                        <div>
                            <h3 style={{ fontSize: '20px', color: 'var(--cyber-text)', marginBottom: '5px' }}>{experiences[selected].role}</h3>
                            <p style={{ fontSize: '12px', marginBottom: '20px', color: 'var(--cyber-accent)', opacity: 0.7, fontFamily: 'JetBrains Mono' }}>{`STARDATE: ${experiences[selected].range}`}</p>
                            <div style={{ fontSize: '15px', lineHeight: '1.5', color: 'var(--cyber-text)' }}>
                                {experiences[selected].logs.map((log, i) => (
                                    <p key={i} style={{ marginBottom: '12px', display: 'flex' }}>
                                        <span style={{ marginRight: '15px', color: 'var(--cyber-accent)', fontFamily: 'JetBrains Mono' }}>0x0{i + 1}</span>{log}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
