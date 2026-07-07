'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Section {
    id: string
    label: string
}

const sections: Section[] = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Work' },
    { id: 'work-results', label: 'Results' },
    { id: 'experience', label: 'Background' },
    { id: 'contact', label: 'Contact' },
]

const ScrollIndicator = () => {
    const [activeSection, setActiveSection] = useState('hero')
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show indicator after scrolling past hero
            setIsVisible(window.scrollY > 200)

            // Determine active section
            const scrollPosition = window.scrollY + window.innerHeight / 2

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id)
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
                >
                    <div className="flex flex-col items-end gap-4">
                        {sections.map((section, index) => (
                            <motion.button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="group flex items-center gap-3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                {/* Label - shows on hover or when active */}
                                <span
                                    className={`text-xs font-medium uppercase tracking-wider transition-all duration-300 ${activeSection === section.id
                                            ? 'opacity-100 text-primary'
                                            : 'opacity-0 group-hover:opacity-100 text-text-muted'
                                        }`}
                                >
                                    {section.label}
                                </span>

                                {/* Dot indicator */}
                                <div className="relative">
                                    <div
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section.id
                                                ? 'bg-[#D4AF37] scale-125'
                                                : 'bg-border group-hover:bg-text-muted'
                                            }`}
                                    />

                                    {/* Active pulse ring */}
                                    {activeSection === section.id && (
                                        <motion.div
                                            className="absolute inset-0 w-2 h-2 rounded-full bg-[#D4AF37]"
                                            initial={{ scale: 1, opacity: 0.5 }}
                                            animate={{ scale: 2, opacity: 0 }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                    )}
                                </div>
                            </motion.button>
                        ))}

                        {/* Connecting line */}
                        <div className="absolute right-[3px] top-2 bottom-2 w-[2px] bg-border -z-10" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ScrollIndicator
