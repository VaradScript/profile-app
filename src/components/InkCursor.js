import React, { useEffect, useRef } from 'react';

const InkCursor = ({ theme }) => {
    const canvasRef = useRef(null);
    const pointsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrame;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const handleMove = (e) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener('mousemove', handleMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Add new point
            pointsRef.current.push({
                x: mouseRef.current.x,
                y: mouseRef.current.y,
                age: 0
            });

            // Draw trail
            ctx.beginPath();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            const color = theme === 'aka' ? '231, 76, 60' : '52, 152, 219'; // RGB values

            for (let i = 0; i < pointsRef.current.length; i++) {
                const p = pointsRef.current[i];
                const nextP = pointsRef.current[i + 1];

                p.age++;

                if (p.age > 40) {
                    pointsRef.current.splice(i, 1);
                    i--;
                    continue;
                }

                if (nextP) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(nextP.x, nextP.y);

                    const opacity = 1 - p.age / 40;
                    const width = (1 - p.age / 40) * 8; // Tapering width

                    ctx.strokeStyle = `rgba(${color}, ${opacity})`;
                    ctx.lineWidth = width;
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = `rgb(${color})`;
                    ctx.stroke();
                }
            }

            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMove);
            cancelAnimationFrame(animationFrame);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 20000
            }}
        />
    );
};

export default InkCursor;
