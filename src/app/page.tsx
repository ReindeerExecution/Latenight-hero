import BookingForm from '@/components/BookingForm'
import Image from 'next/image'
export const revalidate = 60
export default function Page() {
  return (
    <main>
      <section className='container mt-10'>
        <div className='grid gap-8 sm:grid-cols-2 items-center'>
          <div>
            <h1 className='h1'>Late Night Hero Black Car</h1>
            <p className='mt-4 text-lg text-white/80'>
              Syrian-owned luxury taxi & black car serving <strong>Oak Brook</strong>, <strong>O&#39;Hare</strong>, and greater Chicago.
              24/7 dispatch • Commercially insured • Professional, vetted drivers.
            </p>
            <div className='mt-6 flex gap-3'>
              <a href='#book' className='btn btn-primary' aria-label='Book now'>Book Now</a>
              <a href='/rates' className='btn btn-outline' aria-label='View rates'>View Rates</a>
            </div>
            <p className='mt-3 small'>Why riders choose us: predictable pricing, clean late-model sedans & SUVs, meet-and-greet on request, local expertise.</p>
          </div>
          <div className='card p-4'>
            <div className='relative aspect-video'>
              <Image
                src='/mkz.jpg.png'
                alt='Late Night Hero black sedan at night in Oak Brook parking lot'
                fill
                priority
                className='rounded-xl object-cover'
                sizes='(max-width: 800px) 100vw, 50vw'
              />
              <div className='absolute inset-0 rounded-xl bg-gradient-to-tr from-black/60 via-black/20 to-black/0 pointer-events-none' />
            </div>
          </div>
        </div>
      </section>

      <section id='fleet' className='container my-16' aria-label='Fleet'>
        <div className='h2 mb-6'>Our Fleet</div>
        <div className='grid gap-6 sm:grid-cols-3'>
          <div className='card p-0 overflow-hidden'>
            <div className='relative h-40'>
              <Image src='/mkz.jpg.png' alt='Black sedan exterior at night' fill className='object-cover' sizes='(max-width: 800px) 100vw, 33vw' />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
            </div>
            <div className='p-5'>
              <div className='h3 mb-1'>Black Sedan</div>
              <div className='small'>2–3 passengers • Business-class comfort</div>
            </div>
          </div>
          <div className='card p-5'><div className='h3 mb-1'>Black SUV</div><div className='small'>Up to 6 passengers • Extra luggage</div></div>
          <div className='card p-5'><div className='h3 mb-1'>Airport Meet & Greet</div><div className='small'>Driver with sign • Baggage assistance</div></div>
        </div>
      </section>

      <section id='rates' className='container my-16' aria-label='Rates'>
        <div className='h2 mb-4'>Sample Flat Rate</div>
        <div className='grid gap-4 sm:grid-cols-3'>
          <div className='card p-5'>
            <div className='h3'>O&#39;Hare → Downtown</div>
            <div className='mt-2 text-white/85'>$179 base + tax + 20% tip required</div>
          </div>
          <div className='card p-5'>
            <div className='h3'>Oak Brook ↔ O&#39;Hare</div>
            <div className='mt-2 text-white/85'>Metered or upfront quote on request</div>
          </div>
          <div className='card p-5'>
            <div className='h3'>Oak Brook ↔ Downtown</div>
            <div className='mt-2 text-white/85'>Metered or upfront quote on request</div>
          </div>
        </div>
        <p className='small mt-3'>Exact price confirmed by dispatcher before pickup. Hourly and long-distance available.</p>
      </section>

      <section className='container my-16' aria-label='Why choose us'>
        <div className='h2 mb-4'>Why riders choose us</div>
        <ul className='grid gap-4 sm:grid-cols-2'>
          <li className='card p-5'>Commercially insured vehicles and professional, vetted drivers.</li>
          <li className='card p-5'>Transparent pricing: metered or upfront with tax + tip.</li>
          <li className='card p-5'>Local dispatch you can call or text 24/7. Real human support.</li>
          <li className='card p-5'>Meet-and-greet, child seats on request, and flexible stops.</li>
        </ul>
      </section>

      <BookingForm />
    </main>
  )
}
