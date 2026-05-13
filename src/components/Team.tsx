'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const members = [
  {
    initials: 'AR', name: 'Artena', role: 'UI/UX & Front End Developer',
    bio: 'Mengkhususkan diri dalam menciptakan antarmuka yang intuitif dan pengalaman pengguna yang berkesan.',
    skills: ['Figma', 'React', 'Next.js', 'Tailwind CSS'],
    dark: false,
  },
  {
    initials: 'FH', name: 'Ferhat', role: 'Fullstack Developer',
    bio: 'Membangun sistem backend yang robust dan mengimplementasikan solusi enterprise seperti ERP.',
    skills: ['WordPress', 'Odoo', 'Laravel', 'Node.js'],
    dark: true,
  },
]

export default function Team() {
  const ref = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.set('.team-header', { opacity: 0, y: 24 })
      gsap.set('.team-card-left', { opacity: 0, x: -40 })
      gsap.set('.team-card-right', { opacity: 0, x: 40 })

      ScrollTrigger.create({
        trigger: ref.current, start: 'top 82%', once: true,
        onEnter: () => {
          gsap.to('.team-header', { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
          gsap.to('.team-card-left', { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.15 })
          gsap.to('.team-card-right', { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', delay: 0.25 })
        },
      })
    },
    { scope: ref },
  )

  return (
    <section ref={ref} id="tentang" className="py-24 px-6 border-b border-gray-100 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">

        <div className="team-header mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#1A6BFF] mb-3">Tim</p>
          <h2 className="text-[36px] font-bold tracking-tight text-gray-900 leading-tight">
            Orang di balik Sinaran
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {members.map((m, i) => (
            <div
              key={i}
              className={`${i === 0 ? 'team-card-left' : 'team-card-right'} p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-[16px] shrink-0 ${
                    m.dark ? 'bg-gray-900 text-white' : 'bg-[#EEF4FF] text-[#1A6BFF]'
                  }`}
                >
                  {m.initials}
                </div>
                <div>
                  <div className="text-[17px] font-bold text-gray-900 mb-0.5">{m.name}</div>
                  <div className="text-[12px] text-[#1A6BFF] font-semibold">{m.role}</div>
                </div>
              </div>
              <p className="text-[13px] text-gray-400 leading-relaxed mb-5">{m.bio}</p>
              <div className="flex flex-wrap gap-2">
                {m.skills.map((sk) => (
                  <span key={sk} className="text-[11px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-3 py-1 rounded-lg">
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
