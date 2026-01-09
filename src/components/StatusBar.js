import React from 'react';
const StatusBar = () => {
    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="status-bar">
            <div className="status-left">
                <span className="status-os">CYBER-OS v2.1</span>
                <span className="status-sep">|</span>
                <span className="status-node">NODE: VARAD-MAIN</span>
            </div>
            <div className="status-right">
                <span className="status-item">99% [||||-]</span>
                <span className="status-item">📶</span>
                <span className="status-time">
                    {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
                </span>
            </div>
        </div>
    );
};

export default StatusBar;
