import React from 'react';
import { motion } from 'framer-motion';

const KatanaSlash = ({ theme }) => {
    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 11000 }}>
            {/* Ink Splash Layer */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1.5] }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    width: '100vw', height: '100vw',
                    background: `radial-gradient(circle, ${theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)'} 0%, transparent 60%)`,
                    transform: 'translate(-50%, -50%)',
                    filter: 'blur(100px)',
                    mixBlendMode: 'plus-lighter'
                }}
            />

            {/* Horizontal Slash */}
            <motion.div
                initial={{ scaleX: 0, opacity: 1 }}
                animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0], x: ['-20%', '0%', '0%', '20%'] }}
                transition={{ duration: 0.4, times: [0, 0.2, 0.8, 1], ease: "circIn" }}
                style={{
                    position: 'absolute',
                    top: '45%', left: '0',
                    width: '100%', height: '150px',
                    background: theme === 'aka' ? 'var(--kumite-aka)' : 'white',
                    transformOrigin: 'left',
                    boxShadow: `0 0 100px ${theme === 'aka' ? 'var(--kumite-aka)' : 'var(--dojo-glow)'}`,
                    clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)'
                }}
            />

            {/* Vertical Slash */}
            <motion.div
                initial={{ scaleY: 0, opacity: 1 }}
                animate={{ scaleY: [0, 1, 1, 0], opacity: [0, 1, 1, 0], y: ['-20%', '0%', '0%', '20%'] }}
                transition={{ duration: 0.4, delay: 0.1, times: [0, 0.2, 0.8, 1], ease: "circIn" }}
                style={{
                    position: 'absolute',
                    left: '50%', top: '0',
                    width: '200px', height: '100%',
                    background: theme === 'ao' ? 'var(--kumite-ao)' : 'white',
                    transformOrigin: 'top',
                    boxShadow: `0 0 100px ${theme === 'ao' ? 'var(--kumite-ao)' : 'var(--dojo-glow)'}`,
                    clipPath: 'polygon(40% 0, 100% 100%, 0 100%, 60% 0)'
                }}
            />

            {/* Ink Streak */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <motion.path
                    d="M-50,150 Q500,50 1050,150"
                    stroke="black"
                    strokeWidth="40"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: [0, 0.8, 0] }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ filter: 'blur(10px)' }}
                />
            </svg>
        </div>
    );
};

export default KatanaSlash;
