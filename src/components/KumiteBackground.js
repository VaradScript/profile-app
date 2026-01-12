import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const weapons = [
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

    useEffect(() => {
        const interval = setInterval(() => {
            setQuoteIndex((prev) => (prev + 1) % quotes.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -5, pointerEvents: 'none', overflow: 'hidden', background: '#0a0a0a' }}>

            {/* AKA FIGHTER (Left) - RE-ADDED */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.08, x: 0 }}
                style={{ position: 'absolute', bottom: 0, left: '-5%', height: '80%', mixBlendMode: 'screen' }}
            >
                <img
                    src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=1000&auto=format&fit=crop"
                    alt="Fight Aka"
                    style={{ height: '100%', filter: 'grayscale(1) contrast(2) drop-shadow(0 0 20px var(--kumite-aka))' }}
                />
            </motion.div>

            {/* AO FIGHTER (Right) - RE-ADDED */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.08, x: 0 }}
                style={{ position: 'absolute', top: 0, right: '-5%', height: '80%', mixBlendMode: 'screen' }}
            >
                <img
                    src="https://images.unsplash.com/photo-1544367563-12123d8d5e13?q=80&w=1000&auto=format&fit=crop"
                    alt="Fight Ao"
                    style={{ height: '100%', filter: 'grayscale(1) contrast(2) drop-shadow(0 0 20px var(--kumite-ao))', transform: 'scaleX(-1)' }}
                />
            </motion.div>

            {/* Floating Weapons */}
            {weapons.map((w, i) => (
                <motion.div
                    key={w.name}
                    animate={{
                        opacity: 0.1,
                        y: [0, -30, 0],
                        rotate: w.spin ? [0, 360] : w.rotate
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    style={{
                        position: 'absolute', left: w.x, top: w.y,
                        fontSize: '6rem', color: theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)',
                        filter: 'blur(3px)'
                    }}
                >
                    {w.icon}
                </motion.div>
            ))}

            {/* Motivational Quotes */}
            <div style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', width: '60%', textAlign: 'center' }}>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={quoteIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{ fontFamily: 'Potta One', fontSize: '1.5rem', color: '#fff' }}
                    >
                        "{quotes[quoteIndex]}"
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Background Strike Lines (Subtle) */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.1 }}>
                <motion.line
                    x1="-10%" y1="20%" x2="110%" y2="80%"
                    stroke="var(--kumite-aka)" strokeWidth="30"
                    animate={{ opacity: [0, 0.5, 0], x: [0, 100, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
                <motion.line
                    x1="110%" y1="10%" x2="-10%" y2="90%"
                    stroke="var(--kumite-ao)" strokeWidth="30"
                    animate={{ opacity: [0, 0.5, 0], x: [0, -100, 0] }}
                    transition={{ duration: 18, repeat: Infinity, delay: 5 }}
                />
            </svg>
        </div>
    );
};

export default KumiteBackground;
