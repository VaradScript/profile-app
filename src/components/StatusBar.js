import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StatusBar = () => {
    const [time, setTime] = useState(new Date());
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
    };

    return (
        <div className="notch-container">
            <motion.div
                className="dynamic-notch"
                onMouseEnter={() => setIsExpanded(true)}
                onMouseLeave={() => setIsExpanded(false)}
                initial={{ width: 120, height: 35, borderRadius: 20 }}
                animate={{
                    width: isExpanded ? 300 : 120,
                    height: isExpanded ? 110 : 35,
                    borderRadius: 20
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <div className="notch-content">
                    <AnimatePresence mode="wait">
                        {!isExpanded ? (
                            <motion.div
                                key="collapsed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="notch-collapsed"
                            >
                                <span className="notch-time">{formatTime(time)}</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="expanded"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="notch-expanded"
                            >
                                <div className="notch-row-top">
                                    <span className="notch-label">DOJO-OS</span>
                                    <span className="notch-time-lg">{formatTime(time)}</span>
                                </div>
                                <div className="notch-player">
                                    <div className="notch-icon">⛩️</div>
                                    <div className="notch-track-info">
                                        <span className="track-title">Zen Mode</span>
                                        <span className="track-artist">Focus</span>
                                    </div>
                                    <div className="notch-visualizer">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <motion.div
                                                key={i}
                                                className="bar"
                                                animate={{ height: [5, 15, 5] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 0.5 + Math.random() * 0.5,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default StatusBar;
