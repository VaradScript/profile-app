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
            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
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
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <span className="accent-text">System.init(): Hi, my name is</span>
                <h1 className="big-heading glitch" data-text="Varad.">Varad.</h1>
                <h2 className="medium-heading" style={{ color: 'var(--hero-text)', opacity: 0.8 }}>
                    I {text}<span className="typewriter-cursor"></span>
                </h2>
                <p className="desc-text">
                    I'm a full-stack engineer and UI therapist based in India. I specialize in building (and occasionally designing) exceptional digital experiences that are fast, accessible, and visually stunning.
                </p>
                <a href="#section-projects" className="outline-btn">View My Files</a>
            </motion.div>
        </section>
    );
};

export default Hero;
