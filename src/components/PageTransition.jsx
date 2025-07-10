"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const PageTransition = ({ children }) => {
    const [isTransitioning, setIsTransitioning] = useState(false)
    const [displayChildren, setDisplayChildren] = useState(children)
    const location = useLocation()

    useEffect(() => {
        setIsTransitioning(true)

        const timer = setTimeout(() => {
            setDisplayChildren(children)
            setIsTransitioning(false)
        }, 150) // Reduced from 300ms to 150ms

        return () => clearTimeout(timer)
    }, [location.pathname, children])

    return (
        <div
            className={`transition-all duration-300 ease-out ${
                isTransitioning ? "opacity-90 transform translate-y-1" : "opacity-100 transform translate-y-0"
            }`}
        >
            {displayChildren}
        </div>
    )
}

export default PageTransition
