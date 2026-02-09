import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';

const Terminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'system', text: 'VaradScript Terminal v4.2.0' },
        { type: 'system', text: 'Type "help" for available commands.' },
        { type: 'system', text: '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━' }
    ]);
    const inputRef = useRef(null);
    const historyRef = useRef(null);

    const commands = {
        help: {
            output: [
                'Available commands:',
                '  about      - Learn about Varad',
                '  skills     - View technical skills',
                '  projects   - List all projects',
                '  contact    - Get contact information',
                '  social     - Social media links',
                '  secret     - ???',
                '  clear      - Clear terminal',
                '  exit       - Close terminal'
            ]
        },
        about: {
            output: [
                'VARADARAJ D GANIGA',
                '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                'Full Stack Developer & Digital Architect',
                '',
                'I design digital systems with lethal precision.',
                'Specializing in high-performance architectures',
                'and immersive interfaces.',
                '',
                'Philosophy: Every line of code is a strategic strike.'
            ]
        },
        skills: {
            output: [
                'TECHNICAL ARSENAL',
                '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                '⚡ Frontend:  React, Next.js, Three.js, Framer Motion',
                '⚡ Backend:   Node.js, Express, Python (Django/Flask)',
                '⚡ Database:  PostgreSQL, MongoDB, Redis',
                '⚡ DevOps:    Docker, AWS, CI/CD',
                '⚡ Languages: JavaScript, TypeScript, Python, Java'
            ]
        },
        projects: {
            output: [
                'PORTFOLIO ARCHIVE',
                '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                '1. HadesConnect     - Remote system control via Discord',
                '2. Emotion-Detection - Real-time facial emotion recognition',
                '3. FaceXprso        - AI-driven expression analysis',
                '4. VaradScript.io   - This portfolio (meta!)',
                '',
                'Scroll down to see detailed project cards.'
            ]
        },
        contact: {
            output: [
                'CONTACT PROTOCOL',
                '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                '📧 Email:    contact@varadscript.com',
                '🔗 GitHub:   github.com/VaradScript',
                '💼 LinkedIn: linkedin.com/in/varadaraj-d-ganiga-5b50a1246',
                '',
                'Terminal is always open for collaboration.'
            ]
        },
        social: {
            output: [
                'SOCIAL UPLINKS',
                '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                '→ GitHub:   https://github.com/VaradScript',
                '→ LinkedIn: https://linkedin.com/in/varadaraj-d-ganiga-5b50a1246',
                '',
                'Connect for strategic collaborations.'
            ]
        },
        secret: {
            output: [
                '🎌 SECRET UNLOCKED 🎌',
                '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
                '',
                '    "Fall seven times, stand up eight."',
                '              - Nanakorobi Yaoki',
                '',
                'Achievement: Terminal Master 🏆',
                'You found the hidden command!',
                '',
                'Fun fact: This entire portfolio was built',
                'with 0 external UI libraries (except Framer Motion).',
                'Every pixel, every animation - handcrafted.'
            ]
        },
        clear: {
            action: 'clear'
        },
        exit: {
            action: 'close'
        }
    };

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === '`' || e.key === '~') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (historyRef.current) {
            historyRef.current.scrollTop = historyRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        setHistory(prev => [...prev, { type: 'input', text: `$ ${cmd}` }]);

        if (!trimmedCmd) return;

        if (commands[trimmedCmd]) {
            const command = commands[trimmedCmd];

            if (command.action === 'clear') {
                setHistory([]);
                return;
            }

            if (command.action === 'close') {
                setIsOpen(false);
                return;
            }

            if (command.output) {
                command.output.forEach(line => {
                    setHistory(prev => [...prev, { type: 'output', text: line }]);
                });
            }
        } else {
            setHistory(prev => [...prev, {
                type: 'error',
                text: `Command not found: ${trimmedCmd}. Type "help" for available commands.`
            }]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <>
            {/* Terminal Toggle Button */}
            {!isOpen && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, boxShadow: '0 0 20px var(--dojo-glow)' }}
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '40px',
                        left: '40px',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.8)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        color: 'var(--dojo-accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10002,
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s'
                    }}
                    title="Open Terminal (Press ~ key)"
                >
                    <TerminalIcon size={20} />
                </motion.button>
            )}

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        style={{
                            position: 'fixed',
                            bottom: '20px',
                            left: '20px',
                            right: '20px',
                            maxWidth: '800px',
                            height: '500px',
                            background: '#0a0a0a',
                            border: '1px solid var(--dojo-accent)',
                            borderRadius: '8px',
                            zIndex: 10003,
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px var(--dojo-glow)',
                            fontFamily: 'JetBrains Mono, monospace'
                        }}
                    >
                        {/* Terminal Header */}
                        <div style={{
                            padding: '12px 20px',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: 'rgba(0,0,0,0.5)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <TerminalIcon size={16} color="var(--dojo-accent)" />
                                <span style={{ color: 'var(--dojo-accent)', fontSize: '0.85rem', fontWeight: 'bold' }}>
                                    VARAD_TERMINAL
                                </span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: 'rgba(255,255,255,0.5)',
                                    cursor: 'pointer',
                                    padding: '4px'
                                }}
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Terminal Output */}
                        <div
                            ref={historyRef}
                            style={{
                                flex: 1,
                                padding: '20px',
                                overflowY: 'auto',
                                fontSize: '0.85rem',
                                lineHeight: '1.6'
                            }}
                        >
                            {history.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        color: item.type === 'input' ? 'var(--dojo-accent)' :
                                            item.type === 'error' ? '#ff4444' :
                                                item.type === 'system' ? '#888' :
                                                    'rgba(255,255,255,0.8)',
                                        marginBottom: '4px',
                                        fontWeight: item.type === 'input' ? 'bold' : 'normal'
                                    }}
                                >
                                    {item.text}
                                </div>
                            ))}
                        </div>

                        {/* Terminal Input */}
                        <form onSubmit={handleSubmit} style={{
                            padding: '15px 20px',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            gap: '10px',
                            background: 'rgba(0,0,0,0.5)'
                        }}>
                            <span style={{ color: 'var(--dojo-accent)', fontWeight: 'bold' }}>$</span>
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                style={{
                                    flex: 1,
                                    background: 'transparent',
                                    border: 'none',
                                    outline: 'none',
                                    color: 'white',
                                    fontSize: '0.85rem',
                                    fontFamily: 'JetBrains Mono, monospace'
                                }}
                                placeholder="Type a command..."
                            />
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Terminal;
