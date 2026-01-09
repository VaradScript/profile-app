import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "AETHER PROTOCOL",
        desc: "A high-performance WebSocket abstraction layer for React apps, providing seamless real-time state synchronization with automatic reconnection logic.",
        tech: ["TypeScript", "WebSockets", "React", "Node.js"],
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "FLUX ENGINE",
        desc: "A headless e-commerce API built with performance-first principles, featuring a plugin-based architecture and multi-region synchronization.",
        tech: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
        image: "https://images.unsplash.com/photo-1618401471353-b98aadebc248?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "LUMINA UI",
        desc: "A designer-centric component library focusing on motion design and accessibility, built from the ground up for massive enterprise applications.",
        tech: ["React", "Framer Motion", "Tailwind", "Radix UI"],
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
    }
];

const Works = () => {
    return (
        <section className="section-wrapper">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ width: '100%', maxWidth: '1100px' }}
            >
                <div style={{ textAlign: 'left', marginBottom: '50px', borderLeft: '4px solid var(--cyber-accent)', paddingLeft: '20px' }}>
                    <h2 style={{ fontSize: '32px', letterSpacing: '2px' }}>[PROJECT_ARCHIVE]</h2>
                    <p style={{ color: 'var(--cyber-accent)', fontFamily: 'JetBrains Mono', fontSize: '14px' }}>SELECTED_REPOSITORY_DATA_v2</p>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                            }}
                            whileHover={{ y: -8, boxShadow: `0 10px 40px -10px var(--cyber-accent)` }}
                            className="cyber-box"
                            style={{
                                padding: '30px',
                                transition: 'all 0.3s cubic-bezier(0.19, 1, 0.22, 1)'
                            }}
                        >
                            <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#fff', letterSpacing: '1px' }}>{p.title}</h3>
                            <p style={{ fontSize: '14px', color: 'rgba(226, 232, 240, 0.8)', marginBottom: '25px', lineHeight: '1.6', minHeight: '100px' }}>{p.desc}</p>
                            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                {p.tech.map(t => (
                                    <span key={t} style={{ fontSize: '10px', fontFamily: 'JetBrains Mono', color: 'var(--cyber-accent)', border: '1px solid var(--cyber-accent)', padding: '4px 10px', borderRadius: '1px' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                <div style={{ marginTop: '50px', textAlign: 'center' }}>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="outline-btn" style={{ borderColor: 'var(--cyber-accent)', color: 'var(--cyber-accent)' }}>
                        EXPLORE_MORE_DATA
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Works;
