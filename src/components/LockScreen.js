import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const LockScreen = ({ onUnlock }) => {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [0, 200], [1, 0]);
    const backgroundOpacity = useTransform(x, [0, 250], [1, 0]);

    const handleDragEnd = (_, info) => {
        if (info.offset.x > 200) {
            onUnlock();
        }
    };

    return (
        <motion.div className="lock-screen" style={{ opacity: backgroundOpacity }}>
            <div className="lock-screen-blur"></div>

            <div className="time-display">
                {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
            </div>
            <div className="date-display">
                {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>

            <div className="slider-container">
                <motion.div
                    className="slider-track shimmer"
                    style={{ opacity }}
                >
                    Slide to Unlock
                </motion.div>
                <motion.div
                    className="slider-handle"
                    drag="x"
                    dragConstraints={{ left: 0, right: 250 }}
                    dragElastic={0.1}
                    onDragEnd={handleDragEnd}
                    style={{ x }}
                >
                    ➜
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LockScreen;
