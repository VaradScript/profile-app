import React, { useEffect, useRef } from 'react';

const ParticleTrail = ({ theme }) => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };

            // Create new particles
            for (let i = 0; i < 2; i++) {
                particles.current.push({
                    x: e.clientX + (Math.random() - 0.5) * 10,
                    y: e.clientY + (Math.random() - 0.5) * 10,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 2,
                    speedY: (Math.random() - 0.5) * 2,
                    life: 1,
                    decay: Math.random() * 0.02 + 0.01
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Get theme color
            const color = theme === 'aka' ? '255, 60, 45' : '0, 170, 255';

            // Update and draw particles
            particles.current = particles.current.filter(particle => {
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                particle.life -= particle.decay;

                if (particle.life <= 0) return false;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${color}, ${particle.life})`;
                ctx.fill();

                // Draw glow
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 3
                );
                gradient.addColorStop(0, `rgba(${color}, ${particle.life * 0.5})`);
                gradient.addColorStop(1, `rgba(${color}, 0)`);
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            animationFrameId.current = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 9995,
                opacity: 0.6
            }}
        />
    );
};

export default ParticleTrail;
