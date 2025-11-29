import React from 'react';
import '../App.css';

const StartMenu = ({ isOpen, onClose, onAppClick, onLogOff, onShutdown }) => {
    if (!isOpen) return null;

    return (
        <div className="start-menu" onClick={(e) => e.stopPropagation()}>
            <div className="start-menu-header">
                <div className="start-user-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#D3E5FA' }}>
                    <div style={{ fontSize: '24px', color: '#1C5CC6', fontWeight: 'bold' }}>V</div>
                </div>
                <div className="start-user-name">Varadaraj</div>
            </div>

            <div className="start-menu-body">
                <div className="start-menu-left">
                    <div className="start-menu-item bold" onClick={() => onAppClick('contact')}>
                        <img src="https://win98icons.alexmeub.com/icons/png/outlook_express-4.png" alt="Outlook" />
                        <div>E-mail</div>
                    </div>
                    <div className="start-menu-separator"></div>

                    <div className="start-menu-item" onClick={() => onAppClick('about')}>
                        <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" alt="About" />
                        <div>About Me</div>
                    </div>
                    <div className="start-menu-item" onClick={() => onAppClick('projects')}>
                        <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" alt="Projects" />
                        <div>My Projects</div>
                    </div>
                    <div className="start-menu-item" onClick={() => onAppClick('notepad')}>
                        <img src="https://win98icons.alexmeub.com/icons/png/notepad-4.png" alt="Notepad" />
                        <div>Notepad</div>
                    </div>

                    <div style={{ flex: 1 }}></div>

                    <div style={{ flex: 1 }}></div>

                    <div className="start-menu-separator"></div>
                    <div className="start-menu-item bold">
                        <div>All Programs</div>
                        <div style={{ marginLeft: 'auto' }}>▶</div>
                    </div>
                </div>

                <div className="start-menu-right">
                    <div className="start-menu-item-right bold">
                        <img src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png" alt="Docs" />
                        <div>My Documents</div>
                    </div>
                    <div className="start-menu-item-right bold">
                        <img src="https://win98icons.alexmeub.com/icons/png/computer_explorer-4.png" alt="Computer" />
                        <div>My Computer</div>
                    </div>
                </div>
            </div>

            <div className="start-menu-footer">
                <div className="footer-button" onClick={onLogOff}>
                    <img src="https://win98icons.alexmeub.com/icons/png/key_win-4.png" alt="Log Off" />
                    <div>Log Off</div>
                </div>
                <div className="footer-button" onClick={onShutdown}>
                    <img src="https://win98icons.alexmeub.com/icons/png/shut_down_cool-4.png" alt="Turn Off" />
                    <div>Turn Off Computer</div>
                </div>
            </div>
        </div>
    );
};

export default StartMenu;
