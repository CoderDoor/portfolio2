'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio-data'

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-24 section-gradient-border"
        >
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-light mb-2 gradient-text">About</h2>
                    <p className="text-xl text-text-secondary mb-8">{portfolioData.about.headline}</p>

                    <div className="space-y-6 text-text-secondary leading-relaxed mb-12">
                        <p>{portfolioData.personal.summary}</p>
                        <p>{portfolioData.personal.elevatorPitch}</p>
                    </div>

                    {/* Experience Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {portfolioData.about.cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                className="glass-card group cursor-default"
                            >
                                <div className="text-3xl mb-4">{card.icon}</div>
                                <h3 className="text-lg font-medium text-primary mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {card.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Info */}
                    <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
                        <div>
                            <p className="text-sm text-text-muted mb-1">Location</p>
                            <p className="text-primary">{portfolioData.personal.location}</p>
                        </div>
                        <div>
                            <p className="text-sm text-text-muted mb-1">Focus</p>
                            <p className="text-primary">Copywriting & Growth</p>
                        </div>
                        <div>
                            <p className="text-sm text-text-muted mb-1">Languages</p>
                            <p className="text-primary">{portfolioData.languages.join(', ')}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
