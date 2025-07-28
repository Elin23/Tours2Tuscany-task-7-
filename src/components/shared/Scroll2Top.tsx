'use client'

import { useEffect, useState } from 'react'
import TopArrow from '../icons/TopArrow'


export default function Scroll2Top() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`
        fixed bottom-6 right-6 z-50 flex items-center justify-center
        rounded-full bg-orange p-4 text-white shadow-lg
        transition-all duration-300 ease-in-out
        hover:bg-orange-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
            aria-label="Scroll to top"
        >
            <TopArrow className="h-5 w-5" />
        </button>
    )
}
