'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { IconArrowRight, IconExternalLink, IconRefresh } from '@tabler/icons-react'

const FILTERS = ['Semua', 'Company Profile', 'E-Commerce', 'Custom Web', 'Landing Page', 'Odoo']

const featured = {
  category: 'Company Profile',
  techs: ['Next.js', 'Tailwind'],
  bg: '#0D1B2A',
  ghostLabel: 'ARTHA NUSANTARA',
  name: 'PT Artha Nusantara',
  client: 'Perusahaan keuangan & investasi · Jakarta',
  desc: 'Perancangan ulang website company profile dari nol — dari arsitektur informasi, desain UI, hingga development dan deployment. Fokus pada kredibilitas dan kepercayaan di sektor keuangan.',
  metrics: [
    { num: '2', suffix: '×', label: 'Peningkatan leads' },
    { num: '98', suffix: '', label: 'Lighthouse score' },
    { num: '3', suffix: 'wk', label: 'Waktu pengerjaan' },
  ],
}

const projects = [
  {
    category: 'E-Commerce',
    bg: '#0D2137',
    initials: 'WH',
    techs: ['WordPress', 'WooCommerce'],
    name: 'Warung Herbal Asri',
    client: 'UMKM produk herbal · Yogyakarta',
    tags: ['WordPress', 'WooCommerce', 'SEO'],
  },
  {
    category: 'Custom Web',
    bg: '#111827',
    initials: 'SK',
    techs: ['React', 'Laravel'],
    name: 'Sistem Manajemen Klinik',
    client: 'Klinik swasta · Semarang',
    tags: ['React', 'Laravel', 'MySQL'],
  },
  {
    category: 'Company Profile',
    bg: '#1A1A2E',
    initials: 'MB',
    techs: ['Next.js', 'Figma'],
    name: 'CV Maju Bersama',
    client: 'Kontraktor konstruksi · Surabaya',
    tags: ['Next.js', 'Tailwind', 'CMS'],
  },
  {
    category: 'Odoo',
    bg: '#0A1628',
    initials: 'FP',
    techs: ['Odoo 17'],
    name: 'Farma Prima Distribusi',
    client: 'Distributor farmasi · Bandung',
    tags: ['Odoo 17', 'Inventory', 'Accounting'],
  },
  {
    category: 'Company Profile',
    bg: '#12172B',
    initials: 'RL',
    techs: ['Next.js', 'Sanity'],
    name: 'Rimba Lestari Group',
    client: 'Agribisnis & perkebunan · Kalimantan',
    tags: ['Next.js', 'Sanity CMS', 'i18n'],
  },
  {
    category: 'Landing Page',
    bg: '#1B1400',
    initials: 'KP',
    techs: ['React', 'Midtrans'],
    name: 'Kampanye Produk Baru',
    client: 'Brand FMCG · Jakarta',
    tags: ['React', 'Midtrans', 'Analytics'],
  },
]

export default function PortfolioProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState('Semua')

  const showFeatured = active === 'Semua' || active === featured.category
  const filtered = active === 'Semua' ? projects : projects.filter((p) => p.category === active)
  const totalCount = (showFeatured ? 1 : 0) + filtered.length

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.pfp-filter', { opacity: 0, y: 20 })
      gsap.set('.pfp-featured', { opacity: 0, y: 32 })
      gsap.set('.pfp-grid', { opacity: 0, y: 28 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.to('.pfp-filter', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
          gsap.to('.pfp-featured', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 })
          gsap.to('.pfp-grid', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.2 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref}>

      {/* ── Filter bar ── */}
      <div className="pfp-filter px-6 py-5 border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[12px] font-medium px-4 py-2 rounded-xl border transition-all duration-150 cursor-pointer ${
                  active === f
                    ? 'bg-[#1A6BFF] text-white border-[#1A6BFF]'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-800'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <span className="text-[12px] text-gray-400 shrink-0">{totalCount} proyek</span>
        </div>
      </div>

      {/* ── Featured card ── */}
      {showFeatured && (
        <section className="pfp-featured px-6 py-10 border-b border-gray-100 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-400 mb-5">
              Proyek unggulan
            </p>
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              {/* Thumbnail */}
              <div
                className="h-[180px] md:h-[200px] relative flex items-end px-7 py-6"
                style={{ background: featured.bg }}
              >
                <span
                  className="absolute top-5 left-7 font-bold text-[24px] tracking-tight select-none pointer-events-none"
                  style={{ color: 'rgba(255,255,255,0.06)' }}
                  aria-hidden="true"
                >
                  {featured.ghostLabel}
                </span>
                <div className="relative z-10 flex gap-2">
                  <span className="text-[11px] font-semibold bg-[#1A6BFF] text-white px-3 py-1.5 rounded-lg">
                    {featured.category}
                  </span>
                  {featured.techs.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium px-3 py-1.5 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.8)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="px-7 py-6 bg-white">
                <div className="flex flex-col md:flex-row md:items-start gap-6 justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="text-[18px] font-bold text-gray-900 mb-1">{featured.name}</div>
                    <div className="text-[13px] text-gray-400 mb-4">{featured.client}</div>
                    <p className="text-[13px] text-gray-400 leading-relaxed mb-6 max-w-lg">
                      {featured.desc}
                    </p>
                    {/* Metrics */}
                    <div className="flex gap-8">
                      {featured.metrics.map((m, i) => (
                        <div key={i}>
                          <div className="text-[22px] font-bold text-gray-900 leading-none mb-1">
                            {m.num}<span className="text-[#1A6BFF]">{m.suffix}</span>
                          </div>
                          <div className="text-[11px] text-gray-400">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-3 shrink-0">
                    <button className="inline-flex items-center gap-2 text-[13px] font-semibold bg-[#1A6BFF] text-white px-5 py-2.5 rounded-xl hover:bg-blue-600 transition-colors whitespace-nowrap">
                      Lihat proyek
                      <IconArrowRight size={14} />
                    </button>
                    <button className="inline-flex items-center gap-2 text-[12px] font-medium text-gray-500 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all whitespace-nowrap">
                      <IconExternalLink size={13} />
                      Live site
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Grid ── */}
      <section className="pfp-grid px-6 py-10 border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto">
          {filtered.length > 0 ? (
            <>
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-gray-400 mb-6">
                Semua proyek
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((p, i) => (
                  <div
                    key={i}
                    className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group"
                  >
                    {/* Thumb */}
                    <div
                      className="h-[120px] relative flex items-end px-5 py-4"
                      style={{ background: p.bg }}
                    >
                      <span
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[42px] tracking-tight select-none pointer-events-none"
                        style={{ color: 'rgba(255,255,255,0.07)' }}
                        aria-hidden="true"
                      >
                        {p.initials}
                      </span>
                      <div className="relative z-10 flex gap-1.5 flex-wrap">
                        {p.techs.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-medium px-2.5 py-1 rounded-lg"
                            style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)' }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-5 py-5 bg-white">
                      <span className="inline-block text-[10px] font-semibold text-[#185FA5] bg-[#EEF4FF] border border-[#B5D4F4] px-2.5 py-1 rounded-lg mb-3">
                        {p.category}
                      </span>
                      <div className="text-[14px] font-bold text-gray-900 mb-1 group-hover:text-[#1A6BFF] transition-colors">
                        {p.name}
                      </div>
                      <div className="text-[12px] text-gray-400 mb-4">{p.client}</div>
                      <div className="flex gap-1.5 flex-wrap">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load more */}
              <div className="mt-8 flex justify-center">
                <button className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-500 bg-gray-50 border border-gray-200 px-7 py-3 rounded-xl hover:border-gray-300 hover:bg-white transition-all">
                  <IconRefresh size={14} />
                  Tampilkan lebih banyak
                </button>
              </div>
            </>
          ) : (
            <div className="py-16 text-center text-gray-400 text-[14px]">
              Belum ada proyek di kategori ini.
            </div>
          )}
        </div>
      </section>

    </div>
  )
}
