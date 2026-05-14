'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { IconLayout2, IconMessageDots, IconRocket } from '@tabler/icons-react'

const values = [
  {
    icon: IconLayout2,
    name: 'Desain yang bermakna',
    desc: 'Tampilan bukan sekadar estetika — setiap elemen dirancang untuk membantu bisnis Anda berkomunikasi lebih efektif.',
  },
  {
    icon: IconMessageDots,
    name: 'Komunikasi terbuka',
    desc: 'Tidak ada black box. Anda selalu tahu progres proyek, apa yang dikerjakan, dan kapan selesai.',
  },
  {
    icon: IconRocket,
    name: 'Hasil yang terukur',
    desc: 'Kami tidak hanya deliver website — kami deliver aset digital yang berdampak nyata pada bisnis klien.',
  },
]

export default function AboutValues() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.val-header', { opacity: 0, y: 24 })
      gsap.set('.val-card', { opacity: 0, y: 32 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.val-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.val-card', { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power3.out', delay: 0.1 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-6 py-24 border-b border-gray-100 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">

        <div className="val-header mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Nilai Kami</p>
          <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
            Prinsip yang memandu cara kerja kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div key={i} className="val-card bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 bg-[#EEF4FF] rounded-xl flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#1A6BFF]" />
                </div>
                <div className="text-[15px] font-bold text-gray-900 mb-2.5">{v.name}</div>
                <div className="text-[13px] text-gray-400 leading-relaxed">{v.desc}</div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
