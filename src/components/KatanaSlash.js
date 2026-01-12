import React from 'react';
import { motion } from 'framer-motion';

const KatanaSlash = () => {
    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
            {/* AKA SLASH (Red) - Top Right to Bottom Left */}
            <motion.div
                style={{ position: 'absolute', inset: 0 }}
                initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 0, 100% 0)' }}
                animate={{ clipPath: 'polygon(150% -50%, -50% 150%, -60% 140%, 140% -60%)' }}
                transition={{ duration: 0.4, ease: "circOut" }}
            >
                <div style={{ width: '100%', height: '100%', background: 'var(--kumite-aka)' }}></div>
            </motion.div>

            {/* AO SLASH (Blue) - Bottom Right to Top Left (Counter Cut) */}
            <motion.div
                style={{ position: 'absolute', inset: 0 }}
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 0, 0 0)' }}
                animate={{ clipPath: 'polygon(-50% -50%, 150% 150%, 160% 140%, -40% -60%)' }}
                transition={{ duration: 0.4, delay: 0.2, ease: "circOut" }}
            >
                <div style={{ width: '100%', height: '100%', background: 'var(--kumite-ao)' }}></div>
            </motion.div>

            {/* Final Flash */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ position: 'absolute', inset: 0, background: 'white' }}
            />

            {/* SVG Lines for lingering visual */}
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
                <motion.line
                    x1="100%" y1="0%" x2="0%" y2="100%"
                    stroke="var(--kumite-aka)" strokeWidth="2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <motion.line
                    x1="0%" y1="0%" x2="100%" y2="100%"
                    stroke="var(--kumite-ao)" strokeWidth="2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                />
            </svg>
        </div>
    );
};

export default KatanaSlash;
