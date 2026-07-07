'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio-data'

const Experience = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="py-24 section-gradient-border"
        >
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-light mb-12 gradient-text">Background</h2>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Work Experience */}
                        <div>
                            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
                                Experience
                            </h3>
                            <div className="space-y-4">
                                {portfolioData.experience.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="experience-card"
                                    >
                                        <p className="text-primary font-medium mb-1">{exp.role}</p>
                                        <p className="text-sm text-[#D4AF37] mb-2">
                                            {exp.company} • {exp.period}
                                        </p>
                                        <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.highlights.map((highlight, i) => (
                                                <span key={i} className="tag text-xs">{highlight}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div>
                            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-6">
                                Education
                            </h3>
                            <div className="space-y-6">
                                {portfolioData.education.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                        className="timeline-item"
                                    >
                                        <p className="text-primary font-medium mb-1">{edu.degree}</p>
                                        <p className="text-sm text-text-secondary">{edu.institution}</p>
                                        {edu.university && (
                                            <p className="text-sm text-text-secondary">{edu.university}</p>
                                        )}
                                        <p className="text-xs text-text-muted mt-1">{edu.location}</p>
                                        <p className="text-sm text-text-secondary mt-2 italic">{edu.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Experience
