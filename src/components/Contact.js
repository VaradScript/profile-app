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
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                }}
                style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}
            >
                <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="cyber-box">
                    <motion.h2 variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} style={{ marginBottom: '30px' }}>ESTABLISH_LINK</motion.h2>
                    <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="desc-text" style={{ fontSize: '20px', fontFamily: 'JetBrains Mono', color: 'var(--cyber-accent)' }}>
                        SIGNAL STRENGTH: WEAK... <br />
                        RECIPIENT: VARAD@TERMINAL_7<br /><br />
                        DO YOU WISH TO TRANSMIT A MESSAGE TO THE MAINframe?
                    </motion.p>
                    <motion.div variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }} style={{ marginTop: '40px' }}>
                        <a href="mailto:varad@example.com" className="outline-btn" style={{ fontSize: '18px', padding: '20px 40px' }}>
                            [TRANSMIT_DATA]
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.5 } }}
                    style={{ marginTop: '60px', fontFamily: 'JetBrains Mono', fontSize: '12px' }}
                >
                    <p style={{ animation: 'blink 2s infinite' }}>STATUS: ONLINE // ENCRYPTION: ACTIVE</p>
                    <p>© 1982-2025 VARAD SYSTEMS CORP.</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
