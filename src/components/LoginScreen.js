import React from 'react';
import { motion } from 'framer-motion';

const LoginScreen = ({ onEnter }) => {
    return (
        <motion.div
            className="login-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="login-box">
                <motion.div
                    className="avatar-glow"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <img src="https://github.com/VaradScript.png" alt="Admin" className="admin-avatar" />
                </motion.div>

                <motion.div
                    className="admin-info"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <h1 className="admin-name">VARAD</h1>
                    <div className="admin-status">
                        <span className="status-dot"></span>
                        SYSTEM ADMINISTRATOR
                    </div>
                </motion.div>

                <motion.button
                    className="enter-btn"
                    whileHover={{ scale: 1.05, boxShadow: '0 0 20px var(--dojo-accent)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onEnter}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    ENTER_SYSTEM →
                </motion.button>
            </div>

            <div className="login-footer-text">
                SECURE GATEWAY V2.0 // AUTH_TOKEN_READY
            </div>
        </motion.div>
    );
};

export default LoginScreen;
