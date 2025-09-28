import Image from 'next/image'
import Link from 'next/link'

export default function DiscreetService() {
  return (
    <>
      <section className='bg-gradient-to-br from-brand-purple via-purple-800 to-slate-900 text-white pt-32 pb-16'>
        <div className='container max-w-4xl text-center'>
          <div className='mb-6 inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg'>
            🎉 LIMITED TIME: 30% OFF ALL RIDES
          </div>
          <h1 className='display-sm mb-4'>Discreet Service</h1>
          <p className='large text-slate-200 max-w-2xl mx-auto'>
            Professional, affordable transportation in our reliable Honda CRV. 
            Ehab will pick you up wherever you are with complete discretion and professionalism.
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='container max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-2 items-center'>
            <div>
              <div className='relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl'>
                <Image 
                  src='/honda.jpg.png' 
                  alt='Discreet Honda CRV for private transportation' 
                  fill 
                  className='object-cover' 
                  sizes='(max-width: 800px) 100vw, 50vw'
                />
              </div>
            </div>
            <div className='space-y-6'>
              <div>
                <h2 className='h2 mb-4'>2008 Honda CRV</h2>
                <p className='body text-slate-600 mb-6'>
                  Our discreet service offers reliable, professional transportation at an affordable price. 
                  Perfect for those who need dependable rides without the luxury car experience.
                </p>
              </div>
              
              <div className='bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg'>
                <div className='flex items-center gap-2 mb-2'>
                  <span className='text-2xl'>🔥</span>
                  <div className='font-bold text-red-700'>Special Promotion</div>
                </div>
                <div className='text-red-600 font-semibold'>
                  Save 30% on all rides with our Honda CRV service
                </div>
                <div className='text-sm text-red-500 mt-1'>
                  Limited time offer • Book now to secure your discount
                </div>
              </div>

              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-4 h-4 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <div className='font-medium mb-1'>Ehab Picks You Up</div>
                    <div className='small text-slate-600'>Door-to-door service anywhere in our coverage area</div>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-4 h-4 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <div className='font-medium mb-1'>Discreet & Professional</div>
                    <div className='small text-slate-600'>Clean, reliable vehicle with courteous service</div>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-4 h-4 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <div className='font-medium mb-1'>Affordable Pricing</div>
                    <div className='small text-slate-600'>Budget-friendly rates with 30% promotional discount</div>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-8 h-8 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-1'>
                    <svg className='w-4 h-4 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <div className='font-medium mb-1'>Up to 4 Passengers</div>
                    <div className='small text-slate-600'>Comfortable seating for small groups</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-slate-50'>
        <div className='container max-w-4xl'>
          <div className='text-center mb-12'>
            <h2 className='h2 mb-4'>Perfect for Every Occasion</h2>
            <p className='body text-slate-600 max-w-2xl mx-auto'>
              Our discreet service provides reliable transportation for when you need to get somewhere 
              without the premium of a luxury vehicle.
            </p>
          </div>
          
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='bg-white rounded-xl p-6 text-center shadow-sm'>
              <div className='text-3xl mb-3'>🏠</div>
              <div className='font-medium mb-2'>Personal Errands</div>
              <div className='small text-slate-600'>Grocery runs, appointments, personal business</div>
            </div>
            <div className='bg-white rounded-xl p-6 text-center shadow-sm'>
              <div className='text-3xl mb-3'>✈️</div>
              <div className='font-medium mb-2'>Airport Budget</div>
              <div className='small text-slate-600'>Affordable airport transfers when luxury isn&apos;t needed</div>
            </div>
            <div className='bg-white rounded-xl p-6 text-center shadow-sm'>
              <div className='text-3xl mb-3'>🌙</div>
              <div className='font-medium mb-2'>Late Night Rides</div>
              <div className='small text-slate-600'>Safe, reliable transportation any time of day</div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container max-w-4xl text-center'>
          <div className='bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 md:p-12'>
            <div className='text-4xl mb-4'>🎯</div>
            <h2 className='h2 mb-4 text-white'>Ready to Save 30%?</h2>
            <p className='large mb-8 text-red-100 max-w-2xl mx-auto'>
              Book your discreet Honda CRV service today and save with our limited-time promotion. 
              Professional service, reliable vehicle, unbeatable price.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/contact' className='btn btn-white'>
                Book Your Ride Now
              </Link>
              <Link href='tel:+1-555-HERO-NOW' className='btn btn-white btn-outline border-white text-white hover:bg-white hover:text-red-600'>
                Call +1 (555) HERO-NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}