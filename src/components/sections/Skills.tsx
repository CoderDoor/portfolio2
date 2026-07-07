'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio-data'

const Skills = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const categories = Object.keys(portfolioData.skills) as Array<keyof typeof portfolioData.skills>

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="py-24 bg-bg-secondary"
        >
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-light mb-2 gradient-text">Core Competencies</h2>
                    <p className="text-text-secondary mb-12">Where Strategy Meets Execution</p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {categories.map((category, categoryIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            >
                                <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-4">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {portfolioData.skills[category].map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            className="tag"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: categoryIndex * 0.1 + i * 0.05 }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills
