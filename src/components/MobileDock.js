import React from 'react';
import { motion } from 'framer-motion';
import { Home, Terminal, Database, Mail } from 'lucide-react';

const MobileDock = ({ activeSection }) => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const menuItems = [
        { icon: <Home size={20} />, id: 'section-hero', label: 'SYS' },
        { icon: <Terminal size={20} />, id: 'section-about', label: 'BIO' },
        { icon: <Database size={20} />, id: 'section-works', label: 'ARCH' },
        { icon: <Mail size={20} />, id: 'section-contact', label: 'LINK' },
    ];

    return (
        <div className="mobile-dock">
            <div className="dock-glass">
                {menuItems.map((item) => (
                    <motion.button
                        key={item.id}
                        className={`dock-item ${activeSection === item.id ? 'active' : ''}`}
                        whileTap={{ scale: 0.8 }}
                        onClick={() => scrollTo(item.id)}
                    >
                        {item.icon}
                        <span className="dock-label">{item.label}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default MobileDock;
