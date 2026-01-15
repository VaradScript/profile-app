import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const weaponsArr = [
    { name: 'Katana', icon: '🗡️', x: '5%', y: '15%', rotate: 45 },
    { name: 'Shuriken', icon: '✴️', x: '85%', y: '10%', rotate: 0, spin: true },
    { name: 'Nunchaku', icon: '🔗', x: '10%', y: '85%', rotate: -30 },
    { name: 'Sai', icon: '🔱', x: '90%', y: '80%', rotate: 15 }
];

const quotes = [
    "Fall seven times, stand up eight.",
    "Maximum efficiency with minimum effort.",
    "The ultimate aim of Karate lies in the perfection of character.",
    "Knowing is not enough, we must apply.",
    "Practice one kick 10,000 times."
];

const KumiteBackground = ({ theme }) => {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 8000);

        const handleMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 50;
            const y = (e.clientY / window.innerHeight - 0.5) * 50;
            setMousePos({ x, y });
        };
        window.addEventListener('mousemove', handleMove);
        return () => {
            clearInterval(interval);
            window.removeEventListener('mousemove', handleMove);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -5, pointerEvents: 'none', overflow: 'hidden', background: '#0a0a0a' }}>
            {/* Ink Depth Layer */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={`ink-${i}`}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        opacity: [0.02, 0.05, 0.02]
                    }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        width: '600px', height: '600px',
                        background: theme === 'aka' ? 'radial-gradient(circle, var(--kumite-aka) 0%, transparent 70%)' : 'radial-gradient(circle, var(--kumite-ao) 0%, transparent 70%)',
                        left: `${(i * 40) % 110 - 20}%`,
                        top: `${(i * 30) % 110 - 20}%`,
                        filter: 'blur(120px)',
                    }}
                />
            ))}

            {/* Spirit Fog Particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={`fog-${i}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                        y: [0, -100],
                        opacity: [0, 0.3, 0],
                        scale: [0.5, 2]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 5
                    }}
                    style={{
                        position: 'absolute',
                        left: `${Math.random() * 100}%`,
                        bottom: '-10%',
                        width: '100px',
                        height: '100px',
                        background: theme === 'aka' ? 'radial-gradient(circle, var(--kumite-aka) 0%, transparent 70%)' : 'radial-gradient(circle, var(--kumite-ao) 0%, transparent 70%)',
                        filter: 'blur(30px)',
                        zIndex: -2
                    }}
                />
            ))}

            <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")' }} />

            {/* AKA FIGHTER (Left) */}
            <motion.div
                animate={{ x: mousePos.x * 0.1, y: mousePos.y * 0.1 }}
                style={{ position: 'absolute', bottom: 0, left: '-5%', height: '80%', mixBlendMode: 'screen', opacity: 0.06 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop"
                    alt="Fight Aka"
                    style={{ height: '100%', filter: 'grayscale(1) contrast(2) drop-shadow(0 0 30px var(--kumite-aka))' }}
                />
            </motion.div>

            {/* AO FIGHTER (Right) */}
            <motion.div
                animate={{ x: -mousePos.x * 0.1, y: -mousePos.y * 0.1 }}
                style={{ position: 'absolute', top: 0, right: '-5%', height: '80%', mixBlendMode: 'screen', opacity: 0.06 }}
            >
                <img
                    src="https://images.unsplash.com/photo-1544367563-12123d8d5e13?q=80&w=1000&auto=format&fit=crop"
                    alt="Fight Ao"
                    style={{ height: '100%', filter: 'grayscale(1) contrast(2) drop-shadow(0 0 30px var(--kumite-ao))', transform: 'scaleX(-1)' }}
                />
            </motion.div>

            {/* Floating Weapons */}
            {weaponsArr.map((w, i) => (
                <motion.div
                    key={w.name}
                    animate={{
                        opacity: 0.12,
                        y: [0, -30, 0],
                        x: mousePos.x * (0.05 + i * 0.03),
                        rotate: w.spin ? [0, 360] : w.rotate
                    }}
                    transition={{
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 12, repeat: Infinity, ease: "linear" }
                    }}
                    style={{
                        position: 'absolute', left: w.x, top: w.y,
                        fontSize: '7rem', color: theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)',
                        filter: 'blur(3px)'
                    }}
                >
                    {w.icon}
                </motion.div>
            ))}

            {/* Center Calligraphy Effect (Placeholder for wisdom) */}
            <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', width: '80%' }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={quoteIndex}
                        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                        animate={{ opacity: 0.15, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        transition={{ duration: 1 }}
                        style={{ fontFamily: 'Potta One', fontSize: '2rem', color: '#fff', letterSpacing: '8px' }}
                    >
                        "{quotes[quoteIndex]}"
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Grid for Tech Feel */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.05, background: 'linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>
    );
};

export default KumiteBackground;
