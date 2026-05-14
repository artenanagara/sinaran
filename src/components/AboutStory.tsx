'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const stats = [
  { num: '50', suffix: '+', desc: 'Proyek website selesai dikerjakan' },
  { num: '40', suffix: '+', desc: 'Klien dari berbagai industri' },
  { num: '3',  suffix: '+', desc: 'Tahun pengalaman gabungan tim' },
  { num: '98', suffix: '%', desc: 'Klien puas dan kembali bekerja sama' },
]

export default function AboutStory() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.story-text', { opacity: 0, x: -36 })
      gsap.set('.story-stats', { opacity: 0, x: 36 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.story-text', { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
          gsap.to('.story-stats', { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-6 py-24 border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        {/* Story text */}
        <div className="story-text">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-4">Cerita Kami</p>
          <h2 className="text-[28px] font-bold tracking-tight text-gray-900 leading-snug mb-6">
            Dimulai dari frustrasi yang sama
          </h2>
          <div className="space-y-4 text-[14px] text-gray-400 leading-[1.8] font-normal">
            <p>
              Kami melihat terlalu banyak UMKM dan bisnis lokal yang terjebak — mau punya website
              yang bagus, tapi harganya tidak masuk akal. Atau sudah bayar mahal, hasilnya generik
              dan tidak punya karakter.
            </p>
            <p>
              Sinaran lahir dari keyakinan sederhana: kualitas tidak harus mahal, dan proses kerja
              sama tidak harus rumit. Kami hadir sebagai partner, bukan vendor.
            </p>
            <p>
              Dengan pengalaman gabungan di UI/UX, frontend, dan fullstack development, kami
              mengerjakan setiap proyek langsung — tanpa dilempar ke pihak ketiga.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="story-stats flex flex-col justify-center divide-y divide-gray-100">
          {stats.map((s, i) => (
            <div key={i} className="py-6 first:pt-0 last:pb-0">
              <div className="text-[40px] font-bold tracking-tight text-gray-900 leading-none mb-1.5">
                {s.num}<span className="text-[#1A6BFF]">{s.suffix}</span>
              </div>
              <div className="text-[13px] text-gray-400 leading-snug">{s.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
