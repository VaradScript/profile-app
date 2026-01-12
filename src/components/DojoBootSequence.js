import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DojoBootSequence = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);

    const weapons = [
        { img: 'https://images.unsplash.com/photo-1517457373958-12123d8d5e13?w=200&auto=format&fit=crop', label: 'Katana' },
        { img: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=200&auto=format&fit=crop', label: 'Shuriken' },
        { img: 'https://images.unsplash.com/photo-1599058917220-4389929286f3?w=200&auto=format&fit=crop', label: 'Nunchaku' },
        { img: 'https://images.unsplash.com/photo-1511818234808-60be87e6714d?w=200&auto=format&fit=crop', label: 'Sai' }
    ];

    useEffect(() => {
        // Fast progress: 100 in 1 second
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 5;
            });
        }, 50);

        const s1 = setTimeout(() => setStep(1), 500);
        const s2 = setTimeout(() => setStep(2), 1200);
        const finish = setTimeout(() => onComplete(), 2000);

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
            <div style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.05,
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }} />

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="rei"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ textAlign: 'center', zIndex: 1 }}
                    >
                        <motion.div
                            style={{ fontSize: '6rem', color: '#fff', marginBottom: '10px' }}
                            animate={{ rotateX: [0, 90, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            礼
                        </motion.div>
                        <h2 style={{ letterSpacing: '8px', color: 'var(--kumite-aka)', textTransform: 'uppercase' }}>Entering Dojo</h2>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="armory"
                        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', zIndex: 1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                    >
                        {weapons.map((w, i) => (
                            <motion.div
                                key={w.label}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                style={{
                                    padding: '15px',
                                    background: 'rgba(255,255,255,0.03)',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    textAlign: 'center',
                                    minWidth: '160px'
                                }}
                            >
                                <div style={{ height: '80px', marginBottom: '10px', overflow: 'hidden', borderRadius: '8px' }}>
                                    <img
                                        src={w.img}
                                        alt={w.label}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(1.2)' }}
                                    />
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--kumite-ao)', letterSpacing: '2px', fontWeight: 'bold' }}>{w.label}</div>
                            </motion.div>
                        ))}
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
