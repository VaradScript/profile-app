import React, { useState } from 'react';

const LazyImage = ({ src, alt, style, className }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div style={{ position: 'relative', ...style }}>
            {!loaded && (
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.3)',
                    fontSize: '0.8rem',
                    fontFamily: 'JetBrains Mono'
                }}>
                    LOADING...
                </div>
            )}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                style={{
                    ...style,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.5s ease'
                }}
                className={className}
            />
        </div>
    );
};

export default LazyImage;
