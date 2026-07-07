import { gsap } from 'gsap'

// Ease curves for different animation types
export const eases = {
    smooth: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)',
    sharp: 'power4.out',
    slow: 'power1.inOut',
    snappy: 'power3.out',
}

// Fade in animation
export const fadeIn = (element: string | Element, delay = 0, duration = 0.8) => {
    return gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration, delay, ease: eases.smooth }
    )
}

// Slide up animation
export const slideUp = (element: string | Element, delay = 0, duration = 0.6) => {
    return gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration, delay, ease: eases.smooth }
    )
}

// Scale in animation
export const scaleIn = (element: string | Element, delay = 0, duration = 0.5) => {
    return gsap.fromTo(
        element,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration, delay, ease: eases.bounce }
    )
}

// Stagger animation for lists
export const staggerFadeIn = (elements: string | Element[], staggerTime = 0.1, delay = 0) => {
    return gsap.fromTo(
        elements,
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: staggerTime,
            delay,
            ease: eases.smooth
        }
    )
}

// Text reveal animation (character by character)
export const textReveal = (element: string | Element, delay = 0) => {
    const tl = gsap.timeline({ delay })
    tl.fromTo(
        element,
        { opacity: 0, y: 20, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.8, ease: eases.smooth }
    )
    return tl
}

// Glow pulse animation
export const glowPulse = (element: string | Element) => {
    return gsap.to(element, {
        boxShadow: '0 0 40px rgba(0, 240, 255, 0.6), 0 0 80px rgba(191, 0, 255, 0.3)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    })
}

// Float animation
export const floatAnimation = (element: string | Element) => {
    return gsap.to(element, {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    })
}

// Typing animation
export const typeWriter = (
    element: HTMLElement,
    text: string,
    speed = 50,
    callback?: () => void
) => {
    let i = 0
    element.textContent = ''

    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i)
            i++
            setTimeout(type, speed)
        } else if (callback) {
            callback()
        }
    }

    type()
}

// Parallax scroll effect
export const parallaxScroll = (element: string | Element, speed = 0.5) => {
    return gsap.to(element, {
        y: () => window.scrollY * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    })
}

// Card hover effect
export const cardHover = {
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
        gsap.to(e.currentTarget, {
            y: -10,
            scale: 1.02,
            boxShadow: '0 20px 40px rgba(0, 240, 255, 0.2)',
            duration: 0.3,
            ease: eases.smooth
        })
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
        gsap.to(e.currentTarget, {
            y: 0,
            scale: 1,
            boxShadow: '0 0 0 rgba(0, 240, 255, 0)',
            duration: 0.3,
            ease: eases.smooth
        })
    }
}

// Magnetic button effect
export const magneticEffect = (e: React.MouseEvent<HTMLElement>, strength = 0.3) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(e.currentTarget, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: eases.smooth
    })
}

export const magneticReset = (e: React.MouseEvent<HTMLElement>) => {
    gsap.to(e.currentTarget, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: eases.smooth
    })
}

// Counter animation
export const animateCounter = (
    element: HTMLElement,
    target: number,
    duration = 2,
    prefix = '',
    suffix = ''
) => {
    const obj = { value: 0 }

    gsap.to(obj, {
        value: target,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
            element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`
        }
    })
}

// Progress bar animation
export const animateProgressBar = (element: Element, targetWidth: number, delay = 0) => {
    return gsap.fromTo(
        element,
        { width: '0%' },
        {
            width: `${targetWidth}%`,
            duration: 1.2,
            delay,
            ease: eases.smooth
        }
    )
}
