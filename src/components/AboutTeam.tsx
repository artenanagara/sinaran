'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { IconExternalLink } from '@tabler/icons-react'

const members = [
  {
    initials: 'AR',
    name: 'Artena',
    role: 'UI/UX & Front End Developer',
    bio: 'UI/UX Designer dengan 3+ tahun pengalaman merancang produk digital untuk bisnis Indonesia. Fokus pada antarmuka yang bersih, intuitif, dan sesuai konteks pengguna lokal.',
    skillsBlue: ['Figma', 'React', 'Next.js', 'Tailwind'],
    skillsGray: ['UI/UX', 'Prototyping'],
    portfolio: 'https://artenanagara.my.id',
    dark: false,
  },
  {
    initials: 'FH',
    name: 'Ferhat Muhamad Yasin',
    role: 'Fullstack Developer',
    bio: 'Fullstack developer dan IT Leader berpengalaman di WordPress, Odoo, dan pengembangan aplikasi web berperforma tinggi. Mengerjakan proyek dari backend hingga deployment.',
    skillsBlue: ['WordPress', 'Odoo', 'Laravel', 'Node.js'],
    skillsGray: ['DevOps', 'ERP'],
    portfolio: 'https://ferhatmuhamad.web.id',
    dark: true,
  },
]

export default function AboutTeam() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.ab-team-header', { opacity: 0, y: 24 })
      gsap.set('.ab-team-card-left', { opacity: 0, x: -40 })
      gsap.set('.ab-team-card-right', { opacity: 0, x: 40 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.ab-team-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.ab-team-card-left', { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.15 })
          gsap.to('.ab-team-card-right', { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.25 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} className="px-6 py-24 border-b border-gray-100 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="ab-team-header mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Tim</p>
          <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
            Dua orang, satu visi
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {members.map((m, i) => (
            <div
              key={i}
              className={`${i === 0 ? 'ab-team-card-left' : 'ab-team-card-right'} border border-gray-100 rounded-2xl overflow-hidden`}
            >
              {/* Card header */}
              <div className="flex items-center gap-4 px-7 py-6 bg-[#FAFAFA] border-b border-gray-100">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-[16px] shrink-0 ${
                    m.dark ? 'bg-gray-900 text-white' : 'bg-[#EEF4FF] text-[#1A6BFF]'
                  }`}
                >
                  {m.initials}
                </div>
                <div>
                  <div className="text-[16px] font-bold text-gray-900 mb-0.5">{m.name}</div>
                  <div className="text-[12px] text-[#1A6BFF] font-semibold">{m.role}</div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-7 py-6">
                <p className="text-[13px] text-gray-400 leading-relaxed mb-5">{m.bio}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {m.skillsBlue.map((sk) => (
                    <span key={sk} className="text-[11px] font-medium text-[#185FA5] bg-[#EEF4FF] border border-[#B5D4F4] px-2.5 py-1 rounded-lg">
                      {sk}
                    </span>
                  ))}
                  {m.skillsGray.map((sk) => (
                    <span key={sk} className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-lg">
                      {sk}
                    </span>
                  ))}
                </div>

                {/* Portfolio link */}
                <a
                  href={m.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#1A6BFF] hover:underline"
                >
                  Portfolio
                  <IconExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
