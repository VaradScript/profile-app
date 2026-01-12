import React from 'react';
import { motion } from 'framer-motion';

const ShadowSensei = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 2 }}
            style={{
                position: 'fixed',
                bottom: '-50px',
                right: '-50px',
                width: '600px',
                height: '800px',
                zIndex: -1,
                pointerEvents: 'none',
                filter: 'contrast(1.2) brightness(0.8) grayscale(1)',
                mixBlendMode: 'overlay' // Blends with the dark bg
            }}
        >
            {/* 
          Using a high-quality martial arts silhouette. 
          The 'ink' effect comes from the grayscale + contrast + blending.
       */}
            <motion.img
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1769&auto=format&fit=crop"
                alt="Shadow Sensei"
                style={{ width: '100%', height: '100%', objectFit: 'contain', maskImage: 'linear-gradient(to top, black 50%, transparent 100%)' }}
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
        </motion.div>
    );
};

export default ShadowSensei;
