import Image from 'next/image'
import Link from 'next/link'
import BookingForm from '@/components/BookingForm'

export const metadata = {
  title: 'Lincoln MKZ Black Sedan • Late Night Hero',
  description: 'Luxury Lincoln MKZ sedan service with professional drivers. Business-class comfort, premium leather, advanced safety features. Oak Brook & O\'Hare.'
}

export default function SedanPage() {
  return (
    <main className='container mt-12'>
      <div className='mb-8'>
        <Link href='/' className='text-brand-purple hover:text-white text-sm'>&larr; Back to Home</Link>
        <h1 className='h1 mt-4'>Lincoln MKZ Black Sedan</h1>
        <p className='text-lg text-white/80 mt-2'>Premium luxury sedan with professional chauffeur service</p>
      </div>

      {/* Hero Image */}
      <div className='relative aspect-video rounded-xl overflow-hidden mb-12'>
        <Image
          src='/mkz.jpg.png'
          alt='Lincoln MKZ luxury sedan exterior at night'
          fill
          priority
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent' />
        <div className='absolute bottom-6 left-6'>
          <h2 className='text-2xl font-bold text-white'>Business-Class Luxury</h2>
          <p className='text-white/90'>2-3 passengers • Premium comfort</p>
        </div>
      </div>

      {/* Key Features */}
      <section className='grid gap-8 lg:grid-cols-2 mb-16'>
        <div>
          <h2 className='h2 mb-6'>Why Choose Our Lincoln MKZ</h2>
          <div className='space-y-6'>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Luxury Interior</h3>
              <p className='text-white/80'>Premium leather seating, ambient lighting, and climate control ensure maximum comfort during your journey.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Advanced Safety</h3>
              <p className='text-white/80'>Equipped with Lincoln Co-Pilot360™ suite including blind spot monitoring, lane-keeping assist, and automatic emergency braking.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Quiet Cabin</h3>
              <p className='text-white/80'>Acoustic-laminated glass and sound-dampening materials create a serene environment for business calls or relaxation.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className='h2 mb-6'>Vehicle Specifications</h2>
          <div className='card p-6'>
            <dl className='space-y-4'>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Passenger Capacity</dt>
                <dd className='font-semibold'>2-3 passengers</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Luggage Capacity</dt>
                <dd className='font-semibold'>15.4 cu ft trunk</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Engine</dt>
                <dd className='font-semibold'>2.0L Turbocharged</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Transmission</dt>
                <dd className='font-semibold'>6-Speed Automatic</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Fuel Economy</dt>
                <dd className='font-semibold'>23 city / 33 hwy mpg</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Length</dt>
                <dd className='font-semibold'>191.3 inches</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Professional Drivers */}
      <section className='mb-16'>
        <h2 className='h2 mb-8 text-center'>Professional Chauffeur Service</h2>
        <div className='grid gap-8 md:grid-cols-3'>
          <div className='card p-6 text-center'>
            <div className='w-16 h-16 bg-brand-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <svg className='w-8 h-8 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
              </svg>
            </div>
            <h3 className='h3 mb-2'>Licensed & Insured</h3>
            <p className='text-white/80 text-sm'>All drivers hold valid commercial licenses and comprehensive insurance coverage.</p>
          </div>
          <div className='card p-6 text-center'>
            <div className='w-16 h-16 bg-brand-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <svg className='w-8 h-8 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
            </div>
            <h3 className='h3 mb-2'>Background Verified</h3>
            <p className='text-white/80 text-sm'>Comprehensive background checks and drug screenings ensure passenger safety.</p>
          </div>
          <div className='card p-6 text-center'>
            <div className='w-16 h-16 bg-brand-purple/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
              <svg className='w-8 h-8 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
              </svg>
            </div>
            <h3 className='h3 mb-2'>Local Expertise</h3>
            <p className='text-white/80 text-sm'>Experienced with Chicago area routes, traffic patterns, and premium service standards.</p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className='mb-16'>
        <h2 className='h2 mb-8'>Standard Amenities</h2>
        <div className='grid gap-6 md:grid-cols-2'>
          <div className='card p-6'>
            <h3 className='h3 mb-4'>Comfort Features</h3>
            <ul className='space-y-2 text-white/80'>
              <li>• Premium leather-trimmed seating</li>
              <li>• Dual-zone climate control</li>
              <li>• Power-adjustable front seats</li>
              <li>• Ambient interior lighting</li>
              <li>• Tinted rear windows</li>
            </ul>
          </div>
          <div className='card p-6'>
            <h3 className='h3 mb-4'>Technology & Safety</h3>
            <ul className='space-y-2 text-white/80'>
              <li>• SYNC® 3 infotainment system</li>
              <li>• Blind Spot Information System</li>
              <li>• Lane-Keeping System</li>
              <li>• Automatic Emergency Braking</li>
              <li>• Mobile phone integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className='mb-16'>
        <div className='text-center mb-8'>
          <h2 className='h2 mb-4'>Book Your Lincoln MKZ</h2>
          <p className='text-white/80'>Experience luxury transportation with professional service</p>
        </div>
        <BookingForm />
      </section>
    </main>
  )
}