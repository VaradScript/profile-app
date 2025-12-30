import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Upstatement",
        role: "Engineer",
        range: "May 2018 - Present",
        bullets: [
            "Write modern, performant, maintainable code for a diverse array of client and internal projects",
            "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, React, Node.js, and Craft CMS",
            "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
        ]
    },
    {
        company: "Apple",
        role: "Product Engineer",
        range: "July - Dec 2017",
        bullets: [
            "Developed and maintained code for client-facing applications using modern technologies",
            "Collaborated with designers to implement pixel-perfect user interfaces",
            "Optimized application performance and improved user experience"
        ]
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <section id="experience" className="section-wrapper">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>
                        <span style={{ color: 'var(--accent)', fontFamily: 'Fira Code', fontSize: '20px', marginRight: '10px' }}>02.</span>
                        Where I’ve Worked
                    </h2>
                    <div style={{ height: '1px', width: '300px', backgroundColor: 'var(--bg-tertiary)', marginLeft: '20px' }}></div>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '200px', borderLeft: '2px solid var(--bg-tertiary)' }}>
                        {experiences.map((exp, idx) => (
                            <button
                                key={exp.company}
                                onClick={() => setActiveTab(idx)}
                                style={{
                                    padding: '0 20px',
                                    height: '42px',
                                    textAlign: 'left',
                                    backgroundColor: activeTab === idx ? 'var(--bg-secondary)' : 'transparent',
                                    border: 'none',
                                    borderLeft: activeTab === idx ? '2px solid var(--accent)' : '2px solid transparent',
                                    marginLeft: '-2px',
                                    color: activeTab === idx ? 'var(--accent)' : 'var(--text-secondary)',
                                    fontFamily: 'Fira Code',
                                    fontSize: '13px',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s'
                                }}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>
                    <div style={{ marginLeft: '40px', paddingTop: '10px' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 500, color: 'var(--text-primary)' }}>
                            {experiences[activeTab].role} <span style={{ color: 'var(--accent)' }}>@ {experiences[activeTab].company}</span>
                        </h3>
                        <p style={{ fontFamily: 'Fira Code', fontSize: '13px', color: 'var(--text-secondary)', marginTop: '5px' }}>
                            {experiences[activeTab].range}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                            {experiences[activeTab].bullets.map((bullet, idx) => (
                                <li key={idx} style={{ color: 'var(--text-secondary)', fontSize: '16px', marginBottom: '10px', display: 'flex' }}>
                                    <span style={{ color: 'var(--accent)', marginRight: '10px' }}>▹</span>
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
