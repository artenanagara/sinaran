'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const projects = [
  { bg: '#0F1117', accent: '#1A6BFF', label: 'FINTECH CO.', tag: 'Company Profile', name: 'PT Artha Nusantara', client: 'Perusahaan keuangan · Jakarta', year: '2024' },
  { bg: '#0D1B2A', accent: '#3B82F6', label: 'E-COMMERCE', tag: 'E-Commerce', name: 'Warung Herbal Asri', client: 'UMKM produk herbal · Yogyakarta', year: '2024' },
  { bg: '#111827', accent: '#6366F1', label: 'CUSTOM WEB', tag: 'Custom Web', name: 'Sistem Manajemen Klinik', client: 'Klinik swasta · Semarang', year: '2023' },
  { bg: '#0C0C0E', accent: '#8B5CF6', label: 'LANDING PAGE', tag: 'Landing Page', name: 'Kampanye Produk Baru', client: 'Brand FMCG · Surabaya', year: '2023' },
]

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.port-header', { opacity: 0, y: 24 })
      gsap.set('.port-card', { opacity: 0, y: 36 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.port-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.port-card', { opacity: 1, y: 0, duration: 0.65, stagger: { amount: 0.4 }, ease: 'power3.out', delay: 0.1 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="portfolio" className="py-24 px-6 border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="port-header flex justify-between items-end mb-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Portfolio</p>
            <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
              Hasil kerja kami
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-[#1A6BFF] transition-colors">
            Lihat semua →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              className="port-card group rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image area */}
              <div
                className="h-[160px] flex items-end justify-between p-6 relative overflow-hidden"
                style={{ background: p.bg }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: `radial-gradient(circle at 80% 20%, ${p.accent}, transparent 60%)` }}
                />
                <span className="font-bold text-[11px] tracking-[3px] text-white/30 group-hover:text-white/50 transition-colors relative z-10">
                  {p.label}
                </span>
                <span className="text-[11px] font-medium text-white/30 relative z-10">{p.year}</span>
              </div>

              {/* Body */}
              <div className="p-5 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-[#1A6BFF] bg-[#EEF4FF] px-2.5 py-1 rounded-md tracking-wide">
                    {p.tag}
                  </span>
                </div>
                <div className="text-[15px] font-bold text-gray-900 mb-1 tracking-tight">{p.name}</div>
                <div className="text-[12px] text-gray-400">{p.client}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
