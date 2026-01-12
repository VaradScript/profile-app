import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import KatanaSlash from './KatanaSlash';

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
        <section className="section-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
            <motion.div
                className="cyber-box"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                style={{ flex: 1, minWidth: '300px', background: 'transparent', border: 'none', boxShadow: 'none' }}
            >
                <motion.div
                    variants={itemVariants}
                    style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontFamily: 'Roboto Condensed', fontSize: '14px', color: '#888', letterSpacing: '2px' }}
                >
                    <span>ID: VARAD-SENSEI</span>
                    <span style={{ color: 'var(--dojo-accent)' }}>● DOJO OPEN</span>
                </motion.div>

                <motion.span variants={itemVariants} className="accent-text" style={{ fontFamily: 'Potta One' }}>&gt; Welcome Warrior. I am</motion.span>
                <motion.h1 variants={itemVariants} className="big-heading glitch" data-text="Varad." style={{ fontFamily: 'Potta One', color: 'white', textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>Varad.</motion.h1>
                <motion.h2 variants={itemVariants} className="medium-heading" style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ccc' }}>
                    I Master {text}<span className="typewriter-cursor" style={{ background: 'var(--dojo-accent)' }}> </span>
                </motion.h2>
                <motion.p variants={itemVariants} className="desc-text" style={{ maxWidth: '500px', lineHeight: '1.6', color: '#aaa', fontSize: '1.1rem' }}>
                    Black Belt Developer & Code Sensei. Disciplined in the art of Full Stack, creating powerful, swift, and honorable web experiences.
                </motion.p>
                <motion.div variants={itemVariants} style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
                    <a href="#section-projects" className="outline-btn" style={{ padding: '12px 30px', border: '2px solid var(--dojo-accent)', color: 'white', background: 'var(--dojo-accent)', textDecoration: 'none', fontFamily: 'Roboto Condensed', fontWeight: 'bold' }}>VIEW TECHNIQUES</a>
                    <a href="#section-contact" className="outline-btn" style={{ padding: '12px 30px', border: '2px solid #fff', color: '#fff', textDecoration: 'none', fontFamily: 'Roboto Condensed', fontWeight: 'bold' }}>BOW TO SENSEI</a>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-visual float-anim"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    width: '300px',
                    height: '420px',
                    background: 'rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    borderRadius: '20px',
                    overflow: 'hidden',
                }}
            >
                {/* Responsive Hack: Use a class to hide on mobile if needed, or rely on flex-wrap */}
                <div style={{ padding: '20px', fontFamily: 'Roboto Condensed', fontSize: '1rem', color: '#eee' }}>
                    <div style={{ borderBottom: '2px solid var(--dojo-accent)', paddingBottom: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>COMBAT_STATS</span>
                        <div style={{ width: '10px', height: '10px', background: 'var(--dojo-accent)', borderRadius: '50%' }}></div>
                    </div>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {[
                            { label: 'REACT STYLE', val: 95 },
                            { label: 'BACKEND FIST', val: 88 },
                            { label: 'FOCUS (DB)', val: 82 },
                            { label: 'SPEED (PERF)', val: 90 }
                        ].map(skill => (
                            <div key={skill.label}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                    <span>{skill.label}</span>
                                    <span style={{ color: 'var(--dojo-accent)' }}>{skill.val}/100</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', background: '#333', borderRadius: '4px' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.val}%` }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        style={{ height: '100%', background: 'var(--dojo-accent)', borderRadius: '4px' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '50px', textAlign: 'center', opacity: 0.8 }}>
                        <div style={{ fontSize: '4rem', color: '#333', textShadow: '2px 2px 0 var(--dojo-accent)' }}>🥋</div>
                    </div>
                </div>

                {/* Decorative corners */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--dojo-accent)', borderLeft: '2px solid var(--dojo-accent)' }}></div>
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--dojo-accent)', borderRight: '2px solid var(--dojo-accent)' }}></div>
            </motion.div>
        </section>
    );
};

export default Hero;
