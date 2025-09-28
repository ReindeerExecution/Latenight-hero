import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import StickyCTA from '@/components/StickyCTA'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Late Night Hero Black Car • Oak Brook & O'Hare",
  description: "Syrian-owned, Chicago black car & taxi. Oak Brook • O'Hare • 24/7 dispatch • Commercially insured • Professional, vetted drivers.",
  metadataBase: new URL('https://late-night-hero.vercel.app'),
  openGraph: {
    title: 'Late Night Hero Black Car',
    description: "Oak Brook & O'Hare • Luxury taxi & black car, 24/7.",
    url: 'https://late-night-hero.vercel.app',
    siteName: 'Late Night Hero',
    type: 'website',
    locale: 'en_US'
  },
  alternates: { canonical: '/', languages: { 'en-US': '/' } }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'TaxiService',
    name:'Late Night Hero Black Car',
    areaServed:["Oak Brook","O'Hare","Chicago"],
    telephone:'+1-773-430-8011',
    url:'https://late-night-hero.vercel.app',
    openingHours:'Mo-Su 00:00-23:59',
    sameAs:[],
    priceRange:'$$',
    serviceArea: { '@type':'AdministrativeArea', name:'Chicago metropolitan area' }
  }
  return (
    <html lang='en'>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand-purple text-white px-4 py-2 rounded-md">Skip to content</a>
        <header className='border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-black/40'>
          <nav className='container flex items-center justify-between py-4' aria-label='Main'>
            <Link href='/' className='flex items-center gap-3 group' aria-label='Home'>
              <Image src='/logo.svg' alt='Late Night Hero logo' width={40} height={40} priority className='rounded-lg shadow-lg shadow-brand-purple/30' />
              <div className='font-extrabold tracking-tight text-lg sm:text-xl bg-gradient-to-r from-brand-purple via-brand-purple-soft to-white bg-clip-text text-transparent'>Late Night Hero</div>
            </Link>
            <div className='hidden sm:flex items-center gap-6 text-sm text-white/80'>
              <a href='/oak-brook' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label='Oak Brook page'>Oak Brook</a>
              <a href='/ohare' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label="O'Hare page">O&#39;Hare</a>
              <a href='/fleet' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label='Fleet page'>Fleet</a>
              <a href='/about' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label='About page'>About</a>
              <a href='/rates' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label='Rates page'>Rates</a>
              <a href='/careers' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label='Careers page'>Careers</a>
              <a href='/faq' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label='FAQ page'>FAQ</a>
              <a href='/contact' className='hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/60 rounded-md px-1' aria-label='Contact page'>Contact</a>
            </div>
            <a href='/dispatch' className='btn btn-primary' aria-label='24/7 dispatch call link'>24/7 Dispatch</a>
          </nav>
        </header>
        {children}
        <StickyCTA />
        <footer className='mt-24 border-t border-white/10'>
          <div className='container py-10 text-white/70 text-sm grid gap-6 sm:grid-cols-4'>
            <div>
              <div className='font-bold text-white'>Late Night Hero Black Car</div>
              <p>Built from nothing • Syrian-owned • 8 years serving Chicago</p>
              <p className='mt-1'><a href='/about' className='underline hover:text-white'>About Nur Allababidi</a></p>
            </div>
            <div>
              <div className='font-semibold text-white'>Contact</div>
              <p>24/7 dispatch: <a href='tel:+17734308011' className='underline'>+1 (773) 430-8011</a></p>
              <p>Email: <a className='underline' href='mailto:nurallababidi@gmail.com'>nurallababidi@gmail.com</a></p>
              <p>Text/WhatsApp welcome.</p>
            </div>
            <div>
              <div className='font-semibold text-white'>Join Our Team</div>
              <p><a href='/careers' className='underline hover:text-white'>Driver opportunities</a></p>
              <p>Night shifts available</p>
              <p>Ford Expedition SUVs coming</p>
            </div>
            <div>
              <div className='font-semibold text-white'>Our Promise</div>
              <p>2000+ happy customers. Commercially insured. Professional drivers. Live tracking.</p>
            </div>
          </div>
          <div className='container py-6 small'>© {new Date().getFullYear()} Late Night Hero. All rights reserved.</div>
        </footer>
        <Analytics /><SpeedInsights />
        <Script id='ld-json' type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
      </body>
    </html>
  )
}

