import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DojoBootSequence = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [currentWeapon, setCurrentWeapon] = useState(0);

    // SVG WEAPONS (100% Reliable, No URLs)
    const renderWeapon = (index) => {
        const strokeColor = 'var(--kumite-aka)';

        // KATANA
        if (index === 0) return (
            <svg viewBox="0 0 100 100" style={{ width: '60%', height: '60%', filter: `drop-shadow(0 0 10px ${strokeColor})` }}>
                <motion.path
                    d="M 20 80 Q 50 50 80 20 L 85 25 Q 55 55 25 85 Z"
                    fill="transparent" stroke={strokeColor} strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.line x1="20" y1="80" x2="10" y2="90" stroke={strokeColor} strokeWidth="4" />
                <motion.rect x="18" y="78" width="5" height="5" fill={strokeColor} transform="rotate(-45 20.5 80.5)" />
            </svg>
        );

        // SHURIKEN
        if (index === 1) return (
            <svg viewBox="0 0 100 100" style={{ width: '50%', height: '50%', filter: `drop-shadow(0 0 10px ${strokeColor})` }}>
                <motion.path
                    d="M 50 10 L 60 40 L 90 50 L 60 60 L 50 90 L 40 60 L 10 50 L 40 40 Z"
                    fill="transparent" stroke={strokeColor} strokeWidth="2"
                    strokeLinejoin="round"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring" }}
                />
                <circle cx="50" cy="50" r="5" fill={strokeColor} />
            </svg>
        );

        // SAI / KUNAI
        if (index === 2) return (
            <svg viewBox="0 0 100 100" style={{ width: '50%', height: '50%', filter: `drop-shadow(0 0 10px ${strokeColor})` }}>
                <motion.path
                    d="M 50 10 L 60 30 L 55 80 L 45 80 L 40 30 Z"
                    fill="transparent" stroke={strokeColor} strokeWidth="2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                />
                <circle cx="50" cy="85" r="5" stroke={strokeColor} strokeWidth="2" fill="transparent" />
            </svg>
        );

        // MEMPO (Mask)
        if (index === 3) return (
            <svg viewBox="0 0 100 100" style={{ width: '55%', height: '55%', filter: `drop-shadow(0 0 10px ${strokeColor})` }}>
                <motion.path
                    d="M 20 30 Q 50 10 80 30 L 75 80 Q 50 95 25 80 Z"
                    fill="transparent" stroke={strokeColor} strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                />
                {/* Eyes */}
                <path d="M 30 45 L 45 50" stroke={strokeColor} strokeWidth="2" />
                <path d="M 70 45 L 55 50" stroke={strokeColor} strokeWidth="2" />
                {/* Grin */}
                <path d="M 35 70 Q 50 60 65 70" stroke={strokeColor} strokeWidth="2" fill="transparent" />
            </svg>
        );
    };

    const arsenal = [
        { name: 'KATANA // [Void Cutter]' },
        { name: 'SHURIKEN // [Star Strike]' },
        { name: 'KUNAI // [Silent Fang]' },
        { name: 'MEMPO // [Spirit Guard]' }
    ];

    useEffect(() => {
        // Timeline Optimized (Speed: Fast)
        // 0-1s: Rei (Bow)
        // 1s-3.5s: Arsenal Cycle (Rapid)
        // 3.5s-4.5s: System Sync
        // 4.5s: Complete

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1.5;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, 30);

        // Sequence Steps
        const s1 = setTimeout(() => setStep(1), 1200);
        const s2 = setTimeout(() => setStep(2), 3500);
        const finish = setTimeout(onComplete, 4800);

        // Rapid Weapon Cycling
        const weaponCycle = setInterval(() => {
            setCurrentWeapon(prev => (prev + 1) % arsenal.length);
        }, 800);

        return () => {
            clearInterval(timer);
            clearTimeout(s1); clearTimeout(s2); clearTimeout(finish);
            clearInterval(weaponCycle);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: '#020202',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        }}>
            {/* CRT TV Filter Overlay */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 9999, pointerEvents: 'none',
                background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 2px, 3px 100%'
            }} />

            {/* High-Tech Grid Overlay - Smoothed Animation */}
            <motion.div
                animate={{ backgroundPosition: ['0px 0px', '0px 60px'] }}
                transition={{ repeat: Infinity, ease: 'linear', duration: 2 }}
                style={{
                    position: 'absolute', inset: 0, opacity: 0.15,
                    backgroundImage: 'linear-gradient(rgba(50, 255, 50, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 255, 50, 0.2) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    filter: 'perspective(500px) rotateX(20deg)',
                }}
            />

            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, transparent 40%, #000 100%)', pointerEvents: 'none' }} />

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="rei"
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.2, filter: 'blur(20px)' }}
                        style={{ textAlign: 'center', zIndex: 2 }}
                    >
                        <motion.div
                            animate={{ textShadow: ['0 0 20px var(--kumite-aka)', '0 0 50px var(--kumite-aka)', '0 0 20px var(--kumite-aka)'] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ fontSize: '9rem', color: '#fff', marginBottom: '20px', fontFamily: 'Potta One' }}
                        >
                            礼
                        </motion.div>
                        <h2 style={{ letterSpacing: '12px', color: 'var(--kumite-aka)', fontSize: '1.2rem', fontFamily: 'Roboto Condensed', borderBottom: '2px solid var(--kumite-aka)', paddingBottom: '10px' }}>PROTOCOL: RESPECT</h2>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="arsenal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -50 }}
                        style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        {/* CLEAN HOLOGRAPHIC DISPLAY */}
                        <div style={{
                            width: '350px', height: '350px',
                            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'rgba(20,20,20,0.8)',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            backdropFilter: 'blur(20px)',
                            overflow: 'hidden'
                        }}>
                            {/* Scanning line effect */}
                            <motion.div
                                style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                                    background: 'var(--kumite-aka)',
                                    boxShadow: '0 0 10px var(--kumite-aka)',
                                    zIndex: 15
                                }}
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />

                            {/* Clean Frame Border */}
                            <div style={{ position: 'absolute', inset: '10px', border: '1px solid var(--kumite-aka)', opacity: 0.3, borderRadius: '10px', pointerEvents: 'none', zIndex: 10 }} />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentWeapon}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4 }}
                                    style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    {renderWeapon(currentWeapon)}
                                </motion.div>
                            </AnimatePresence>

                            {/* Premium Label */}
                            <div style={{ position: 'absolute', bottom: '25px', width: '100%', textAlign: 'center', fontFamily: 'JetBrains Mono', fontSize: '10px', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)' }}>
                                BLUEPRINT_0{currentWeapon + 1}
                            </div>
                        </div>

                        <motion.div
                            key={currentWeapon}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ color: '#fff', fontSize: '1.5rem', marginTop: '20px', fontFamily: 'Potta One', letterSpacing: '2px', textShadow: '0 0 20px var(--kumite-aka)' }}
                        >
                            {arsenal[currentWeapon].name.split('//')[0]}
                        </motion.div>
                        <div style={{ color: 'var(--kumite-aka)', fontSize: '0.9rem', fontFamily: 'JetBrains Mono', opacity: 0.8 }}>
                            {arsenal[currentWeapon].name.split('//')[1]}
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="sync"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ textAlign: 'center', zIndex: 2 }}
                    >
                        <h1 style={{ fontFamily: 'Potta One', fontSize: '8rem', color: '#fff', textShadow: '0 0 80px var(--kumite-aka)', marginBottom: '0' }}>始め</h1>
                        <h2 style={{ letterSpacing: '20px', color: '#fff', fontSize: '2rem', marginTop: '0', fontWeight: 'bold' }}>HAJIME</h2>
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.2 }}
                            style={{ width: '300px', height: '2px', background: 'var(--kumite-aka)', margin: '30px auto', boxShadow: '0 0 20px var(--kumite-aka)' }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer Info with Progress Bar */}
            <div style={{ position: 'absolute', bottom: '30px', width: '80%', maxWidth: '600px', fontFamily: 'JetBrains Mono', color: '#444', fontSize: '0.8rem', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', color: 'var(--kumite-aka)', opacity: 0.8 }}>
                    <span>SYS.VER.4.1.0</span>
                    <span>{Math.round(progress)}%</span>
                </div>

                {/* Visual Progress Bar */}
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                    <motion.div
                        style={{ width: `${progress}%`, height: '100%', background: 'var(--kumite-aka)', boxShadow: '0 0 10px var(--kumite-aka)' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default DojoBootSequence;
