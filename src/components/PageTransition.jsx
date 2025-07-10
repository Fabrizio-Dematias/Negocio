"use client"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const PageTransition = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [displayChildren, setDisplayChildren] = useState(children)
    const location = useLocation()

    useEffect(() => {
        setIsLoading(true)

        const timer = setTimeout(() => {
            setDisplayChildren(children)
            setIsLoading(false)
        }, 300)

        return () => clearTimeout(timer)
    }, [location.pathname, children])

    return (
        <div className="relative min-h-screen">
            {/* Loading Overlay */}
            <div
                className={`fixed inset-0 bg-gradient-to-br from-green-50 to-emerald-100 z-50 flex items-center justify-center transition-all duration-500 ${
                    isLoading ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
            >
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-green-200 border-t-green-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-green-700 font-medium">Cargando...</p>
                </div>
            </div>

            {/* Page Content */}
            <div
                className={`transition-all duration-600 ease-out ${
                    isLoading ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
                }`}
            >
                {displayChildren}
            </div>
        </div>
    )
}

export default PageTransition
