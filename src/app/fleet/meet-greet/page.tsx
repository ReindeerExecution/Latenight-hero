import Link from 'next/link'
import BookingForm from '@/components/BookingForm'

export const metadata = {
  title: 'Airport Meet & Greet Service • Late Night Hero',
  description: 'Professional airport meet and greet service at O\'Hare. Your chauffeur will meet you with a sign, assist with luggage, and ensure smooth transfers.'
}

export default function MeetGreetPage() {
  return (
    <main className='container mt-12'>
      <div className='mb-8'>
        <Link href='/' className='text-brand-purple hover:text-white text-sm'>&larr; Back to Home</Link>
        <h1 className='h1 mt-4'>Airport Meet & Greet</h1>
        <p className='text-lg text-white/80 mt-2'>Professional chauffeur service with personalized airport assistance</p>
      </div>

      {/* Hero Section - Placeholder for driver image */}
      <div className='relative aspect-video rounded-xl overflow-hidden mb-12 bg-gradient-to-br from-gray-800 to-gray-900'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center'>
            <div className='w-24 h-24 bg-brand-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center'>
              <svg className='w-12 h-12 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
              </svg>
            </div>
            <h2 className='text-3xl font-bold text-white mb-2'>Professional Meet & Greet</h2>
            <p className='text-white/90 text-lg'>Your driver will be waiting with a sign</p>
            <p className='text-white/70 text-sm mt-2'>(Driver photo will display here once uploaded)</p>
          </div>
        </div>
      </div>

      {/* Service Process */}
      <section className='mb-16'>
        <h2 className='h2 mb-8 text-center'>How Our Meet & Greet Works</h2>
        <div className='grid gap-8 md:grid-cols-3'>
          <div className='text-center'>
            <div className='w-16 h-16 bg-brand-purple text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold'>1</div>
            <h3 className='h3 mb-2'>Flight Monitoring</h3>
            <p className='text-white/80'>We track your flight in real-time and adjust pickup timing for delays or early arrivals.</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-brand-purple text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold'>2</div>
            <h3 className='h3 mb-2'>Meet Inside Terminal</h3>
            <p className='text-white/80'>Your chauffeur waits in the arrival area with a &apos;Late Night Hero&apos; sign displaying your name.</p>
          </div>
          <div className='text-center'>
            <div className='w-16 h-16 bg-brand-purple text-white rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold'>3</div>
            <h3 className='h3 mb-2'>Luggage Assistance</h3>
            <p className='text-white/80'>Professional assistance with luggage handling and escort to your waiting luxury vehicle.</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className='grid gap-8 lg:grid-cols-2 mb-16'>
        <div>
          <h2 className='h2 mb-6'>What&apos;s Included</h2>
          <div className='space-y-6'>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Flight Tracking</h3>
              <p className='text-white/80'>Complimentary flight monitoring ensures your driver is there when you land, regardless of delays.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Terminal Meet</h3>
              <p className='text-white/80'>Your chauffeur waits inside the terminal at baggage claim or arrival gate with a professional sign.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Luggage Service</h3>
              <p className='text-white/80'>Full assistance with collecting and loading luggage into your luxury vehicle.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>No Extra Fees</h3>
              <p className='text-white/80'>Meet and greet service included at no additional charge for all O&apos;Hare pickups.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className='h2 mb-6'>Professional Standards</h2>
          <div className='card p-6'>
            <h3 className='h3 mb-4'>Driver Qualifications</h3>
            <ul className='space-y-3 text-white/80'>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0'></div>
                <span>Commercial driver&apos;s license with passenger endorsement</span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0'></div>
                <span>Comprehensive background check and drug screening</span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0'></div>
                <span>Professional appearance and customer service training</span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0'></div>
                <span>O&apos;Hare terminal navigation expertise</span>
              </li>
              <li className='flex items-start gap-3'>
                <div className='w-2 h-2 bg-brand-purple rounded-full mt-2 flex-shrink-0'></div>
                <span>Fluent English communication skills</span>
              </li>
            </ul>
          </div>

          <div className='card p-6 mt-6'>
            <h3 className='h3 mb-4'>Service Guarantee</h3>
            <p className='text-white/80 mb-4'>We guarantee professional, reliable meet and greet service for every O&apos;Hare arrival.</p>
            <ul className='space-y-2 text-white/70'>
              <li>• On-time arrival at terminal</li>
              <li>• Professional appearance and demeanor</li>
              <li>• Courteous luggage assistance</li>
              <li>• Clean, comfortable vehicle</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Airport Terminals */}
      <section className='mb-16'>
        <h2 className='h2 mb-8'>O&apos;Hare Terminal Coverage</h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          <div className='card p-6 text-center'>
            <div className='text-2xl font-bold text-brand-purple mb-2'>T1</div>
            <h3 className='h3 mb-2'>Terminal 1</h3>
            <p className='text-white/70 text-sm'>Domestic flights</p>
            <p className='text-white/70 text-sm'>Lower level arrivals</p>
          </div>
          <div className='card p-6 text-center'>
            <div className='text-2xl font-bold text-brand-purple mb-2'>T2</div>
            <h3 className='h3 mb-2'>Terminal 2</h3>
            <p className='text-white/70 text-sm'>Domestic flights</p>
            <p className='text-white/70 text-sm'>Lower level arrivals</p>
          </div>
          <div className='card p-6 text-center'>
            <div className='text-2xl font-bold text-brand-purple mb-2'>T3</div>
            <h3 className='h3 mb-2'>Terminal 3</h3>
            <p className='text-white/70 text-sm'>Domestic flights</p>
            <p className='text-white/70 text-sm'>Lower level arrivals</p>
          </div>
          <div className='card p-6 text-center'>
            <div className='text-2xl font-bold text-brand-purple mb-2'>T5</div>
            <h3 className='h3 mb-2'>Terminal 5</h3>
            <p className='text-white/70 text-sm'>International flights</p>
            <p className='text-white/70 text-sm'>Immigration/Customs area</p>
          </div>
        </div>
      </section>

      {/* Customer Experience */}
      <section className='mb-16'>
        <h2 className='h2 mb-8 text-center'>Why Choose Our Meet & Greet</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='card p-8'>
            <h3 className='h3 mb-4'>Stress-Free Travel</h3>
            <p className='text-white/80 mb-4'>Navigate O&apos;Hare with confidence knowing your professional chauffeur is waiting to assist you.</p>
            <ul className='space-y-2 text-white/70'>
              <li>• No searching for transportation</li>
              <li>• No waiting in taxi or rideshare lines</li>
              <li>• No dragging luggage through terminals</li>
              <li>• Direct escort to luxury vehicle</li>
            </ul>
          </div>
          <div className='card p-8'>
            <h3 className='h3 mb-4'>Business Traveler Benefits</h3>
            <p className='text-white/80 mb-4'>Professional service that reflects your business standards and saves valuable time.</p>
            <ul className='space-y-2 text-white/70'>
              <li>• Make calls during transport</li>
              <li>• Arrive refreshed at meetings</li>
              <li>• Professional image enhancement</li>
              <li>• Reliable schedule adherence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className='mb-16'>
        <div className='card p-8 text-center'>
          <h2 className='h3 mb-4'>Reserve Meet & Greet Service</h2>
          <p className='text-white/80 mb-6'>Meet and greet service is included with all O&apos;Hare airport transfers. Simply provide your flight details when booking.</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a href='tel:+17734308011' className='btn btn-primary'>Call to Book</a>
            <Link href='/rates' className='btn btn-outline'>View Rates</Link>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className='mb-16'>
        <div className='text-center mb-8'>
          <h2 className='h2 mb-4'>Book Your Airport Transfer</h2>
          <p className='text-white/80'>Include your flight details for complimentary meet and greet service</p>
        </div>
        <BookingForm />
      </section>
    </main>
  )
}