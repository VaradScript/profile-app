import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShadowFightBackground = ({ theme, activeSection }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [flash, setFlash] = useState(false);

    useEffect(() => {
        const handleMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    // Flash effect on section change
    useEffect(() => {
        setFlash(true);
        const timer = setTimeout(() => setFlash(false), 200);
        return () => clearTimeout(timer);
    }, [activeSection]);

    // Silhouette poses (simplified SVG paths for character poses)
    const poses = {
        'section-hero': "M10,80 L20,60 L15,40 L30,20 L45,40 L40,60 L50,80", // Stance
        'section-about': "M10,80 L20,60 L25,40 L50,30 L70,45 L50,60 L45,80", // Kick
        'section-experience': "M10,80 L20,60 L15,40 L40,20 L65,25 L50,60 L55,80", // Punch
        'section-works': "M20,80 L30,60 L25,40 L40,15 L55,40 L50,60 L60,80", // Jumping
        'section-contact': "M10,80 L20,60 L20,35 L40,40 L50,45 L40,65 L35,85"  // Defense
    };

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -10, pointerEvents: 'none', background: '#050505', overflow: 'hidden' }}>

            {/* Ambient Background Gradient */}
            <motion.div
                animate={{
                    background: theme === 'aka'
                        ? 'radial-gradient(circle at 50% 50%, rgba(255, 60, 45, 0.15) 0%, #050505 70%)'
                        : 'radial-gradient(circle at 50% 50%, rgba(0, 170, 255, 0.15) 0%, #050505 70%)'
                }}
                transition={{ duration: 1 }}
                style={{ position: 'absolute', inset: 0 }}
            />

            {/* Flash Effect */}
            <AnimatePresence>
                {flash && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ position: 'absolute', inset: 0, background: 'white', zIndex: 1000 }}
                    />
                )}
            </AnimatePresence>

            {/* Stylized Mountain / Temple Silhouette Layer */}
            <motion.div
                animate={{ x: mousePos.x * -0.5, y: mousePos.y * -0.2 }}
                style={{ position: 'absolute', bottom: '-5%', left: '-10%', width: '120%', opacity: 0.1, zIndex: -1 }}
            >
                <svg viewBox="0 0 1000 300" fill="white">
                    <path d="M0,300 L0,200 L100,150 L200,220 L350,100 L500,200 L650,50 L800,180 L1000,150 L1000,300 Z" />
                </svg>
            </motion.div>

            {/* Main Fighter Silhouette (Dynamic based on section) */}
            <div style={{ position: 'absolute', right: '5%', bottom: '0', width: '50vw', height: '80vh', opacity: 0.15 }}>
                <AnimatePresence mode="wait">
                    <motion.svg
                        key={activeSection}
                        viewBox="0 0 100 100"
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -100, scale: 1.1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        {/* Shadow Fight Style Brush Path */}
                        <motion.path
                            d={poses[activeSection] || poses['section-hero']}
                            stroke="white"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.2 }}
                        />
                        {/* Inner Body Glow */}
                        <motion.path
                            d={poses[activeSection] || poses['section-hero']}
                            stroke={theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)'}
                            strokeWidth="4"
                            strokeLinecap="round"
                            fill="none"
                            style={{ filter: 'blur(10px)' }}
                        />
                    </motion.svg>
                </AnimatePresence>
            </div>

            {/* Foreground Ink Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`ink-${i}`}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 360]
                    }}
                    transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        left: `${(i * 25) % 100}%`,
                        top: `${(i * 35) % 100}%`,
                        width: '300px', height: '300px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
                        filter: 'blur(50px)',
                        borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
                    }}
                />
            ))}

            {/* Vertical CRT lines for that "Fight" intro feel */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)', backgroundSize: '4px 100%', opacity: 0.5 }} />
        </div>
    );
};

export default ShadowFightBackground;
