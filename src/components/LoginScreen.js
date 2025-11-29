import React, { useState } from 'react';
import '../App.css';

const LoginScreen = ({ onLogin, onShutdown }) => {
    const [loggingIn, setLoggingIn] = useState(false);

    const handleLogin = () => {
        setLoggingIn(true);
        const audio = new Audio('https://www.myinstants.com/media/sounds/windows-xp-startup.mp3');
        audio.play().catch(e => console.log("Audio play failed due to browser policy:", e));

        setTimeout(() => {
            onLogin();
        }, 4000); // Extended delay to let sound play a bit
    };

    return (
        <div className="login-screen">
            <div className="login-left">
                <svg className="login-logo" width="250" height="80" viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
                    {/* Windows Flag - Wavy */}
                    <g transform="translate(10, 10)">
                        <path d="M 0 5 Q 20 0 40 5 L 40 35 Q 20 30 0 35 Z" fill="#E64425" />
                        <path d="M 45 5 Q 65 10 85 5 L 85 35 Q 65 40 45 35 Z" fill="#7FBA00" />
                        <path d="M 0 40 Q 20 35 40 40 L 40 70 Q 20 65 0 70 Z" fill="#00A4EF" />
                        <path d="M 45 40 Q 65 45 85 40 L 85 70 Q 65 75 45 70 Z" fill="#FFB900" />
                    </g>

                    {/* Text */}
                    <text x="110" y="35" fill="white" fontSize="18" fontFamily="Tahoma, sans-serif" fontStyle="italic">Microsoft</text>
                    <text x="110" y="75" fill="white" fontSize="42" fontFamily="Tahoma, sans-serif" fontWeight="bold">Windows</text>
                    <text x="295" y="55" fill="#FF6600" fontSize="24" fontFamily="Tahoma, sans-serif" fontWeight="bold" dy="-10">xp</text>
                </svg>
                <p style={{ fontSize: '18px', marginTop: '10px' }}>To begin, click your user name</p>
            </div>

            <div className="login-divider"></div>

            <div className="login-right">
                <div className="user-account" onClick={handleLogin}>
                    <div className="user-icon">
                        <img src="https://github.com/VaradScript.png" alt="User" />
                    </div>
                    <div className="user-info">
                        <div style={{ fontWeight: 'bold' }}>Varad</div>
                        <div style={{ fontSize: '14px', color: '#ccc' }}>
                            {loggingIn ? 'Loading your personal settings...' : 'Full Stack Developer'}
                        </div>
                    </div>
                </div>
            </div>

            <div className="login-footer">
                <div className="shutdown-btn" onClick={onShutdown} style={{ cursor: 'pointer' }}>
                    <img src="https://win98icons.alexmeub.com/icons/png/shut_down_cool-4.png" alt="Shutdown" style={{ width: '20px' }} />
                </div>
                <span onClick={onShutdown} style={{ cursor: 'pointer' }}>Turn off computer</span>
            </div>
        </div>
    );
};

export default LoginScreen;
