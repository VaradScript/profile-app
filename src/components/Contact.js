import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section className="section-wrapper">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', maxWidth: '700px' }}
            >
                <div style={{ border: '2px double var(--contact-accent)', padding: '50px', borderRadius: '4px', background: 'rgba(255, 176, 0, 0.05)' }}>
                    <h2 style={{ marginBottom: '30px' }}>ESTABLISH_LINK</h2>
                    <p className="desc-text" style={{ fontSize: '20px', fontFamily: 'Courier New', color: 'var(--contact-accent)' }}>
                        SIGNAL STRENGTH: WEAK... <br />
                        RECIPIENT: VARAD@TERMINAL_7<br /><br />
                        DO YOU WISH TO TRANSMIT A MESSAGE TO THE MAINframe?
                    </p>
                    <div style={{ marginTop: '40px' }}>
                        <a href="mailto:varad@example.com" className="outline-btn" style={{ fontSize: '18px', padding: '20px 40px' }}>
                            [TRANSMIT_DATA]
                        </a>
                    </div>
                </div>

                <div style={{ marginTop: '60px', opacity: 0.5, fontFamily: 'Fira Code', fontSize: '12px' }}>
                    <p>STATUS: ONLINE // ENCRYPTION: ACTIVE</p>
                    <p>© 1982-2025 VARAD SYSTEMS CORP.</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
