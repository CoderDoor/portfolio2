import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#f0e6d3',
                'accent': '#D4AF37',
                'accent-warm': '#E8A87C',
                'text-primary': '#f0e6d3',
                'text-secondary': '#a89b8c',
                'text-muted': '#6b5f52',
                'bg-primary': '#0a0a0f',
                'bg-secondary': '#111118',
                'bg-card': '#16161f',
                'border': '#2a2a35',
                'border-light': '#3a3a45',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease forwards',
                'fade-up': 'fadeUp 0.6s ease forwards',
                'shimmer': 'shimmer 2s linear infinite',
                'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4' },
                    '50%': { opacity: '0.8' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-gold': 'linear-gradient(135deg, #D4AF37, #E8A87C, #D4AF37)',
            },
        },
    },
    plugins: [],
}
export default config
