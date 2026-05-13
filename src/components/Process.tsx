'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const steps = [
  { num: '01', title: 'Konsultasi', desc: 'Diskusi kebutuhan dan tujuan proyek Anda secara gratis, tanpa komitmen.' },
  { num: '02', title: 'Brief & Desain', desc: 'Penyusunan brief, wireframe, dan arah visual yang disepakati bersama.' },
  { num: '03', title: 'Development', desc: 'Pengerjaan dengan update progress berkala dan feedback loop terbuka.' },
  { num: '04', title: 'Launch', desc: 'Peluncuran dan serah terima proyek beserta dokumentasi teknis lengkap.' },
]

export default function Process() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.proc-header', { opacity: 0, y: 24 })
      gsap.set('.proc-step', { opacity: 0, y: 28 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.proc-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.proc-step', { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out', delay: 0.15 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="py-24 px-6 border-b border-gray-100 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">

        <div className="proc-header mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Cara Kerja</p>
          <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
            Proses yang simpel &amp; transparan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="proc-step relative">
              {/* Number */}
              <div className="text-[11px] font-bold text-[#1A6BFF] tracking-widest mb-4">{s.num}</div>
              {/* Divider line */}
              <div className="h-px bg-gray-200 mb-6 w-full" />
              <div className="text-[18px] font-bold text-gray-900 mb-3 tracking-tight">{s.title}</div>
              <div className="text-[13px] text-gray-400 leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
