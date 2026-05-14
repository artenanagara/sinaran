import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PortfolioHero from '@/components/PortfolioHero'
import PortfolioProjects from '@/components/PortfolioProjects'
import PortfolioCTA from '@/components/PortfolioCTA'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Lihat hasil kerja Sinaran — website company profile, e-commerce, custom web, landing page, dan implementasi Odoo untuk klien dari berbagai industri di Indonesia.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfolio | Sinaran',
    description:
      'Lihat hasil kerja Sinaran — website company profile, e-commerce, custom web, landing page, dan implementasi Odoo untuk klien dari berbagai industri di Indonesia.',
    url: 'https://sinaran.id/portfolio',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <PortfolioProjects />
        <PortfolioCTA />
      </main>
      <Footer />
    </>
  )
}
