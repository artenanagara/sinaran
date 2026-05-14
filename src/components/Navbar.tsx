'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

export default function Navbar() {
  const ref = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const trigger = ScrollTrigger.create({
      start: 'top -40',
      onEnter: () => setScrolled(true),
      onLeaveBack: () => setScrolled(false),
    })
    return () => trigger.kill()
  }, [])

  useGSAP(
    () => {
      gsap.from(ref.current, { y: -24, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.05 })
    },
    { scope: ref },
  )

  return (
    <header
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-lg shadow-[0_1px_0_0_rgba(0,0,0,0.06)]' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-[17px] tracking-tight text-gray-900">
          sinaran<span className="text-[#1A6BFF]">.</span>
        </a>
        <div className="hidden md:flex items-center gap-7">
          <a href="#layanan" className="nav-link text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Layanan
          </a>
          <a href="#portfolio" className="nav-link text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Portfolio
          </a>
          <a href="/tentang" className="nav-link text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Tentang
          </a>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold bg-[#1A6BFF] text-white px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors"
          >
            Konsultasi Gratis
          </a>
        </div>
      </nav>
    </header>
  )
}
