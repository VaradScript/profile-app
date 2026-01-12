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
                        <span style={{ color: 'var(--dojo-accent)', fontFamily: 'JetBrains Mono', fontSize: '20px', marginRight: '10px' }}>01.</span>
                        Biography.sys
                    </h2>
                    <div style={{ height: '1px', width: '200px', backgroundColor: 'var(--dojo-accent)', opacity: 0.3, marginLeft: '20px' }}></div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="desc-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            Hello! I'm <span style={{ color: 'var(--dojo-accent)' }}>Varad</span>, a digital architect obsessed with system optimization. My core function is designing high-performance interfaces.
                        </motion.p>
                        <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="desc-text" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            I operate in environments that demand precision. From the kernel of the backend to the pixels of the frontend, I ensure every byte counts.
                        </motion.p>
                        <motion.ul
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                            }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', listStyle: 'none', marginTop: '30px', fontFamily: 'JetBrains Mono', fontSize: '14px', color: '#888' }}
                        >
                            {['React / Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Three.js', 'Tailwind CSS'].map(t => (
                                <motion.li variants={{ hidden: { opacity: 0, x: -5 }, visible: { opacity: 1, x: 0 } }} key={t} style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--dojo-accent)', marginRight: '10px' }}>▹</span>{t}
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ position: 'relative', width: '280px', height: '280px', border: '2px solid var(--dojo-accent)', borderRadius: '2px' }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        <div style={{ position: 'absolute', inset: '-15px', border: '1px dashed var(--dojo-accent)', opacity: 0.4, borderRadius: '2px' }}></div>
                        <div style={{ width: '100%', height: '100%', background: 'rgba(204, 255, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: 'var(--dojo-accent)', fontSize: '12px', fontFamily: 'JetBrains Mono' }}>[AVATAR_IMG_READY]</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
