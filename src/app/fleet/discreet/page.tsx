import Image from 'next/image'
import Link from 'next/link'

export default function DiscreetService() {
  return (
    <>
      <section className='bg-gradient-to-br from-brand-purple via-purple-800 to-slate-900 text-white pt-32 pb-16'>
        <div className='container max-w-4xl text-center'>
          <div className='mb-6 inline-flex items-center gap-2 bg-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse'>
            🎉 LIMITED TIME: 30% OFF ALL RIDES
          </div>
          <h1 className='display-sm mb-4 text-white'>Our Most Popular Service</h1>
          <p className='large text-purple-100 max-w-2xl mx-auto'>
            Meet Ehab - your professional, reliable driver in our Honda CRV. 
            Experience Chicago&apos;s most trusted transportation service with unbeatable value.
          </p>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900'>
        <div className='container max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-2 items-center'>
            <div>
              <div className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-500'>
                <Image 
                  src='/honda.jpg' 
                  alt='Ehab&apos;s Honda CRV for premium discreet transportation' 
                  fill 
                  className='object-cover' 
                  sizes='(max-width: 800px) 100vw, 50vw'
                />
                <div className='absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                  30% OFF
                </div>
              </div>
            </div>
            <div className='space-y-6'>
              <div>
                <h2 className='h2 mb-4 text-white'>Meet Your Driver: Ehab</h2>
                <p className='text-lg text-gray-300 mb-6 leading-relaxed'>
                  Ehab brings years of professional driving experience to every ride. His Honda CRV 
                  offers the perfect balance of comfort, reliability, and discretion for your transportation needs.
                </p>
              </div>
              
              <div className='bg-gradient-to-r from-purple-900/50 to-gray-800/50 border-l-4 border-purple-500 p-6 rounded-r-xl shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-2xl'>🔥</span>
                  <div className='font-bold text-purple-400 text-lg'>Premium Special</div>
                </div>
                <div className='text-purple-300 font-semibold text-lg mb-2'>
                  Save 30% on all rides - Premium Style
                </div>
                <div className='text-gray-400 text-sm'>
                  Limited time offer • Premium service at unbeatable prices
                </div>
              </div>

              <div className='grid gap-6 sm:grid-cols-2'>
                <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-purple-400/30'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-white'>Ehab Picks You Up</div>
                  </div>
                  <div className='text-gray-300'>Professional door-to-door service anywhere in Chicago</div>
                </div>
                
                <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-purple-400/30'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-white'>Premium Experience</div>
                  </div>
                  <div className='text-gray-300'>Clean Honda CRV with professional service standards</div>
                </div>
                
                <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-purple-400/30'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-white'>Unbeatable Value</div>
                  </div>
                  <div className='text-gray-300'>30% discount on professional transportation service</div>
                </div>
                
                <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-purple-400/30'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-white'>Up to 4 Passengers</div>
                  </div>
                  <div className='text-gray-300'>Comfortable seating for individuals and small groups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-slate-800 to-gray-900'>
        <div className='container max-w-4xl'>
          <div className='text-center mb-12'>
            <h2 className='h2 mb-6 text-white'>Book Your Ride with Ehab</h2>
            <p className='text-lg text-gray-300 max-w-2xl mx-auto'>
              Ready to experience Chicago&apos;s most popular transportation service? 
              Contact Ehab directly for instant booking and 30% savings.
            </p>
          </div>
          
          <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-purple-400/30'>
            <div className='grid gap-8 md:grid-cols-2'>
              <div className='text-center md:text-left'>
                <h3 className='h3 mb-4 text-white'>Contact Information</h3>
                <div className='space-y-4'>
                  <div className='flex items-center gap-3 justify-center md:justify-start'>
                    <div className='w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                      </svg>
                    </div>
                    <div>
                      <div className='text-white font-medium'>Phone</div>
                      <div className='text-purple-300'>(773) 920-0030</div>
                    </div>
                  </div>
                  
                  <div className='flex items-center gap-3 justify-center md:justify-start'>
                    <div className='w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                      </svg>
                    </div>
                    <div>
                      <div className='text-white font-medium'>Email</div>
                      <div className='text-purple-300'>defcon5ready@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='text-center'>
                <h3 className='h3 mb-6 text-white'>Book Now</h3>
                <Link 
                  href='/book-ehab'
                  className='inline-block w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-purple-500/25'
                >
                  Book Ehab&apos;s Honda CRV - 30% Off
                </Link>
                <p className='text-gray-400 text-sm mt-4'>
                  Call or text for immediate booking • Available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}