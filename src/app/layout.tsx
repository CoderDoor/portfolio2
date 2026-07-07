import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Mahesh Choudhary | Copywriter & Growth Strategist',
    description: 'Portfolio of Mahesh Choudhary — Copywriter, Social Media Manager, and Growth Strategist based in Pune. I build brand authorities, disrupt crowded categories, and write copy that moves metrics.',
    keywords: ['Copywriter', 'Growth Strategist', 'Social Media Manager', 'Content Strategy', 'Brand Positioning', 'Pune'],
    authors: [{ name: 'Mahesh Choudhary' }],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="bg-bg-primary text-primary antialiased">
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}
