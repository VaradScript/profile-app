import React, { useState, useEffect } from 'react';
import '../App.css';

const Taskbar = ({ windows, activeWindowId, onWindowClick, onStartClick }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="taskbar">
            <div className="start-button" onClick={onStartClick}>
                <svg width="90" height="30" viewBox="0 0 90 30" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '0 10px 10px 0' }}>
                    {/* Start button background */}
                    <defs>
                        <linearGradient id="startBg" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#5EEA5C', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#2DB92A', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <rect width="90" height="30" fill="url(#startBg)" rx="0 10 10 0" />
                    <rect x="0" y="0" width="90" height="1" fill="rgba(255,255,255,0.5)" />
                    <rect x="0" y="29" width="90" height="1" fill="rgba(0,0,0,0.3)" />

                    {/* Windows flag icon */}
                    <path d="M 8 8 L 14 7 L 14 13 L 8 14 Z" fill="#FF0000" />
                    <path d="M 15 7 L 21 6 L 21 13 L 15 13 Z" fill="#00FF00" />
                    <path d="M 8 15 L 14 14 L 14 20 L 8 21 Z" fill="#0000FF" />
                    <path d="M 15 14 L 21 13 L 21 20 L 15 20 Z" fill="#FFFF00" />

                    {/* "start" text */}
                    <text x="28" y="20" fill="white" fontSize="14" fontFamily="Tahoma, sans-serif" fontWeight="bold" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>start</text>
                </svg>
            </div>
            <div className="taskbar-items">
                {windows.map((win) => (
                    <div
                        key={win.id}
                        className={`taskbar-item ${activeWindowId === win.id ? 'active' : ''}`}
                        onClick={() => onWindowClick(win.id)}
                    >
                        {win.icon && <img src={win.icon} alt="" style={{ width: '16px', height: '16px', marginRight: '5px' }} />}
                        {win.title}
                    </div>
                ))}
            </div>
            <div className="tray">
                {formatTime(time)}
            </div>
        </div>
    );
};

export default Taskbar;
