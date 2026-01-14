import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DojoBootSequence = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const heroWeapon = 'https://images.unsplash.com/photo-1590502124707-1b0790892823?w=800&q=80';
    const floatingWeapons = [
        { char: '⚔️', top: '20%', left: '10%' },
        { char: '🏹', top: '70%', left: '15%' },
        { char: '🛡️', top: '30%', right: '10%' },
        { char: '🔥', top: '80%', right: '15%' }
    ];

    const completedRef = useRef(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 10;
            });
        }, 30);

        const s1 = setTimeout(() => setStep(1), 300);
        const s2 = setTimeout(() => setStep(2), 2200);
        const finish = setTimeout(() => {
            if (!completedRef.current) {
                completedRef.current = true;
                onComplete();
            }
        }, 3000);

        return () => {
            clearInterval(timer);
            clearTimeout(s1);
            clearTimeout(s2);
            clearTimeout(finish);
        };
    }, [onComplete]);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: '#050505',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            fontFamily: 'Roboto Condensed'
        }}>
            {/* Animated Background Weapons */}
            {floatingWeapons.map((w, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.15, scale: 1, y: [0, -30, 0] }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                    style={{ position: 'absolute', top: w.top, left: w.left, right: w.right, fontSize: '5rem', filter: 'grayscale(1) brightness(0.5)' }}
                >
                    {w.char}
                </motion.div>
            ))}

            {/* Ambient Background Glow */}
            <div style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at center, rgba(231,76,60,0.1) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="rei"
                        initial={{ opacity: 0, scale: 1.5, filter: 'blur(20px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
                        style={{ textAlign: 'center', zIndex: 1 }}
                    >
                        <motion.div
                            style={{ fontSize: '8rem', color: '#fff', marginBottom: '20px', textShadow: '0 0 50px rgba(231,76,60,0.5)', fontFamily: 'Potta One' }}
                        >
                            礼
                        </motion.div>
                        <h2 style={{ letterSpacing: '20px', color: 'var(--kumite-aka)', textTransform: 'uppercase', fontSize: '1.2rem', fontWeight: 'bold' }}>HAJIMARI</h2>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="armory"
                        style={{ zIndex: 1, position: 'relative' }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <div style={{
                            width: '460px', height: '280px',
                            overflow: 'hidden', borderRadius: '12px',
                            border: '1px solid var(--kumite-aka)',
                            background: '#000',
                            position: 'relative',
                            boxShadow: '0 0 40px rgba(231,76,60,0.3)'
                        }}>
                            <img
                                src={heroWeapon}
                                alt="Sacred Katana"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(0.8) brightness(1.2) contrast(1.2)' }}
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1590502124707-1b0790892823?w=800'; }}
                            />
                            {/* Scanning Ray */}
                            <motion.div
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--kumite-aka)', boxShadow: '0 0 25px var(--kumite-aka)', zIndex: 2 }}
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                            />
                            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.85)', padding: '10px 20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                                <span style={{ color: 'var(--kumite-aka)', fontSize: '0.75rem', letterSpacing: '3px', fontWeight: 'bold' }}>SYSTEMS_ONLINE</span>
                                <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>{progress}%</span>
                            </div>
                        </div>
                        <h3 style={{ marginTop: '30px', textAlign: 'center', color: '#fff', letterSpacing: '10px', textTransform: 'uppercase', fontSize: '1.1rem', fontFamily: 'Potta One' }}>Blade Awakening</h3>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="final"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}
                    >
                        <svg width="240" height="240" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', overflow: 'visible' }}>
                            <motion.circle
                                cx="120" cy="120" r="100"
                                stroke="var(--kumite-aka)"
                                strokeWidth="10"
                                fill="transparent"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, rotate: -90 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            />
                        </svg>
                        <h1 style={{ fontFamily: 'Potta One', fontSize: '6rem', color: '#fff', position: 'relative' }}>始め</h1>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Faster Progress Bar */}
            <div style={{ position: 'absolute', bottom: '10%', width: '320px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.8rem', color: '#888', letterSpacing: '2px' }}>
                    <span>ARSENAL_SYNC</span>
                    <span>{progress}%</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                    <motion.div
                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--kumite-aka), var(--kumite-ao))' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DojoBootSequence;
