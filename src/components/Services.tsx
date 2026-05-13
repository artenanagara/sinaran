'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {
  IconBuildingSkyscraper, IconDeviceLaptop, IconShoppingCart,
  IconCloud, IconBrandWordpress, IconSettings2, IconSpeakerphone, IconTool,
} from '@tabler/icons-react'

const services = [
  { icon: IconBuildingSkyscraper, name: 'Company Profile', desc: 'Website representatif yang membangun kepercayaan dan kredibilitas bisnis Anda.' },
  { icon: IconDeviceLaptop, name: 'Custom Web Development', desc: 'Solusi web yang dibangun khusus sesuai kebutuhan dan alur kerja bisnis Anda.' },
  { icon: IconShoppingCart, name: 'E-Commerce', desc: 'Toko online yang mudah dikelola dan dioptimalkan untuk konversi penjualan.' },
  { icon: IconCloud, name: 'SaaS Development', desc: 'Produk berbasis subscription yang scalable untuk bisnis yang ingin tumbuh.' },
  { icon: IconBrandWordpress, name: 'WordPress Development', desc: 'Bangun atau optimalkan website WordPress agar lebih cepat dan profesional.' },
  { icon: IconSettings2, name: 'Odoo Implementation', desc: 'Sistem ERP terpadu untuk manajemen bisnis yang lebih efisien dan terstruktur.' },
  { icon: IconSpeakerphone, name: 'Landing Page', desc: 'Halaman kampanye yang dirancang untuk mengkonversi pengunjung menjadi pelanggan.' },
  { icon: IconTool, name: 'Maintenance & Support', desc: 'Dukungan bulanan untuk memastikan website Anda selalu optimal dan aman.' },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.svc-header', { opacity: 0, y: 24 })
      gsap.set('.svc-card', { opacity: 0, y: 32 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.svc-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.svc-card', { opacity: 1, y: 0, duration: 0.6, stagger: { amount: 0.5 }, ease: 'power3.out', delay: 0.1 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="layanan" className="py-24 px-6 border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="svc-header flex justify-between items-end mb-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Layanan</p>
            <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
              Apa yang kami kerjakan
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1.5 text-[13px] font-medium text-gray-400 hover:text-[#1A6BFF] transition-colors">
            Semua layanan →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="svc-card bg-white p-7 hover:bg-[#FAFBFF] transition-colors duration-200 group cursor-pointer"
              >
                <div className="w-10 h-10 bg-[#EEF4FF] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#1A6BFF] transition-all duration-200">
                  <Icon size={18} className="text-[#1A6BFF] group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="text-[14px] font-semibold text-gray-900 mb-2 leading-snug">{s.name}</div>
                <div className="text-[12px] text-gray-400 leading-relaxed">{s.desc}</div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
