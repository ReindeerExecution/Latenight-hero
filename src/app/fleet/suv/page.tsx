import Link from 'next/link'
import Image from 'next/image'
import BookingForm from '@/components/BookingForm'

export const metadata = {
  title: 'Black SUV Service • Late Night Hero',
  description: 'Premium black SUV transportation for groups up to 6 passengers. Extra luggage space, luxury amenities, professional drivers. Oak Brook & O\'Hare.'
}

export default function SUVPage() {
  return (
    <main className='container mt-12'>
      <div className='mb-8'>
        <Link href='/' className='text-brand-purple hover:text-white text-sm'>&larr; Back to Home</Link>
        <h1 className='h1 mt-4'>Black SUV Service</h1>
        <p className='text-lg text-white/80 mt-2'>Premium SUV transportation for larger groups and extra luggage</p>
      </div>

      {/* Hero Section */}
      <div className='relative aspect-video rounded-xl overflow-hidden mb-12'>
        <Image
          src='/expedition.png'
          alt='Ford Expedition SUV - Late Night Hero premium black SUV for group transportation'
          fill
          priority
          className='object-cover'
          sizes='(max-width: 800px) 100vw, 80vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='text-center'>
            <div className='w-24 h-24 bg-brand-purple/20 rounded-full mx-auto mb-6 flex items-center justify-center'>
              <svg className='w-12 h-12 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z' clipRule='evenodd' />
              </svg>
            </div>
            <h2 className='text-3xl font-bold text-white mb-2'>Premium SUV Experience</h2>
            <p className='text-white/90 text-lg'>Up to 6 passengers • Maximum comfort</p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className='grid gap-8 lg:grid-cols-2 mb-16'>
        <div>
          <h2 className='h2 mb-6'>SUV Advantages</h2>
          <div className='space-y-6'>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Group Transportation</h3>
              <p className='text-white/80'>Accommodate up to 6 passengers comfortably with captain&apos;s chairs and ample legroom for business or leisure travel.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Extra Luggage Space</h3>
              <p className='text-white/80'>Generous cargo capacity for airport transfers, shopping trips, or extended stays. Perfect for families and business travelers.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>All-Weather Performance</h3>
              <p className='text-white/80'>All-wheel drive capability and higher ground clearance provide confidence in Chicago&apos;s varying weather conditions.</p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-2'>Executive Presence</h3>
              <p className='text-white/80'>Professional appearance suitable for corporate events, client meetings, and special occasions.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className='h2 mb-6'>Vehicle Specifications</h2>
          <div className='card p-6'>
            <dl className='space-y-4'>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Passenger Capacity</dt>
                <dd className='font-semibold'>Up to 6 passengers</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Seating Configuration</dt>
                <dd className='font-semibold'>Captain&apos;s chairs</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Cargo Space</dt>
                <dd className='font-semibold'>84+ cu ft</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Drive Type</dt>
                <dd className='font-semibold'>All-Wheel Drive</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Ground Clearance</dt>
                <dd className='font-semibold'>8+ inches</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='text-white/70'>Towing Capacity</dt>
                <dd className='font-semibold'>5,000+ lbs</dd>
              </div>
            </dl>
          </div>
          
          <div className='card p-6 mt-6'>
            <h3 className='h3 mb-4'>Ideal For</h3>
            <ul className='space-y-2 text-white/80'>
              <li>• Airport transfers with multiple passengers</li>
              <li>• Corporate group transportation</li>
              <li>• Family events and celebrations</li>
              <li>• Shopping and leisure trips</li>
              <li>• Extended luggage requirements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Luxury Features */}
      <section className='mb-16'>
        <h2 className='h2 mb-8'>Premium SUV Amenities</h2>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div className='card p-6'>
            <h3 className='h3 mb-4'>Interior Comfort</h3>
            <ul className='space-y-2 text-white/80'>
              <li>• Leather-appointed seating</li>
              <li>• Tri-zone climate control</li>
              <li>• Power-adjustable seats</li>
              <li>• Heated and cooled seats</li>
              <li>• Premium sound system</li>
            </ul>
          </div>
          <div className='card p-6'>
            <h3 className='h3 mb-4'>Technology</h3>
            <ul className='space-y-2 text-white/80'>
              <li>• Large touchscreen display</li>
              <li>• Navigation system</li>
              <li>• Bluetooth connectivity</li>
              <li>• Multiple charging ports</li>
              <li>• Wi-Fi capability</li>
            </ul>
          </div>
          <div className='card p-6'>
            <h3 className='h3 mb-4'>Safety & Security</h3>
            <ul className='space-y-2 text-white/80'>
              <li>• Advanced airbag system</li>
              <li>• Blind spot monitoring</li>
              <li>• Rear cross-traffic alert</li>
              <li>• Automatic emergency braking</li>
              <li>• 360-degree camera system</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Professional Service */}
      <section className='mb-16'>
        <h2 className='h2 mb-8 text-center'>Why Choose Our SUV Service</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='card p-8'>
            <h3 className='h3 mb-4'>Professional Chauffeurs</h3>
            <p className='text-white/80 mb-4'>Our experienced drivers understand the unique requirements of SUV service, from smooth acceleration to careful navigation of parking areas.</p>
            <ul className='space-y-2 text-white/70'>
              <li>• Commercial driver&apos;s licenses</li>
              <li>• Defensive driving certification</li>
              <li>• Customer service training</li>
              <li>• Local area expertise</li>
            </ul>
          </div>
          <div className='card p-8'>
            <h3 className='h3 mb-4'>Service Standards</h3>
            <p className='text-white/80 mb-4'>Every SUV service includes attention to detail that makes your journey comfortable and stress-free.</p>
            <ul className='space-y-2 text-white/70'>
              <li>• Vehicle pre-inspection</li>
              <li>• Climate pre-conditioning</li>
              <li>• Luggage assistance</li>
              <li>• Route optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className='mb-16'>
        <div className='card p-8 text-center'>
          <h2 className='h3 mb-4'>SUV Service Rates</h2>
          <p className='text-white/80 mb-4'>Our SUV rates include the premium vehicle, professional chauffeur, and all standard amenities.</p>
          <div className='flex flex-wrap justify-center gap-4'>
            <Link href='/rates' className='btn btn-primary'>View Current Rates</Link>
            <a href='tel:+17734308011' className='btn btn-outline'>Call for Quote</a>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className='mb-16'>
        <div className='text-center mb-8'>
          <h2 className='h2 mb-4'>Reserve Your SUV</h2>
          <p className='text-white/80'>Book premium SUV transportation for your group</p>
        </div>
        <BookingForm />
      </section>
    </main>
  )
}