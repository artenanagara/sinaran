'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { IconBolt, IconArrowRight } from '@tabler/icons-react'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.hero-badge', { y: 12, opacity: 0, duration: 0.5, ease: 'power3.out' })
        .from('.hero-title-line', { y: 60, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, '-=0.2')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
        .from('.hero-action', { y: 16, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }, '-=0.3')
        .from('.hero-grid', { opacity: 0, duration: 1.5, ease: 'power1.out' }, '-=1')
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex flex-col justify-center px-6 bg-white overflow-hidden">
      {/* Subtle grid background */}
      <svg
        className="hero-grid absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-grid-pat" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1A6BFF" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid-pat)" />
      </svg>

      {/* Glow */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EEF4FF 0%, transparent 70%)', opacity: 0.6 }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto w-full pt-24 pb-20">
        <div className="hero-badge inline-flex items-center gap-2 text-[11px] font-semibold text-[#1A6BFF] bg-[#EEF4FF] px-3.5 py-1.5 rounded-full mb-8 uppercase tracking-widest">
          <IconBolt size={11} />
          Digital Agency Indonesia
        </div>

        <h1 className="mb-7 max-w-3xl">
          <div className="overflow-hidden">
            <div className="hero-title-line text-[52px] md:text-[72px] font-bold leading-[1.05] tracking-[-2px] text-gray-900">
              Wujudkan
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-title-line text-[52px] md:text-[72px] font-bold leading-[1.05] tracking-[-2px] text-[#1A6BFF]">
              Bisnis Digital
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero-title-line text-[52px] md:text-[72px] font-bold leading-[1.05] tracking-[-2px] text-gray-900">
              yang Berkesan
            </div>
          </div>
        </h1>

        <p className="hero-sub text-[16px] text-gray-400 leading-relaxed max-w-[480px] mb-10 font-normal">
          Kami membantu UMKM dan perusahaan berkembang lewat website profesional,
          sistem digital, dan solusi teknologi yang tepat sasaran.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button className="hero-action inline-flex items-center gap-2.5 text-[14px] font-semibold bg-[#1A6BFF] text-white px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-colors">
            Mulai Proyek
            <IconArrowRight size={16} />
          </button>
          <button className="hero-action text-[14px] font-medium text-gray-500 px-6 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all">
            Lihat Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
