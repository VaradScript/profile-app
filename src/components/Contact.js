import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section-wrapper" style={{ textAlign: 'center', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p style={{ color: 'var(--accent)', fontFamily: 'Fira Code', fontSize: '16px', marginBottom: '20px' }}>04. What’s Next?</p>
                <h2 style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--text-primary)', marginBottom: '10px' }}>Get In Touch</h2>
                <p className="desc-text" style={{ margin: '0 auto 50px auto' }}>
                    Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>
                <a href="mailto:varad@example.com" className="outline-btn">Say Hello</a>

                <div style={{ marginTop: '150px', paddingBottom: '25px', fontFamily: 'Fira Code', fontSize: '12px', color: 'var(--text-secondary)' }}>
                    <p>Designed & Built by Varad</p>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
