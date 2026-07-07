import Navbar from '@/components/Navbar'
import ScrollIndicator from '@/components/ScrollIndicator'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import WorkResults from '@/components/sections/WorkResults'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'

export default function Home() {
    return (
        <>
            <Navbar />
            <ScrollIndicator />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <WorkResults />
            <Experience />
            <Contact />
        </>
    )
}
