import React from 'react';
import { motion } from 'framer-motion';
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Code,
    Cpu,
    Globe,
    ExternalLink,
    Terminal,
    Database,
    Coffee
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const ModernLayout = () => {
    return (
        <motion.div
            className="grid-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Hero Section */}
            <motion.div
                className="bento-card"
                variants={itemVariants}
                style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
            >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #3b82f6, #a855f7)',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{ fontSize: '2rem', color: 'white' }}>👋</span>
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                        Hello, I'm <span className="text-gradient">Varad</span>
                    </h1>
                    <h2 style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                        Full Stack Developer & UI/UX Designer
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                        I build accessible, pixel-perfect, secure, and performant web applications.
                        Passionate about crafting meaningful digital experiences.
                    </p>
                    <div style={{ marginTop: 'auto', paddingTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                        <button style={{
                            background: 'var(--text-primary)',
                            color: 'var(--bg-primary)',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '999px',
                            fontWeight: 'bold',
                            border: 'none',
                            cursor: 'pointer'
                        }}>
                            Contact Me
                        </button>
                        <button style={{
                            background: 'transparent',
                            color: 'var(--text-primary)',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '999px',
                            border: '1px solid var(--border)',
                            cursor: 'pointer'
                        }}>
                            Download CV
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
                className="bento-card"
                variants={itemVariants}
                style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Cpu size={20} style={{ marginRight: '0.5rem', color: 'var(--accent)' }} />
                    <h3 style={{ fontWeight: 'bold' }}>Tech Stack</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {['React', 'Node.js', 'Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
                        <span key={tech} style={{
                            padding: '0.25rem 0.75rem',
                            background: 'var(--bg-tertiary)',
                            borderRadius: '4px',
                            fontSize: '0.875rem'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Socials */}
            <motion.div
                className="bento-card"
                variants={itemVariants}
                style={{ gridColumn: 'span 1', gridRow: 'span 1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', borderRadius: '0.5rem', background: 'var(--bg-tertiary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Github size={20} style={{ marginRight: '0.5rem' }} />
                            <span>GitHub</span>
                        </div>
                        <ExternalLink size={16} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', borderRadius: '0.5rem', background: 'var(--bg-tertiary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Linkedin size={20} style={{ marginRight: '0.5rem' }} />
                            <span>LinkedIn</span>
                        </div>
                        <ExternalLink size={16} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', borderRadius: '0.5rem', background: 'var(--bg-tertiary)' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Twitter size={20} style={{ marginRight: '0.5rem' }} />
                            <span>Twitter</span>
                        </div>
                        <ExternalLink size={16} />
                    </a>
                </div>
            </motion.div>

            {/* Map / Location / Availability */}
            <motion.div
                className="bento-card"
                variants={itemVariants}
                style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Globe size={20} style={{ marginRight: '0.5rem', color: '#10b981' }} />
                    <h3 style={{ fontWeight: 'bold' }}>Location</h3>
                </div>
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <div style={{
                        width: '100%',
                        height: '80px',
                        background: 'linear-gradient(135deg, #1f2937, #111827)',
                        borderRadius: '0.5rem',
                        marginBottom: '0.5rem',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Abstract Map Viz */}
                        <div style={{ position: 'absolute', width: '10px', height: '10px', background: '#3b82f6', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 10px #3b82f6' }}></div>
                    </div>
                    <p style={{ fontSize: '0.9rem' }}>Remote / Worldwide</p>
                    <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', fontSize: '0.8rem', color: '#10b981' }}>
                        <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%', marginRight: '0.5rem' }}></span>
                        Open to work
                    </div>
                </div>
            </motion.div>

            {/* Projects */}
            <motion.div
                className="bento-card"
                variants={itemVariants}
                style={{ gridColumn: 'span 2', gridRow: 'span 2' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Code size={20} style={{ marginRight: '0.5rem', color: 'var(--accent)' }} />
                        <h3 style={{ fontWeight: 'bold' }}>Selected Projects</h3>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>View All</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                    <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <h4 style={{ fontWeight: 'bold' }}>E-Commerce Dashboard</h4>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <Github size={16} />
                                <ExternalLink size={16} />
                            </div>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                            A modern dashboard with analytics, inventory management, and dark mode support.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '4px' }}>React</span>
                            <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', background: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa', borderRadius: '4px' }}>Chart.js</span>
                        </div>
                    </div>

                    <div style={{ background: 'var(--bg-tertiary)', padding: '1rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <h4 style={{ fontWeight: 'bold' }}>SaaS Landing Page</h4>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <Github size={16} />
                                <ExternalLink size={16} />
                            </div>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                            High-converting landing page with complex animations and 3D elements.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', background: 'rgba(168, 85, 247, 0.2)', color: '#a855f7', borderRadius: '4px' }}>Next.js</span>
                            <span style={{ fontSize: '0.75rem', padding: '0.1rem 0.5rem', background: 'rgba(168, 85, 247, 0.2)', color: '#a855f7', borderRadius: '4px' }}>Three.js</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Education / Philosophy */}
            <motion.div
                className="bento-card"
                variants={itemVariants}
                style={{ gridColumn: 'span 1', gridRow: 'span 1' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Terminal size={20} style={{ marginRight: '0.5rem', color: '#f59e0b' }} />
                    <h3 style={{ fontWeight: 'bold' }}>Stats</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Years Exp.</span>
                        <span style={{ fontWeight: 'bold' }}>3+</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Commits</span>
                        <span style={{ fontWeight: 'bold' }}>2,450+</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                        <span style={{ color: 'var(--text-secondary)' }}>Coffees</span>
                        <span style={{ fontWeight: 'bold' }}>∞</span>
                    </div>
                </div>
            </motion.div>

            {/* Contact/Extra */}
            <motion.div
                className="bento-card"
                variants={itemVariants}
                style={{ gridColumn: 'span 1', gridRow: 'span 1', background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
            >
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center' }}>
                    <Mail size={32} style={{ marginBottom: '0.5rem' }} />
                    <h3 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Let's Work Together</h3>
                    <p style={{ fontSize: '0.8rem', opacity: 0.9 }}>Available for freelance projects</p>
                </div>
            </motion.div>

        </motion.div>
    );
};

export default ModernLayout;
