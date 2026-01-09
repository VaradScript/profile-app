import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const phrases = ["build things for the web.", "design digital experiences.", "engineer modern solutions."];
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];
            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
            setTypingSpeed(isDeleting ? 20 : 80);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 800);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, phrases]);

    return (
        <section className="section-wrapper">
            <motion.div
                className="cyber-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%' }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#666' }}>
                    <span>ID: VARAD-001</span>
                    <span style={{ color: 'var(--cyber-accent)' }}>● SYSTEM ONLINE</span>
                </div>

                <span className="accent-text">&gt; System.init(): Hi, my name is</span>
                <h1 className="big-heading glitch" data-text="Varad.">Varad.</h1>
                <h2 className="medium-heading">
                    I {text}<span className="typewriter-cursor">_</span>
                </h2>
                <p className="desc-text">
                    Full-stack engineer and digital architect. Specializing in high-performance web applications and immersive interfaces.
                </p>
                <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
                    <a href="#section-code" className="outline-btn">INITIATE_PROJECTS</a>
                    <a href="#section-contact" className="outline-btn" style={{ borderColor: '#fff', color: '#fff' }}>ESTABLISH_UPLINK</a>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
