import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BiosLoader = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const bootSequence = [
            "VARAD-OS BIOS v4.0.2 - RELEASE_2024",
            "CPU: NEURAL_QUANTUM_CORE_i9 @ 5.2GHz",
            "MEMORY TEST: 65536MB OK",
            "DETECTING PRIMARY DRIVES... [NVMe_SSD_01]",
            "INITIALIZING KERNEL MODULES...",
            "LOADING GUI_SUBSYSTEM... DONE",
            "SECURITY CHECK: BYPASS_ACTIVE",
            "ACCESS GRANTED."
        ];

        let delay = 0;
        bootSequence.forEach((line, index) => {
            const stepDelay = Math.random() * 80 + 40;
            delay += stepDelay;
            setTimeout(() => {
                setLines(prev => [...prev, line]);
                // Update progress based on index
                setProgress(Math.round(((index + 1) / bootSequence.length) * 100));

                if (index === bootSequence.length - 1) {
                    setTimeout(onComplete, 400);
                }
            }, delay);
        });
    }, [onComplete]);

    return (
        <div className="bios-loader">
            <div className="bios-top">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bios-text"
                    >
                        {`> ${line}`}
                    </motion.div>
                ))}
                <div className="cursor-blink">_</div>
            </div>

            <div className="bios-bottom">
                <div className="progress-label">BOOT_PROGRESS: {progress}%</div>
                <div className="progress-bar-container">
                    <motion.div
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default BiosLoader;
