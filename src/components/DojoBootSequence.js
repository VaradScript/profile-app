import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DojoBootSequence = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);
    const [currentWeapon, setCurrentWeapon] = useState(0);

    const arsenal = [
        { name: 'KATANA // [Void Cutter]', icon: '⚔️' },
        { name: 'YUMI // [Wind Piercer]', icon: '🏹' },
        { name: 'SAI // [Steel Fang]', icon: '🔱' },
        { name: 'BO // [Earth Staff]', icon: '🥢' }
    ];

    useEffect(() => {
        // Extended Timeline
        // 0-1.5s: Bow (Rei)
        // 1.5s-4.5s: Arsenal Cycle
        // 4.5s-6.5s: System Sync
        // 6.5s: Hajime

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1; // Slower progress (approx 6s total)
            });
        }, 60);

        // Sequence Steps
        const s1 = setTimeout(() => setStep(1), 1500); // Enter Arsenal
        const s2 = setTimeout(() => setStep(2), 5000); // Enter Sync
        const finish = setTimeout(onComplete, 7500); // Finish

        // Weapon Cycling during Step 1
        const weaponCycle = setInterval(() => {
            setCurrentWeapon(prev => (prev + 1) % arsenal.length);
        }, 800);

        return () => {
            clearInterval(timer);
            clearTimeout(s1);
            clearTimeout(s2);
            clearTimeout(finish);
            clearInterval(weaponCycle);
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
        }}>
            {/* Grid Overlay */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.1,
                backgroundImage: 'linear-gradient(rgba(50, 255, 50, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(50, 255, 50, 0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }} />

            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div
                        key="rei"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        style={{ textAlign: 'center', zIndex: 2 }}
                    >
                        <motion.div
                            style={{ fontSize: '8rem', color: '#fff', marginBottom: '20px', fontFamily: 'Potta One', textShadow: '0 0 30px var(--kumite-aka)' }}
                        >
                            礼
                        </motion.div>
                        <h2 style={{ letterSpacing: '15px', color: 'var(--kumite-aka)', textTransform: 'uppercase', fontSize: '1.2rem', fontFamily: 'Roboto Condensed' }}>PROTOCOL: RESPECT</h2>
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
                        <div style={{
                            width: '300px', height: '300px',
                            border: '1px solid var(--kumite-aka)',
                            position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            background: 'rgba(0,0,0,0.5)',
                            boxShadow: '0 0 30px rgba(231, 76, 60, 0.1)'
                        }}>
                            {/* Corner Marks */}
                            <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '4px solid var(--kumite-aka)', borderLeft: '4px solid var(--kumite-aka)' }} />
                            <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '20px', height: '20px', borderBottom: '4px solid var(--kumite-aka)', borderRight: '4px solid var(--kumite-aka)' }} />

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentWeapon}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 1.5, rotate: 45 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ fontSize: '8rem' }}
                                >
                                    {arsenal[currentWeapon].icon}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <div style={{ marginTop: '20px', color: '#fff', letterSpacing: '5px', fontFamily: 'Orbitron, sans-serif' }}>
                            CHECKING ARSENAL...
                        </div>
                        <motion.div
                            key={currentWeapon}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ color: 'var(--kumite-aka)', fontSize: '0.9rem', marginTop: '10px' }}
                        >
                            {arsenal[currentWeapon].name}
                        </motion.div>
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
                        <h1 style={{ fontFamily: 'Potta One', fontSize: '6rem', color: '#fff', textShadow: '0 0 50px var(--kumite-aka)' }}>始め</h1>
                        <h2 style={{ letterSpacing: '10px', color: '#fff', fontSize: '1.5rem', marginTop: '10px' }}>HAJIME</h2>
                        <div style={{ width: '200px', height: '4px', background: '#333', margin: '20px auto 0', overflow: 'hidden', borderRadius: '2px' }}>
                            <motion.div
                                style={{ height: '100%', background: 'var(--kumite-aka)' }}
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5 }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Footer Info */}
            <div style={{ position: 'absolute', bottom: '30px', fontFamily: 'Roboto Condensed', color: '#555', fontSize: '0.7rem', letterSpacing: '2px' }}>
                SYSTEM INTEGRITY: {progress}%
            </div>
        </div>
    );
};

export default DojoBootSequence;
