'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const stats = [
  { value: 50, suffix: '+', label: 'Proyek selesai' },
  { value: 40, suffix: '+', label: 'Klien puas' },
  { value: 3, suffix: '+', label: 'Tahun pengalaman' },
  { value: 98, suffix: '%', label: 'Tingkat kepuasan' },
]

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.stat-card', { opacity: 0, y: 24 })

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          gsap.to('.stat-card', {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
          })
          stats.forEach((stat, i) => {
            const el = ref.current?.querySelectorAll('.stat-num')[i] as HTMLElement
            if (!el) return
            const obj = { val: 0 }
            gsap.to(obj, {
              val: stat.value, duration: 1.8, ease: 'power2.out', snap: { val: 1 },
              onUpdate: () => { el.textContent = String(Math.round(obj.val)) },
            })
          })
        },
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className="border-y border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`stat-card py-14 px-6 ${i < stats.length - 1 ? 'border-r border-gray-100' : ''}`}
          >
            <div className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none tracking-tight mb-2">
              <span className="stat-num">0</span>
              <span className="text-[#1A6BFF]">{s.suffix}</span>
            </div>
            <div className="text-[13px] text-gray-400 font-medium">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
