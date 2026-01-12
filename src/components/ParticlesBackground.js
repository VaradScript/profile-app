import React, { useEffect, useRef } from 'react';

// Sakura (Cherry Blossom) & Ink Drop Background
const ParticlesBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class SakuraParticle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height - canvas.height;
                // Falling down and slightly swaying
                this.vx = Math.random() * 1.5 - 0.75;
                this.vy = Math.random() * 1.5 + 1;
                this.size = Math.random() * 8 + 5;
                this.rotation = Math.random() * 360;
                this.rotationSpeed = Math.random() * 2 - 1;
                this.opacity = Math.random() * 0.5 + 0.3;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.rotation += this.rotationSpeed;

                // Reset when off bottom
                if (this.y > canvas.height + 20) {
                    this.y = -20;
                    this.x = Math.random() * canvas.width;
                }

                // Horizontal sway
                this.x += Math.sin(this.y * 0.01) * 0.5;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate((this.rotation * Math.PI) / 180);

                // Draw a petal shape
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.bezierCurveTo(this.size / 2, -this.size / 2, this.size, 0, 0, this.size);
                ctx.bezierCurveTo(-this.size, 0, -this.size / 2, -this.size / 2, 0, 0);

                // Color: Dark Red or subtle pink? Let's go RED/GREY to match theme
                // Either white/pink petals or Red "blood/ink" petals.
                // Martial arts -> maybe RED/WHITE.
                // Let's use a subtle off-white/pinkish for contrast to dark BG.
                ctx.fillStyle = `rgba(255, 235, 238, ${this.opacity})`;
                ctx.fill();
                ctx.restore();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 40; i++) {
                particles.push(new SakuraParticle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
                // Optional: linear gradient for slight "Fog"
                background: 'linear-gradient(to bottom, #121212 0%, #000000 100%)'
            }}
        />
    );
};

export default ParticlesBackground;
