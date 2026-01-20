import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="section-wrapper">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="cyber-box"
                style={{ textAlign: 'center', maxWidth: '800px', padding: '80px 40px', border: '1px solid white' }}
            >
                <span style={{ color: 'var(--dojo-accent)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '8px', display: 'block', marginBottom: '20px' }}>04_COMMUNICATION</span>
                <h2 style={{ fontSize: '4rem', color: 'white', fontWeight: 700, letterSpacing: '-2px', marginBottom: '30px' }}>Initiate Contact</h2>

                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.4)', lineHeight: '1.8', marginBottom: '50px', fontWeight: 300 }}>
                    My terminal is always open for strategic collaborations and architectural inquiries. <br />
                    Reach out to establish a secure data uplink.
                </p>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <a href="mailto:varad@example.com" style={{
                        display: 'inline-block',
                        padding: '24px 60px',
                        background: 'white',
                        color: 'black',
                        textDecoration: 'none',
                        fontFamily: 'JetBrains Mono',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        letterSpacing: '3px',
                        borderRadius: '2px',
                        boxShadow: '0 20px 60px rgba(255,255,255,0.1)'
                    }}>
                        TRANSMIT_MESSAGE
                    </a>
                </motion.div>

                <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'center', gap: '40px' }}>
                    {['X', 'INSTAGRAM', 'LINKEDIN', 'GITHUB'].map(social => (
                        <a key={social} href="#!" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', textDecoration: 'none', letterSpacing: '2px', fontWeight: 700, fontFamily: 'JetBrains Mono' }}>{social}</a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
