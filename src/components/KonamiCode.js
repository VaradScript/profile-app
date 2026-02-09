import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KonamiCode = () => {
    const [activated, setActivated] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiIndex = 0;

        const handleKeyDown = (e) => {
            if (e.key === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    setActivated(true);
                    setShowModal(true);
                    konamiIndex = 0;

                    // Apply matrix effect
                    document.body.classList.add('matrix-mode');

                    // Remove after 10 seconds
                    setTimeout(() => {
                        document.body.classList.remove('matrix-mode');
                    }, 10000);
                }
            } else {
                konamiIndex = 0;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            {showModal && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.9)',
                            backdropFilter: 'blur(10px)',
                            zIndex: 20000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.5, rotateY: -180 }}
                            animate={{ scale: 1, rotateY: 0 }}
                            exit={{ scale: 0.5, rotateY: 180 }}
                            transition={{ type: 'spring', duration: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: '#000',
                                border: '2px solid #0f0',
                                padding: '60px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                maxWidth: '600px',
                                boxShadow: '0 0 50px rgba(0,255,0,0.5), inset 0 0 50px rgba(0,255,0,0.1)'
                            }}
                        >
                            <motion.div
                                animate={{
                                    textShadow: [
                                        '0 0 10px #0f0',
                                        '0 0 30px #0f0',
                                        '0 0 10px #0f0'
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    fontSize: '4rem',
                                    marginBottom: '20px'
                                }}
                            >
                                🎮
                            </motion.div>

                            <h2 style={{
                                color: '#0f0',
                                fontFamily: 'JetBrains Mono',
                                fontSize: '2rem',
                                marginBottom: '20px',
                                textShadow: '0 0 10px #0f0'
                            }}>
                                KONAMI CODE ACTIVATED!
                            </h2>

                            <p style={{
                                color: '#0f0',
                                fontFamily: 'JetBrains Mono',
                                fontSize: '1rem',
                                lineHeight: '1.8',
                                marginBottom: '30px',
                                opacity: 0.8
                            }}>
                                🏆 Achievement Unlocked: "Old School Gamer"<br />
                                <br />
                                You've discovered the secret Konami Code!<br />
                                Matrix Mode activated for 10 seconds.<br />
                                <br />
                                ↑↑↓↓←→←→BA
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: '0 0 20px #0f0' }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowModal(false)}
                                style={{
                                    background: 'transparent',
                                    border: '2px solid #0f0',
                                    color: '#0f0',
                                    padding: '15px 40px',
                                    fontSize: '1rem',
                                    fontFamily: 'JetBrains Mono',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    borderRadius: '4px'
                                }}
                            >
                                CLOSE
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default KonamiCode;
