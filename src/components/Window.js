import React from 'react';
import Draggable from 'react-draggable';
import '../App.css';

const Window = ({ title, icon, children, onClose, isOpen, zIndex, onFocus }) => {
    const nodeRef = React.useRef(null);

    if (!isOpen) return null;

    return (
        <Draggable handle=".title-bar" nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                className="xp-window"
                style={{ zIndex, top: '50px', left: '50px', minWidth: '300px', minHeight: '200px' }}
                onMouseDown={onFocus}
            >
                <div className="title-bar">
                    <div className="title-bar-text">
                        {icon && <img src={icon} alt="" style={{ width: '16px', height: '16px' }} />}
                        {title}
                    </div>
                    <div className="title-bar-controls">
                        <div className="control-btn">_</div>
                        <div className="control-btn">□</div>
                        <div className="control-btn close" onClick={(e) => { e.stopPropagation(); onClose(); }}>X</div>
                    </div>
                </div>
                <div className="window-content">
                    {children}
                </div>
            </div>
        </Draggable>
    );
};

export default Window;
