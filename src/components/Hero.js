import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const phrases = ["build things for the web.", "design digital experiences.", "engineer modern solutions."];
    const [typingSpeed, setTypingSpeed] = useState(150);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-300, 300], [10, -10]);
    const rotateY = useTransform(x, [-300, 300], [-10, 10]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    }

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
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="section-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap', position: 'relative', zIndex: 1, padding: '80px 40px' }}>
            {/* Background Strike Line (Ambient) */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 0.15 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', top: '22%', left: 0, height: '1px', background: 'var(--dojo-accent)', zIndex: -1 }}
            />

            <motion.div
                className="cyber-box"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{ flex: 1, minWidth: '300px', background: 'rgba(0,0,0,0.6)', borderRadius: '0 20px 0 20px', padding: '2rem' }}
            >
                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontFamily: 'Roboto Condensed', fontSize: '11px', color: '#555', letterSpacing: '5px' }}
                >
                    <span>VARAD_SENSEI.sys</span>
                    <span style={{ color: 'var(--dojo-accent)', textShadow: '0 0 10px var(--dojo-accent)' }}>● [ONLINE]</span>
                </div>

                <motion.span className="accent-text" style={{ fontFamily: 'Potta One', fontSize: '1rem', letterSpacing: '3px', opacity: 0.8 }}>// Syncing Aura...</motion.span>
                <motion.h1 className="big-heading glitch" data-text="Varad." style={{ fontFamily: 'Potta One', color: 'white', fontSize: '5rem', margin: '5px 0', textShadow: '0 0 25px rgba(255,255,255,0.15), 0 0 50px rgba(231,76,60,0.1)' }}>Varad.</motion.h1>
                <motion.h2 className="medium-heading" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#eee', fontWeight: 300 }}>
                    Master of {text}<span className="typewriter-cursor" style={{ background: 'var(--dojo-accent)' }}> </span>
                </motion.h2>
                <motion.p className="desc-text" style={{ maxWidth: '480px', lineHeight: '1.6', color: '#aaa', fontSize: '1.1rem', fontWeight: 300 }}>
                    Disciplined Full-Stack Architect. Every line is a strike. Every project, a perfected kata.
                </motion.p>

                <motion.div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                    <a href="#section-projects" className="outline-btn" style={{ padding: '12px 28px', border: '1px solid var(--dojo-accent)', color: 'white', background: 'var(--dojo-accent)', textDecoration: 'none', fontFamily: 'Roboto Condensed', fontSize: '13px', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '4px', textTransform: 'uppercase' }}>EXECUTE_KATA</a>
                    <a href="#section-contact" className="outline-btn" style={{ padding: '12px 28px', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', textDecoration: 'none', fontFamily: 'Roboto Condensed', fontSize: '13px', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '4px', textTransform: 'uppercase' }}>SENSEI_ACCESS</a>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                style={{
                    width: '260px',
                    height: '350px',
                    perspective: 1000
                }}
                onMouseMove={handleMouse}
                onMouseLeave={() => { x.set(0); y.set(0); }}
            >
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255,255,255,0.01)',
                        backdropFilter: 'blur(50px)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        position: 'relative',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                        rotateX: rotateX,
                        rotateY: rotateY
                    }}
                >
                    <div style={{ padding: '20px', fontFamily: 'Roboto Condensed', color: '#eee' }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '4px', opacity: 0.7 }}>SPIRIT_LVL</span>
                            <div style={{ width: '6px', height: '6px', background: 'var(--dojo-accent)', borderRadius: '50%', boxShadow: '0 0 10px var(--dojo-accent)' }}></div>
                        </div>
                        <div style={{ display: 'grid', gap: '15px' }}>
                            {[
                                { label: 'REACTION', val: 95 },
                                { label: 'STRIKE', val: 88 },
                                { label: 'PRECISION', val: 92 },
                                { label: 'ZEN', val: 99 }
                            ].map(skill => (
                                <div key={skill.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                        <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{skill.label}</span>
                                        <span style={{ color: 'var(--dojo-accent)', fontWeight: 'bold', fontSize: '0.75rem' }}>{skill.val}%</span>
                                    </div>
                                    <div style={{ width: '100%', height: '3px', background: 'rgba(255,255,255,0.03)', borderRadius: '1.5px', overflow: 'hidden' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.val}%` }}
                                            transition={{ duration: 2, delay: 1 }}
                                            style={{ height: '100%', background: `linear-gradient(90deg, var(--dojo-accent), transparent)` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '30px', textAlign: 'center' }}>
                            <span style={{ fontSize: '0.55rem', color: '#333', letterSpacing: '5px' }}>RANK: [MOD_SENSEI]</span>
                        </div>
                    </div>

                    {/* Internal Scanline Effect */}
                    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(231, 76, 60, 0.02), transparent)' }}></div>

                    {/* Decorative corners */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '15px', height: '15px', borderTop: '1px solid var(--dojo-accent)', borderLeft: '1px solid var(--dojo-accent)', borderRadius: '20px 0 0 0' }}></div>
                    <div style={{ position: 'absolute', bottom: 0, right: 0, width: '15px', height: '15px', borderBottom: '1px solid var(--dojo-accent)', borderRight: '1px solid var(--dojo-accent)', borderRadius: '0 0 20px 0' }}></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
