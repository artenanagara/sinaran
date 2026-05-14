'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { IconBrandWhatsapp, IconArrowRight } from '@tabler/icons-react'

export default function AboutCTA() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.ab-cta-inner', { opacity: 0, y: 36 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.ab-cta-inner', { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="ab-cta-inner rounded-3xl bg-[#0F1117] px-10 py-16 md:px-16 md:py-20 relative overflow-hidden">
          {/* Glow accents */}
          <div
            className="absolute top-0 left-1/4 w-[400px] h-[300px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(26,107,255,0.25) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-1/4 w-[300px] h-[200px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative text-center max-w-xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-5">Mulai Sekarang</p>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-white leading-[1.1] mb-5">
              Ceritakan kebutuhan{' '}
              <span className="text-[#1A6BFF]">proyek Anda</span>
            </h2>
            <p className="text-[15px] text-white/50 mb-10 leading-relaxed">
              Konsultasi gratis, tanpa komitmen. Kami siap bantu dari nol sampai live.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-[14px] font-semibold px-7 py-3.5 rounded-xl hover:bg-green-400 transition-colors"
              >
                <IconBrandWhatsapp size={18} />
                Chat via WhatsApp
              </a>
              <a
                href="/#portfolio"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-white/70 px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all"
              >
                Lihat Portfolio
                <IconArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
