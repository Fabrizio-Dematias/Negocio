"use client"

import { useEffect, useRef, useState } from "react"

const AnimatedSection = ({ children, animation = "fade-in-up", delay = 0, threshold = 0.1, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true)
                    }, delay)
                }
            },
            { threshold },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [delay, threshold])

    return (
        <div ref={ref} className={`${className} ${isVisible ? `animate-${animation}` : "opacity-0"}`}>
            {children}
        </div>
    )
}

export default AnimatedSection
