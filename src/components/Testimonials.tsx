'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const testimonials = [
  {
    initials: 'BW', name: 'Budi Wijaya', company: 'Direktur, PT Maju Bersama',
    quote: 'Website company profile kami selesai tepat waktu dan hasilnya jauh melebihi ekspektasi. Tim Sinaran sangat responsif dan mudah diajak komunikasi.',
  },
  {
    initials: 'SR', name: 'Sari Rahayu', company: 'Owner, Warung Herbal Asri',
    quote: 'Toko online kami sekarang lebih profesional dan mudah dikelola. Penjualan meningkat signifikan setelah website baru diluncurkan.',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.testi-header', { opacity: 0, y: 24 })
      gsap.set('.testi-card', { opacity: 0, y: 32 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.testi-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.testi-card', { opacity: 1, y: 0, duration: 0.65, stagger: 0.15, ease: 'power3.out', delay: 0.1 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="py-24 px-6 border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="testi-header mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Testimoni</p>
          <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
            Kata klien kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testi-card p-8 border border-gray-100 rounded-2xl hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-[#F5A623] text-[15px]">★</span>
                ))}
              </div>
              <p className="text-[15px] text-gray-600 leading-[1.8] mb-7 font-normal">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#EEF4FF] flex items-center justify-center text-[11px] font-bold text-[#1A6BFF] shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-bold text-gray-900">{t.name}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
