'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio-data'

const WorkResults = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    return (
        <section
            ref={sectionRef}
            id="work-results"
            className="py-24 bg-bg-secondary"
        >
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-light gradient-text mb-4">Work Results</h2>
                    <p className="text-text-secondary">
                        Content transformed into scroll-stopping reels. From strategy brief to viral-ready video.
                    </p>
                </motion.div>

                {/* Reels Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {portfolioData.workResults.map((reel, index) => (
                        <motion.div
                            key={reel.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            {reel.reelUrl ? (
                                <a
                                    href={reel.reelUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group relative rounded-2xl overflow-hidden border border-border hover:border-border-light transition-all duration-400"
                                    style={{ aspectRatio: '9/16' }}
                                >
                                    {/* Background gradient */}
                                    <div
                                        className="absolute inset-0 transition-all duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${reel.color}15, ${reel.color}08, rgba(22,22,31,0.95))`,
                                        }}
                                    />

                                    {/* Decorative accent stripe */}
                                    <div
                                        className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ background: `linear-gradient(90deg, ${reel.color}, transparent)` }}
                                    />

                                    {/* Content overlay */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
                                        {/* Play button */}
                                        <motion.div
                                            className="w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                                            style={{
                                                background: `linear-gradient(135deg, ${reel.color}40, ${reel.color}20)`,
                                                border: `2px solid ${reel.color}50`,
                                            }}
                                        >
                                            <svg
                                                className="w-5 h-5 ml-0.5 transition-colors duration-300"
                                                style={{ color: reel.color }}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </motion.div>

                                        {/* Client name */}
                                        <p className="text-primary text-sm font-medium text-center leading-tight mb-1">
                                            {reel.client}
                                        </p>

                                        {/* Category */}
                                        <span
                                            className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full mt-1"
                                            style={{
                                                color: reel.color,
                                                background: `${reel.color}15`,
                                                border: `1px solid ${reel.color}25`,
                                            }}
                                        >
                                            {reel.category}
                                        </span>
                                    </div>

                                    {/* Bottom info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 z-10 bg-gradient-to-t from-[#0a0a0f]/90 to-transparent">
                                        <p className="text-[11px] text-text-secondary leading-snug text-center">
                                            {reel.description}
                                        </p>
                                        <p className="text-[10px] text-text-muted text-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Tap to watch ↗
                                        </p>
                                    </div>

                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            boxShadow: `inset 0 0 60px ${reel.color}10`,
                                        }}
                                    />
                                </a>
                            ) : (
                                <div
                                    className="relative rounded-2xl overflow-hidden border border-border bg-bg-card flex flex-col items-center justify-center p-4"
                                    style={{ aspectRatio: '9/16' }}
                                >
                                    <motion.div
                                        className="w-14 h-14 rounded-full border-2 border-[#D4AF37]/20 flex items-center justify-center mb-4"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <svg className="w-5 h-5 text-[#D4AF37]/40 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </motion.div>
                                    <p className="text-primary text-sm font-medium text-center mb-1">{reel.client}</p>
                                    <span className="tag text-[10px] mt-1">{reel.category}</span>
                                    <p className="text-[10px] text-text-muted text-center mt-3 uppercase tracking-wider">Coming Soon</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkResults
