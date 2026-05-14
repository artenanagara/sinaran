import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import AboutStory from '@/components/AboutStory'
import AboutValues from '@/components/AboutValues'
import AboutTeam from '@/components/AboutTeam'
import AboutWhy from '@/components/AboutWhy'
import AboutCTA from '@/components/AboutCTA'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Sinaran adalah tim kecil yang bergerak cepat — dua orang dengan visi yang sama: menghadirkan solusi digital berkualitas yang terjangkau untuk bisnis Indonesia yang serius tumbuh.',
  alternates: { canonical: '/tentang' },
  openGraph: {
    title: 'Tentang Kami | Sinaran',
    description:
      'Sinaran adalah tim kecil yang bergerak cepat — dua orang dengan visi yang sama: menghadirkan solusi digital berkualitas yang terjangkau untuk bisnis Indonesia yang serius tumbuh.',
    url: 'https://sinaran.id/tentang',
  },
}

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <AboutWhy />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
