import React, { useState } from 'react';
import Taskbar from './Taskbar';
import Window from './Window';
import StartMenu from './StartMenu';
import '../App.css';

const Desktop = ({ onLogOff, onShutdown }) => {
    const [windows, setWindows] = useState([
        {
            id: 'about', title: 'About Me', icon: 'https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png', isOpen: false, zIndex: 1, content: (
                <div>
                    <h3>Varadaraj D Ganiga</h3>
                    <p><strong>Full Stack Developer & AI Enthusiast</strong></p>
                    <hr />
                    <p>Hello! I'm Varadaraj D Ganiga, currently pursuing my Master of Computer Applications (MCA) at NMAM Institute of Technology, Nitte.</p>
                    <p>I hold a Bachelor's degree in Computer Applications (BCA) from Mangalore University.</p>
                    <p>I'm passionate about building innovative solutions that solve real-world problems. My expertise lies in full-stack web development, artificial intelligence, and cybersecurity basics.</p>
                    <br />
                    <h4>Education & Experience</h4>
                    <ul>
                        <li><strong>MCA</strong> - NMAM Institute of Technology, Nitte</li>
                        <li><strong>BCA</strong> - Mangalore University</li>
                        <li><strong>Web Dev Intern</strong> - Teachnook</li>
                    </ul>
                </div>
            )
        },
        {
            id: 'projects', title: 'My Projects', icon: 'https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png', isOpen: false, zIndex: 0, content: (
                <div>
                    <h3>Featured Projects</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                            <strong>FaceXprso</strong><br />
                            <span>A real-time facial expression recognition system using AI, designed for human-computer interaction.</span><br />
                            <a href="https://github.com/VaradScript/FaceXprso" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        <div>
                            <strong>Weather Web</strong><br />
                            <span>A responsive web application that fetches and displays weather data for the next 7 days using the OpenWeather API.</span><br />
                            <a href="https://github.com/VaradScript/WeatherWeb" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                        <div>
                            <strong>Hospital Management System</strong><br />
                            <span>A full-stack web application for managing patient records, doctor appointments, and medicine inventory.</span><br />
                            <a href="https://github.com/VaradScript/HMS" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 'contact', title: 'Contact Me', icon: 'https://win98icons.alexmeub.com/icons/png/outlook_express-4.png', isOpen: false, zIndex: 0, content: (
                <div>
                    <h3>Get in Touch</h3>
                    <p><strong>Email:</strong> <a href="mailto:ganigadvarada007@gmail.com">ganigadvarada007@gmail.com</a></p>
                    <p><strong>Location:</strong> Karnataka, India</p>
                    <hr />
                    <p><strong>Socials:</strong></p>
                    <ul>
                        <li><a href="https://github.com/VaradScript" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/varadaraj-ganiga" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            )
        },
        {
            id: 'notepad', title: 'Notepad', icon: 'https://win98icons.alexmeub.com/icons/png/notepad-4.png', isOpen: false, zIndex: 0, content: (
                <textarea style={{ width: '100%', height: '100%', border: 'none', resize: 'none', outline: 'none', fontFamily: 'monospace', fontSize: '14px' }} placeholder="Type here..."></textarea>
            )
        }
    ]);

    const [activeWindowId, setActiveWindowId] = useState(null);
    const [nextZIndex, setNextZIndex] = useState(10);
    const [isStartOpen, setIsStartOpen] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleWindowClick = (id) => {
        setWindows(windows.map(w => {
            if (w.id === id) {
                return { ...w, isOpen: !w.isOpen, zIndex: nextZIndex };
            }
            return w;
        }));
        if (!windows.find(w => w.id === id).isOpen) {
            setActiveWindowId(id);
            setNextZIndex(nextZIndex + 1);
        } else {
            setActiveWindowId(null);
        }
    };

    const openWindow = (id) => {
        setWindows(windows.map(w => {
            if (w.id === id) {
                return { ...w, isOpen: true, zIndex: nextZIndex };
            }
            return w;
        }));
        setActiveWindowId(id);
        setNextZIndex(nextZIndex + 1);
    };

    const closeWindow = (id) => {
        setWindows(windows.map(w => {
            if (w.id === id) {
                return { ...w, isOpen: false };
            }
            return w;
        }));
        if (activeWindowId === id) setActiveWindowId(null);
    };

    const focusWindow = (id) => {
        setWindows(windows.map(w => {
            if (w.id === id) {
                return { ...w, zIndex: nextZIndex };
            }
            return w;
        }));
        setActiveWindowId(id);
        setNextZIndex(nextZIndex + 1);
    };

    const toggleStart = () => {
        setIsStartOpen(!isStartOpen);
    };

    return (
        <div className="desktop" onClick={() => isStartOpen && setIsStartOpen(false)}>
            <div className="desktop-icons">
                {windows.map(win => (
                    <div key={win.id} className="icon" onDoubleClick={() => openWindow(win.id)}>
                        <img src={win.icon} alt={win.title} />
                        <span>{win.title}</span>
                    </div>
                ))}
            </div>

            {windows.map(win => (
                <Window
                    key={win.id}
                    title={win.title}
                    icon={win.icon}
                    isOpen={win.isOpen}
                    zIndex={win.zIndex}
                    onClose={() => closeWindow(win.id)}
                    onFocus={() => focusWindow(win.id)}
                >
                    {win.content}
                </Window>
            ))}

            <StartMenu
                isOpen={isStartOpen}
                onClose={() => setIsStartOpen(false)}
                onAppClick={(appId) => {
                    openWindow(appId);
                    setIsStartOpen(false);
                }}
                onLogOff={onLogOff}
                onShutdown={onShutdown}
            />

            <Taskbar
                windows={windows.filter(w => w.isOpen)}
                activeWindowId={activeWindowId}
                onWindowClick={focusWindow}
                onStartClick={(e) => { e.stopPropagation(); toggleStart(); }}
            />

            {showWelcome && (
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '10px',
                    background: '#FFFFE1',
                    border: '1px solid black',
                    padding: '10px',
                    borderRadius: '10px',
                    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
                    zIndex: 10000,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    maxWidth: '250px',
                    animation: 'fadeIn 0.5s'
                }}>
                    <div style={{
                        position: 'absolute',
                        bottom: '-10px',
                        right: '20px',
                        borderWidth: '10px 10px 0',
                        borderStyle: 'solid',
                        borderColor: '#FFFFE1 transparent transparent transparent'
                    }}></div>
                    <div>
                        <strong style={{ fontSize: '14px', color: '#333' }}>Welcome to my portfolio!</strong>
                        <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>
                            I'm Varadaraj. Feel free to explore my projects and contact me.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Desktop;
