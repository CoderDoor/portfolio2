'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Work' },
        { id: 'work-results', label: 'Results' },
        { id: 'contact', label: 'Contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            const sections = ['hero', 'about', 'skills', 'projects', 'work-results', 'experience', 'contact']
            const scrollPosition = window.scrollY + 100

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i])
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i])
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo - MC */}
                <motion.button
                    onClick={() => scrollToSection('hero')}
                    className="group flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#E8A87C] flex items-center justify-center text-[#0a0a0f] font-bold text-sm tracking-wide group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20 transition-all duration-300">
                        MC
                    </div>
                    <span className="text-primary font-medium hidden sm:block">Mahesh Choudhary</span>
                </motion.button>

                {/* Nav Links */}
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <motion.button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className={`text-sm font-medium uppercase tracking-wider transition-colors ${activeSection === link.id
                                    ? 'text-[#D4AF37]'
                                    : 'text-text-secondary hover:text-primary'
                                }`}
                            whileHover={{ y: -1 }}
                        >
                            {link.label}
                        </motion.button>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
