import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HUDOverlay = ({ theme }) => {
    // Current Time
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(t);
    }, []);

    const color = theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)';

    return (
        <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9000 }}>

            {/* Top Left: Frame */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}`, width: '40px', height: '40px', transition: 'border-color 0.5s' }} />
            <div style={{ position: 'absolute', top: '25px', left: '70px', fontFamily: 'JetBrains Mono', fontSize: '10px', color: color, letterSpacing: '2px', opacity: 0.8 }}>
                {`// SYS.MONITOR_ACTIVE`}
            </div>

            {/* Top Right: Time & Status */}
            <div style={{ position: 'absolute', top: '20px', right: '20px', borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}`, width: '40px', height: '40px', transition: 'border-color 0.5s' }} />
            <div style={{ position: 'absolute', top: '25px', right: '70px', textAlign: 'right', fontFamily: 'JetBrains Mono', fontSize: '10px', color: color, opacity: 0.8 }}>
                {time.toLocaleTimeString()} <br />
                <span style={{ fontWeight: 'bold' }}>OPERATIONAL</span>
            </div>

            {/* Bottom Left: Coordinates/Tech */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}`, width: '40px', height: '40px', transition: 'border-color 0.5s' }} />
            <div style={{ position: 'absolute', bottom: '25px', left: '70px', fontFamily: 'JetBrains Mono', fontSize: '9px', color: color, opacity: 0.6 }}>
                X: {Math.floor(Math.random() * 999)} Y: {Math.floor(Math.random() * 999)}<br />
                SECTOR: 07
            </div>

            {/* Bottom Right: Frame */}
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}`, width: '40px', height: '40px', transition: 'border-color 0.5s' }} />

            {/* Center Crosshair (Subtle) */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', width: '20px', height: '20px', transform: 'translate(-50%, -50%)', opacity: 0.1 }}>
                <div style={{ position: 'absolute', top: 0, left: '9px', width: '2px', height: '20px', background: color }} />
                <div style={{ position: 'absolute', top: '9px', left: 0, width: '20px', height: '2px', background: color }} />
            </div>

            {/* Vertical Data Lines - Right Side */}
            <div style={{ position: 'absolute', top: '20%', right: '30px', display: 'flex', flexDirection: 'column', gap: '5px', opacity: 0.3 }}>
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        style={{ width: '4px', height: '4px', background: color, borderRadius: '50%' }}
                    />
                ))}
            </div>

            {/* Vertical Data Lines - Left Side */}
            <div style={{ position: 'absolute', bottom: '20%', left: '30px', display: 'flex', flexDirection: 'column', gap: '15px', color: color, opacity: 0.2, fontSize: '9px', fontFamily: 'JetBrains Mono', writingMode: 'vertical-rl' }}>
                <span>MEMORY_ALLOC: 64TB</span>
                <span>NEURAL_LINK: OK</span>
            </div>

        </div>
    );
};

export default HUDOverlay;
