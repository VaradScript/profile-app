import React, { useEffect } from 'react';
import '../App.css';

const BootScreen = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3000); // 3 seconds boot time
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="boot-screen">
            <svg className="xp-logo-large" width="350" height="100" viewBox="0 0 350 100" xmlns="http://www.w3.org/2000/svg">
                {/* Windows Flag - Wavy */}
                <g transform="translate(10, 10)">
                    <path d="M 0 5 Q 20 0 40 5 L 40 35 Q 20 30 0 35 Z" fill="#E64425" /> {/* Red */}
                    <path d="M 45 5 Q 65 10 85 5 L 85 35 Q 65 40 45 35 Z" fill="#7FBA00" /> {/* Green */}
                    <path d="M 0 40 Q 20 35 40 40 L 40 70 Q 20 65 0 70 Z" fill="#00A4EF" /> {/* Blue */}
                    <path d="M 45 40 Q 65 45 85 40 L 85 70 Q 65 75 45 70 Z" fill="#FFB900" /> {/* Yellow */}
                </g>

                {/* Text */}
                <text x="110" y="35" fill="white" fontSize="18" fontFamily="Tahoma, sans-serif" fontStyle="italic">Microsoft</text>
                <text x="110" y="75" fill="white" fontSize="42" fontFamily="Tahoma, sans-serif" fontWeight="bold">Windows</text>
                <text x="295" y="55" fill="#FF6600" fontSize="24" fontFamily="Tahoma, sans-serif" fontWeight="bold" dy="-10">xp</text>
            </svg>
            <div className="loading-bar-container">
                <div className="loading-bar"></div>
            </div>
            <p style={{ marginTop: '20px', fontSize: '12px', color: '#888' }}>Copyright © 1985-2001 Microsoft Corporation</p>
        </div>
    );
};

export default BootScreen;
