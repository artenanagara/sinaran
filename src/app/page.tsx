import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sinaran — Digital Agency Indonesia',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Portfolio />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
