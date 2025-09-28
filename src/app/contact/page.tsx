import Link from 'next/link'

export const metadata = {
  title: 'Contact Late Night Hero',
  description: '24/7 dispatch service for Chicago area luxury black car service. Now hiring drivers!'
}

export default function ContactPage() {
  return (
    <main className='container mt-12'>
      <div className='text-center mb-12'>
        <h1 className='h1 mb-4'>Contact Late Night Hero</h1>
        <p className='text-lg text-white/80'>
          24/7 dispatch service for luxury black car transportation.
        </p>
      </div>

      <section className='grid gap-8 md:grid-cols-3 mb-16'>
        <div className='card p-8 text-center'>
          <h2 className='h3 mb-4'>24/7 Dispatch</h2>
          <a href='tel:+17734308011' className='text-2xl font-bold text-brand-purple hover:text-white'>
            (773) 430-8011
          </a>
          <p className='text-white/70 text-sm mt-2'>Call or text anytime</p>
        </div>

        <div className='card p-8 text-center'>
          <h2 className='h3 mb-4'>Email</h2>
          <a href='mailto:nurallababidi@gmail.com' className='text-lg text-brand-purple hover:text-white break-all'>
            nurallababidi@gmail.com
          </a>
          <p className='text-white/70 text-sm mt-2'>Response within 2-4 hours</p>
        </div>
        <div className='card p-8 text-center'>
          <h2 className='h3 mb-4'>WhatsApp</h2>
          <a href='https://wa.me/17734308011' className='text-lg text-brand-purple hover:text-white' target='_blank' rel='noopener noreferrer'>
            Message Us
          </a>
          <p className='text-white/70 text-sm mt-2'>Quick booking requests</p>
        </div>
      </section>

      <section className='mb-16'>
        <div className='card p-8 text-center bg-gradient-to-r from-brand-purple/10 to-brand-purple/5'>
          <h2 className='h2 mb-4'>Want to Join Our Team?</h2>
          <p className='text-lg text-white/80 mb-6'>
            We're expanding! Looking for professional drivers with SUVs or sedans throughout the Chicago area. Perfect for night shifts and excellent income.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/careers' className='btn btn-primary text-lg px-8 py-3'>
              Apply Now
            </Link>
            <a href='tel:+17734308011' className='btn btn-outline text-lg px-8 py-3'>
              Call to Discuss
            </a>
          </div>
          <p className='text-white/70 text-sm mt-4'>All Chicago suburbs welcome  Flexible schedules</p>
        </div>
      </section>
    </main>
  )
}
