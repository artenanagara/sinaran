'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const reasons = [
  {
    title: 'Langsung dikerjakan sendiri',
    desc: 'Tidak ada perantara atau outsource. Anda bekerja langsung dengan orang yang mengerjakan proyek Anda.',
  },
  {
    title: 'Harga transparan, tanpa kejutan',
    desc: 'Estimasi biaya diberikan di awal. Tidak ada biaya tersembunyi di tengah atau akhir proyek.',
  },
  {
    title: 'Responsif dan mudah dihubungi',
    desc: 'Tim kecil berarti komunikasi lebih cepat. Pertanyaan Anda direspons dalam hitungan jam, bukan hari.',
  },
  {
    title: 'Paham konteks bisnis Indonesia',
    desc: 'Kami tahu kebutuhan UMKM dan perusahaan lokal — dari bahasa, perilaku pengguna, hingga kebutuhan teknis.',
  },
  {
    title: 'Desain dan teknis dalam satu tim',
    desc: 'UI/UX dan development dikerjakan bersama sejak awal — hasilnya konsisten dari tampilan hingga performa.',
  },
  {
    title: 'Dukungan setelah proyek selesai',
    desc: 'Kami tidak menghilang setelah launch. Ada opsi maintenance untuk memastikan website Anda tetap optimal.',
  },
]

export default function AboutWhy() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.why-header', { opacity: 0, y: 24 })
      gsap.set('.why-item', { opacity: 0, y: 28 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.why-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.why-item', { opacity: 1, y: 0, duration: 0.6, stagger: { amount: 0.45 }, ease: 'power3.out', delay: 0.1 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-6 py-24 border-b border-gray-100 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">

        <div className="why-header mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Mengapa Sinaran</p>
          <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
            Kenapa bisnis memilih kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((r, i) => (
            <div key={i} className="why-item flex gap-4 items-start p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-sm transition-shadow duration-300">
              <div className="w-2 h-2 rounded-full bg-[#1A6BFF] shrink-0 mt-[5px]" />
              <div>
                <div className="text-[14px] font-bold text-gray-900 mb-1.5">{r.title}</div>
                <div className="text-[13px] text-gray-400 leading-relaxed">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
