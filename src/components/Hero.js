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
        <section className="section-wrapper" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '80px', flexWrap: 'wrap', position: 'relative', zIndex: 1, padding: '120px 5vw' }}>
            <motion.div
                className="cyber-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                style={{ flex: 1, minWidth: '320px', maxWidth: '700px' }}
            >
                <div
                    style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '4px' }}
                >
                    <span>ID_PROTOCOL / v4.2.0</span>
                    <span style={{ color: 'var(--dojo-accent)', fontWeight: 'bold' }}>● SYSTEM_ACTIVE</span>
                </div>

                <motion.span className="accent-text" style={{ fontSize: '0.9rem', letterSpacing: '8px', opacity: 0.5, fontWeight: 300 }}>// WELCOME_USER</motion.span>
                <div style={{ position: 'relative' }}>
                    <motion.h1 className="big-heading shadow-text" style={{ color: 'white', fontSize: '15vh', lineHeight: '0.8', margin: '20px 0', fontWeight: 'bold', textShadow: '0 0 50px rgba(0,0,0,1), 0 0 100px var(--dojo-glow)' }}>Varad.</motion.h1>
                    <div style={{ position: 'absolute', top: '-20px', left: '-30px', fontSize: '6rem', color: 'rgba(255,255,255,0.03)', fontWeight: 'bold', pointerEvents: 'none', zIndex: -1 }}>SHADOW</div>
                </div>

                <motion.h2 className="medium-heading" style={{ fontSize: '1.8rem', minHeight: '3rem', marginBottom: '2rem', color: 'white', fontWeight: 200, letterSpacing: '1px' }}>
                    I <span style={{ fontWeight: 400, borderBottom: `2px solid var(--dojo-accent)` }}>{text}</span><span className="typewriter-cursor" style={{ background: 'white' }}> </span>
                </motion.h2>

                <motion.p className="desc-text" style={{ maxWidth: '520px', lineHeight: '1.8', color: 'rgba(255,255,255,0.5)', fontSize: '1rem', fontWeight: 300, marginBottom: '40px' }}>
                    Designing digital systems with lethal precision. Specializing in high-performance architectures and immersive interfaces. Every line of code is a strategic strike.
                </motion.p>

                <motion.div style={{ display: 'flex', gap: '20px' }}>
                    <motion.a
                        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        href="#section-works"
                        style={{ padding: '16px 36px', background: 'white', color: 'black', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '2px' }}
                    >
                        INITIATE_PROJECTS
                    </motion.a>
                    <motion.a
                        whileHover={{ background: 'rgba(255,255,255,0.05)', color: 'white' }}
                        href="#section-contact"
                        style={{ padding: '16px 36px', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontFamily: 'JetBrains Mono', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', borderRadius: '2px', transition: '0.3s' }}
                    >
                        ESTABLISH_LINK
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    width: '320px',
                    height: '450px',
                    perspective: 2000
                }}
                onMouseMove={handleMouse}
                onMouseLeave={() => { x.set(0); y.set(0); }}
            >
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'rgba(255,255,255,0.01)',
                        backdropFilter: 'blur(100px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        position: 'relative',
                        borderRadius: '4px',
                        rotateX: rotateX,
                        rotateY: rotateY,
                        boxShadow: '0 50px 100px rgba(0,0,0,0.8), inset 0 0 100px rgba(255,255,255,0.02)'
                    }}
                >
                    <div style={{ padding: '30px', fontFamily: 'Outfit', color: 'white', height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '6px', color: 'rgba(255,255,255,0.3)' }}>CORE_METRICS</span>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <div style={{ width: '4px', height: '4px', background: 'var(--dojo-accent)', borderRadius: '50%' }}></div>
                                <div style={{ width: '4px', height: '4px', background: 'white', borderRadius: '50%' }}></div>
                            </div>
                        </div>

                        <div style={{ flex: 1, display: 'grid', gap: '30px', alignContent: 'center' }}>
                            {[
                                { label: 'SYNTHESIS', val: 95 },
                                { label: 'PRECISION', val: 98 },
                                { label: 'VELOCITY', val: 82 },
                                { label: 'COGNITION', val: 99 }
                            ].map(skill => (
                                <div key={skill.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'baseline' }}>
                                        <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)' }}>{skill.label}</span>
                                        <span style={{ color: 'white', fontWeight: 300, fontSize: '1rem', fontFamily: 'JetBrains Mono' }}>{skill.val}</span>
                                    </div>
                                    <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)', position: 'relative' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.val}%` }}
                                            transition={{ duration: 1.5, delay: 0.8 }}
                                            style={{ height: '2px', top: '-0.5px', position: 'absolute', background: skill.label === 'COGNITION' ? 'white' : 'var(--dojo-accent)', boxShadow: skill.label === 'COGNITION' ? '0 0 10px white' : 'none' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'right' }}>
                            <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.1)', letterSpacing: '8px' }}>LVL_99_ARCHITECT</span>
                        </div>
                    </div>

                    {/* Decorative Brackets */}
                    <div style={{ position: 'absolute', top: '15px', left: '15px', width: '20px', height: '20px', borderTop: '1px solid rgba(255,255,255,0.2)', borderLeft: '1px solid rgba(255,255,255,0.2)' }}></div>
                    <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '20px', height: '20px', borderBottom: '1px solid rgba(255,255,255,0.2)', borderRight: '1px solid rgba(255,255,255,0.2)' }}></div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
