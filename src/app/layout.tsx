import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-dm',
  display: 'swap',
})

const siteUrl = 'https://sinaran.id'
const siteName = 'Sinaran'
const siteDescription =
  'Sinaran adalah digital agency Indonesia yang membantu UMKM dan perusahaan berkembang lewat website profesional, sistem digital, dan solusi teknologi yang tepat sasaran.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sinaran — Digital Agency Indonesia',
    template: '%s | Sinaran',
  },
  description: siteDescription,
  keywords: [
    'digital agency indonesia',
    'jasa pembuatan website',
    'web development indonesia',
    'company profile website',
    'e-commerce indonesia',
    'saas development',
    'odoo implementation',
    'landing page',
    'wordpress developer',
    'UMKM digital',
  ],
  authors: [{ name: 'Sinaran', url: siteUrl }],
  creator: 'Sinaran',
  publisher: 'Sinaran',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName,
    title: 'Sinaran — Digital Agency Indonesia',
    description: siteDescription,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sinaran — Digital Agency Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sinaran — Digital Agency Indonesia',
    description: siteDescription,
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={dmSans.variable}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
