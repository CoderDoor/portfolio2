'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio-data'

const Contact = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            // Replace '#' with your Formspree or other form endpoint
            const response = await fetch('#', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `Portfolio Contact: ${formData.name}`,
                }),
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch (error) {
            console.error('Error sending message:', error)
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    const contactInfo = [
        { label: 'Location', value: portfolioData.personal.location, href: '' },
        { label: 'Email', value: portfolioData.personal.email, href: `mailto:${portfolioData.personal.email}` },
        { label: 'Phone', value: portfolioData.personal.phone, href: `tel:${portfolioData.personal.phone}` },
        {  label: 'LinkedIn', value: 'Connect on LinkedIn', href: portfolioData.personal.linkedin },
    ]

    const socialLinks = [
        { name: 'LinkedIn', url: portfolioData.personal.linkedin },
        { name: 'Email', url: `mailto:${portfolioData.personal.email}` },
    ]

    return (
        <section
            ref={sectionRef}
            id="contact"
            className="py-24"
        >
            <div className="max-w-2xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-light mb-4 gradient-text">
                        Let&apos;s Build Something Remarkable Together
                    </h2>
                    <p className="text-text-secondary mb-12">
                        Have a project in mind or want to collaborate? I&apos;d love to hear from you.
                    </p>

                    {/* Contact Info Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        target={info.href.startsWith('http') ? '_blank' : undefined}
                                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="glass-card p-4 block hover:border-[#D4AF37]/30 transition-colors"
                                        style={{ transform: 'none' }}
                                    >
                                        
                                        <span className="text-xs text-text-muted block mt-1">{info.label}</span>
                                        <span className="text-sm text-primary">{info.value}</span>
                                    </a>
                                ) : (
                                    <div className="glass-card p-4" style={{ transform: 'none' }}>
                                        
                                        <span className="text-xs text-text-muted block mt-1">{info.label}</span>
                                        <span className="text-sm text-primary">{info.value}</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 mb-16">
                        <div>
                            <label className="block text-sm text-text-muted mb-2">Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your name"
                                required
                                disabled={status === 'sending'}
                                className="disabled:opacity-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-text-muted mb-2">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                required
                                disabled={status === 'sending'}
                                className="disabled:opacity-50"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-text-muted mb-2">Message</label>
                            <textarea
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Tell me about your project..."
                                required
                                disabled={status === 'sending'}
                                className="disabled:opacity-50"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className={`btn w-full justify-center transition-all duration-300 ${status === 'success'
                                ? 'bg-green-500 text-white'
                                : status === 'error'
                                    ? 'bg-red-500 text-white'
                                    : status === 'sending'
                                        ? 'bg-gray-600 text-white cursor-wait'
                                        : 'btn-primary'
                                }`}
                        >
                            {status === 'sending' && 'Sending...'}
                            {status === 'success' && '✓ Message Sent!'}
                            {status === 'error' && '✕ Failed to send. Try again.'}
                            {status === 'idle' && 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="text-center text-sm text-green-400">
                                Thanks! I&apos;ll get back to you soon.
                            </p>
                        )}
                    </form>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-8 pt-8 border-t border-border">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-text-muted hover:text-[#D4AF37] transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="mt-24 text-center">
                <p className="text-sm text-text-muted">
                    © {new Date().getFullYear()} {portfolioData.personal.name}
                </p>
            </footer>
        </section>
    )
}

export default Contact
