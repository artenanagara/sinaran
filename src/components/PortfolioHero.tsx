'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { IconChevronRight } from '@tabler/icons-react'

export default function PortfolioHero() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from('.pfh-breadcrumb', { y: 10, opacity: 0, duration: 0.45, ease: 'power2.out' })
        .from('.pfh-label', { y: 10, opacity: 0, duration: 0.45, ease: 'power2.out' }, '-=0.2')
        .from('.pfh-title-line', { y: 56, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power4.out' }, '-=0.25')
        .from('.pfh-sub', { y: 18, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-6 pt-32 pb-20 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto">

        <div className="pfh-breadcrumb flex items-center gap-1.5 text-[12px] text-gray-400 mb-7">
          <a href="/" className="hover:text-gray-700 transition-colors">Beranda</a>
          <IconChevronRight size={11} className="text-gray-300" />
          <span className="text-[#1A6BFF] font-medium">Portfolio</span>
        </div>

        <p className="pfh-label text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-5">
          Portfolio
        </p>

        <h1 className="max-w-2xl mb-7">
          <div className="overflow-hidden">
            <div className="pfh-title-line text-[40px] md:text-[52px] font-bold leading-[1.1] tracking-[-1.5px] text-gray-900">
              Proyek yang kami{' '}
              <span className="text-[#1A6BFF]">banggakan</span>
            </div>
          </div>
        </h1>

        <p className="pfh-sub text-[16px] text-gray-400 leading-relaxed max-w-[520px] font-normal">
          Setiap proyek adalah cerita tersendiri — dari brief pertama hingga launch hari pertama.
          Ini sebagian hasil kerja kami bersama klien dari berbagai industri.
        </p>

      </div>
    </section>
  )
}
