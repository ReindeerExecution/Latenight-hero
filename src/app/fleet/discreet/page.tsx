import Image from 'next/image'
import Link from 'next/link'

export default function DiscreetService() {
  return (
    <>
      <section className='bg-gradient-to-br from-brand-purple via-purple-700 to-indigo-900 text-white pt-32 pb-16'>
        <div className='container max-w-4xl text-center'>
          <div className='mb-6 inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse'>
            🎉 LIMITED TIME: 30% OFF ALL RIDES
          </div>
          <h1 className='display-sm mb-4 text-white'>Our Most Popular Service</h1>
          <p className='large text-purple-100 max-w-2xl mx-auto'>
            Meet Ehab - your professional, reliable driver in our Honda CRV. 
            Experience Chicago&apos;s most trusted transportation service with unbeatable value.
          </p>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-white to-slate-50'>
        <div className='container max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-2 items-center'>
            <div>
              <div className='relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-red-500'>
                <Image 
                  src='/honda.jpg' 
                  alt='Ehab&apos;s Honda CRV for premium discreet transportation' 
                  fill 
                  className='object-cover' 
                  sizes='(max-width: 800px) 100vw, 50vw'
                />
                <div className='absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                  30% OFF
                </div>
              </div>
            </div>
            <div className='space-y-6'>
              <div>
                <h2 className='h2 mb-4 text-gray-900'>Meet Your Driver: Ehab</h2>
                <p className='text-lg text-gray-700 mb-6 leading-relaxed'>
                  Ehab brings years of professional driving experience to every ride. His Honda CRV 
                  offers the perfect balance of comfort, reliability, and discretion for your transportation needs.
                </p>
              </div>
              
              <div className='bg-gradient-to-r from-red-50 to-blue-50 border-l-4 border-red-500 p-6 rounded-r-xl shadow-lg'>
                <div className='flex items-center gap-2 mb-3'>
                  <span className='text-2xl'>🔥</span>
                  <div className='font-bold text-red-700 text-lg'>Tommy Hilfiger Special</div>
                </div>
                <div className='text-red-600 font-semibold text-lg mb-2'>
                  Save 30% on all rides - Classic American Style
                </div>
                <div className='text-blue-600 text-sm'>
                  Limited time offer • Premium service at unbeatable prices
                </div>
              </div>

              <div className='grid gap-6 sm:grid-cols-2'>
                <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-red-500 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-gray-900'>Ehab Picks You Up</div>
                  </div>
                  <div className='text-gray-600'>Professional door-to-door service anywhere in Chicago</div>
                </div>
                
                <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-gray-900'>Premium Experience</div>
                  </div>
                  <div className='text-gray-600'>Clean Honda CRV with professional service standards</div>
                </div>
                
                <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-gray-900'>Unbeatable Value</div>
                  </div>
                  <div className='text-gray-600'>30% discount on professional transportation service</div>
                </div>
                
                <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='w-10 h-10 rounded-full bg-green-500 flex items-center justify-center'>
                      <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <div className='font-bold text-gray-900'>Up to 4 Passengers</div>
                  </div>
                  <div className='text-gray-600'>Comfortable seating for individuals and small groups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-slate-50 to-white'>
        <div className='container max-w-4xl'>
          <div className='text-center mb-12'>
            <h2 className='h2 mb-4 text-gray-900'>Perfect for Every Journey</h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Ehab&apos;s professional service adapts to your needs, whether it&apos;s daily transportation 
              or special occasions throughout Chicago.
            </p>
          </div>
          
          <div className='grid gap-6 md:grid-cols-3'>
            <div className='bg-white rounded-2xl p-8 text-center shadow-xl border border-red-100 hover:shadow-2xl transition-shadow'>
              <div className='text-4xl mb-4'>🏠</div>
              <div className='font-bold text-xl mb-3 text-gray-900'>Daily Essentials</div>
              <div className='text-gray-600 leading-relaxed'>Grocery runs, appointments, errands - Ehab makes your daily life easier</div>
            </div>
            <div className='bg-white rounded-2xl p-8 text-center shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow'>
              <div className='text-4xl mb-4'>✈️</div>
              <div className='font-bold text-xl mb-3 text-gray-900'>Airport Budget</div>
              <div className='text-gray-600 leading-relaxed'>Professional airport transfers at 30% off - luxury service, budget price</div>
            </div>
            <div className='bg-white rounded-2xl p-8 text-center shadow-xl border border-purple-100 hover:shadow-2xl transition-shadow'>
              <div className='text-4xl mb-4'>🌙</div>
              <div className='font-bold text-xl mb-3 text-gray-900'>Late Night Rides</div>
              <div className='text-gray-600 leading-relaxed'>Safe, reliable transportation when you need it most</div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-br from-red-600 via-purple-600 to-blue-600'>
        <div className='container max-w-4xl text-center'>
          <div className='bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20'>
            <div className='text-5xl mb-6'>🚗</div>
            <h2 className='h2 mb-6 text-white'>Ready to Ride with Ehab?</h2>
            <p className='large mb-8 text-white/90 max-w-2xl mx-auto'>
              Choose Chicago&apos;s most popular driver and save 30% on professional transportation. 
              Tommy Hilfiger style meets Late Night Hero quality.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link href='/book-ehab' className='bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl'>
                Book Your Ride with Ehab
              </Link>
              <Link href='tel:+1-555-HERO-NOW' className='bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors border-2 border-white/40 backdrop-blur'>
                Call +1 (555) HERO-NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}