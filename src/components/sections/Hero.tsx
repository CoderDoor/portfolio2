'use client'

import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { portfolioData } from '@/data/portfolio-data'

const Hero = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 })
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 })

    const moveX = useTransform(smoothX, [-500, 500], [-15, 15])
    const moveY = useTransform(smoothY, [-500, 500], [-15, 15])
    const moveX2 = useTransform(smoothX, [-500, 500], [10, -10])
    const moveY2 = useTransform(smoothY, [-500, 500], [10, -10])
    const moveX3 = useTransform(smoothX, [-500, 500], [-8, 8])
    const moveY3 = useTransform(smoothY, [-500, 500], [12, -12])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            mouseX.set(clientX - innerWidth / 2)
            mouseY.set(clientY - innerHeight / 2)
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center overflow-hidden relative"
        >
            {/* Ambient background glow */}
            <div className="ambient-glow" />

            <div className="max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Left - Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.p
                        className="text-text-secondary text-lg mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        👋 Hey, I&apos;m
                    </motion.p>

                    <motion.h1
                        className="text-5xl lg:text-7xl font-bold gradient-text mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {portfolioData.personal.name}
                    </motion.h1>

                    <motion.h2
                        className="text-xl lg:text-2xl font-light text-primary mb-6 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {portfolioData.personal.headline}
                    </motion.h2>

                    <motion.p
                        className="text-text-secondary leading-relaxed mb-8 max-w-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {portfolioData.personal.subHeadline}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-3 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        {portfolioData.personal.roles.slice(0, 3).map((role, i) => (
                            <span key={i} className="tag">{role}</span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="btn btn-primary"
                        >
                            View My Work →
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn btn-secondary"
                        >
                            Let&apos;s Talk
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right - Abstract Decorative Parallax Orbs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="hidden lg:flex items-center justify-center relative h-[500px]"
                >
                    {/* Large gold orb */}
                    <motion.div
                        className="absolute w-72 h-72 rounded-full"
                        style={{
                            x: moveX,
                            y: moveY,
                            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
                        }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Medium amber orb */}
                    <motion.div
                        className="absolute w-56 h-56 rounded-full top-10 right-10"
                        style={{
                            x: moveX2,
                            y: moveY2,
                            background: 'radial-gradient(circle, rgba(232, 168, 124, 0.12) 0%, transparent 70%)',
                        }}
                        animate={{ scale: [1, 1.08, 1], y: [0, -20, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Small bright accent orb */}
                    <motion.div
                        className="absolute w-40 h-40 rounded-full bottom-20 left-16"
                        style={{
                            x: moveX3,
                            y: moveY3,
                            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 60%)',
                        }}
                        animate={{ scale: [1, 1.12, 1], y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Tiny floating dots */}
                    <motion.div
                        className="absolute w-3 h-3 rounded-full bg-[#D4AF37]/30 top-20 left-1/3"
                        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute w-2 h-2 rounded-full bg-[#E8A87C]/40 bottom-32 right-1/4"
                        animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                    <motion.div
                        className="absolute w-2 h-2 rounded-full bg-[#D4AF37]/25 top-1/3 right-16"
                        animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />

                    {/* Subtle center ring */}
                    <motion.div
                        className="absolute w-48 h-48 rounded-full border border-[#D4AF37]/10"
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className="absolute w-64 h-64 rounded-full border border-[#E8A87C]/5"
                        animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.button
                    onClick={() => scrollToSection('about')}
                    className="text-text-muted text-sm hover:text-primary transition-colors"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    ↓ Scroll
                </motion.button>
            </motion.div>
        </section>
    )
}

export default Hero
