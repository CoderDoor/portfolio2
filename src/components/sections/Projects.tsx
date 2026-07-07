'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio-data'

const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
    const [activeVertical, setActiveVertical] = useState(0)

    const verticals = portfolioData.portfolioVerticals

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="py-24 section-gradient-border"
        >
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-light gradient-text mb-4">Selected Work</h2>
                    <p className="text-text-secondary">Portfolio verticals showcasing my expertise across industries.</p>
                </motion.div>

                {/* Vertical Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap gap-3 mb-10"
                >
                    {verticals.map((vertical, index) => (
                        <button
                            key={vertical.id}
                            onClick={() => setActiveVertical(index)}
                            className={`vertical-tab ${activeVertical === index ? 'active' : ''}`}
                        >
                            <span className="mr-2">{vertical.icon}</span>
                            {vertical.title.split(',')[0]}
                        </button>
                    ))}
                </motion.div>

                {/* Active Vertical Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeVertical}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Vertical Header */}
                        <div className="mb-8">
                            <h3 className="text-xl font-medium text-primary mb-2">
                                {verticals[activeVertical].title}
                            </h3>
                            <p className="text-text-secondary text-sm italic">
                                {verticals[activeVertical].subtitle}
                            </p>
                        </div>

                        {/* Client List */}
                        <div className="glass-card">
                            {verticals[activeVertical].clients.map((client, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="client-item group"
                                >
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#D4AF37] mt-1 text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                                            ▸
                                        </span>
                                        <div>
                                            <h4 className="text-primary font-medium mb-1 group-hover:text-[#D4AF37] transition-colors">
                                                {client.name}
                                            </h4>
                                            <p className="text-sm text-text-secondary leading-relaxed">
                                                {client.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default Projects
