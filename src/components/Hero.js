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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className="section-wrapper">
            <motion.div
                className="cyber-box"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ width: '100%' }}
            >
                <motion.div
                    variants={itemVariants}
                    style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontFamily: 'JetBrains Mono', fontSize: '12px', color: '#666' }}
                >
                    <span>ID: VARAD-001</span>
                    <span style={{ color: 'var(--cyber-accent)' }}>● SYSTEM ONLINE</span>
                </motion.div>

                <motion.span variants={itemVariants} className="accent-text">&gt; System.init(): Hi, my name is</motion.span>
                <motion.h1 variants={itemVariants} className="big-heading glitch" data-text="Varad.">Varad.</motion.h1>
                <motion.h2 variants={itemVariants} className="medium-heading">
                    I {text}<span className="typewriter-cursor">_</span>
                </motion.h2>
                <motion.p variants={itemVariants} className="desc-text">
                    Full-stack engineer and digital architect. Specializing in high-performance web applications and immersive interfaces.
                </motion.p>
                <motion.div variants={itemVariants} style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
                    <a href="#section-code" className="outline-btn">INITIATE_PROJECTS</a>
                    <a href="#section-contact" className="outline-btn" style={{ borderColor: '#fff', color: '#fff' }}>ESTABLISH_UPLINK</a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
