import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollKatana = ({ theme }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const color = theme === 'aka' ? 'var(--kumite-aka)' : 'var(--kumite-ao)';

    return (
        <div style={{
            position: 'fixed',
            left: '30px',
            top: '50%',
            transform: 'translateY(-50%)',
            height: '60vh',
            width: '40px',
            zIndex: 8000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'none'
        }}>
            {/* Handle */}
            <div style={{ width: '8px', height: '60px', background: '#333', marginBottom: '10px', borderRadius: '4px', border: `1px solid ${color}`, boxShadow: `0 0 10px ${color}` }}>
                {/* Diamond Wrap Pattern */}
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent 40%, #000 40%, #000 60%, transparent 60%), linear-gradient(-45deg, transparent 40%, #000 40%, #000 60%, transparent 60%)', backgroundSize: '8px 8px' }} />
            </div>

            {/* Tsuba (Guard) */}
            <div style={{ width: '24px', height: '6px', background: color, marginBottom: '2px', borderRadius: '2px', boxShadow: `0 0 15px ${color}` }} />

            {/* Blade Container */}
            <div style={{
                flex: 1,
                width: '6px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '0 0 4px 4px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
                {/* Filling Energy */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        background: color,
                        boxShadow: `0 0 20px ${color}`,
                        originY: 0,
                        height: '100%',
                        scaleY: scaleX // Using scroll progress
                    }}
                />

                {/* Hamon Line / Edge Texture */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 70%, rgba(255,255,255,0.2) 100%)', zIndex: 2 }} />
            </div>

            {/* Kanji Label */}
            <div style={{ position: 'absolute', left: '-30px', top: '50%', transform: 'translateY(-50%)', writingMode: 'vertical-rl', color: color, opacity: 0.6, fontSize: '10px', fontFamily: 'JetBrains Mono' }}>
                進捗状況
            </div>
        </div>
    );
};

export default ScrollKatana;
