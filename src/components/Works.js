import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Halcyon Theme",
        desc: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.",
        tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/free-bootstrap-admin-dashboard-templates.jpg"
    },
    {
        title: "Spotify Profile",
        desc: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
        tech: ["React", "Styled Components", "Spotify API"],
        image: "https://s3-alpha.figma.com/hub/file/1166690750/8d2d9b68-6d55-4422-b5e1-7d14357c9117-cover.png"
    }
];

const Works = () => {
    return (
        <section id="projects" className="section-wrapper">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                        <span style={{ color: 'var(--accent)', fontFamily: 'Fira Code', fontSize: '20px', marginRight: '10px' }}>03.</span>
                        Some Things I’ve Built
                    </h2>
                    <div style={{ height: '1px', width: '300px', backgroundColor: 'var(--bg-tertiary)', marginLeft: '20px' }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center' }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            {/* Image */}
                            <div style={{
                                gridColumn: idx % 2 === 0 ? '1 / 8' : '6 / -1',
                                gridRow: '1',
                                position: 'relative',
                                zIndex: 1,
                                borderRadius: '4px',
                                overflow: 'hidden',
                                backgroundColor: 'var(--accent)',
                            }}>
                                <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.3, filter: 'grayscale(100%)' }} />
                            </div>
                            {/* Content */}
                            <div style={{
                                gridColumn: idx % 2 === 0 ? '7 / -1' : '1 / 7',
                                gridRow: '1',
                                zIndex: 2,
                                textAlign: idx % 2 === 0 ? 'right' : 'left'
                            }}>
                                <p style={{ fontFamily: 'Fira Code', color: 'var(--accent)', fontSize: '13px', margin: '10px 0' }}>Featured Project</p>
                                <h3 style={{ fontSize: '28px', color: 'var(--text-primary)', marginBottom: '20px' }}>{project.title}</h3>
                                <div style={{
                                    backgroundColor: 'var(--bg-secondary)',
                                    padding: '25px',
                                    borderRadius: '4px',
                                    color: 'var(--text-secondary)',
                                    fontSize: '18px',
                                    boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)'
                                }}>
                                    {project.desc}
                                </div>
                                <ul style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: idx % 2 === 0 ? 'flex-end' : 'flex-start',
                                    listStyle: 'none',
                                    padding: 0,
                                    marginTop: '25px',
                                    gap: '20px'
                                }}>
                                    {project.tech.map(t => (
                                        <li key={t} style={{ color: 'var(--text-secondary)', fontSize: '13px', fontFamily: 'Fira Code' }}>{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Works;
