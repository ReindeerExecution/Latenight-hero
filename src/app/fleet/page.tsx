import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Fleet - Late Night Hero Premium Vehicles',
  description: 'Explore our premium fleet: Lincoln MKZ sedan, Ford Expedition SUV, and Honda CRV with professional drivers. Chicago\'s finest transportation.'
}

export default function FleetPage(){
  return (
    <main>
      <section className='bg-gradient-to-br from-brand-purple via-purple-800 to-slate-900 text-white pt-32 pb-16'>
        <div className='container max-w-4xl text-center'>
          <h1 className='display-sm mb-6'>Our Premium Fleet</h1>
          <p className='large text-purple-100 max-w-2xl mx-auto'>
            Three exceptional vehicles, one uncompromising standard of excellence. 
            Choose the perfect ride for your journey across Chicago.
          </p>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900'>
        <div className='container max-w-6xl'>
          <div className='grid gap-12 lg:grid-cols-3'>
            
            {/* Lincoln MKZ Sedan */}
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-purple-400/30 hover:shadow-3xl hover:border-purple-400/50 transition-all duration-300'>
              <div className='relative h-64'>
                <Image 
                  src='/mkz.jpg' 
                  alt='Lincoln MKZ luxury sedan for business transportation' 
                  fill 
                  className='object-cover' 
                  sizes='(max-width: 800px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent' />
                <div className='absolute bottom-4 left-4'>
                  <div className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                    Premium Sedan
                  </div>
                </div>
              </div>
              <div className='p-8'>
                <h2 className='h2 mb-4 text-white'>Lincoln MKZ</h2>
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  Our flagship luxury sedan offers premium comfort for business executives and discerning travelers. 
                  Leather seating, climate control, and whisper-quiet ride quality.
                </p>
                
                <div className='grid gap-4 mb-6'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-300'>2-3 passengers</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-300'>Business-class comfort</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-300'>Premium luggage space</span>
                  </div>
                </div>

                <Link 
                  href='/fleet/sedan' 
                  className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center block'
                >
                  Learn More About Lincoln MKZ
                </Link>
              </div>
            </div>

            {/* Ford Expedition SUV */}
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-purple-400/30 hover:shadow-3xl hover:border-purple-400/50 transition-all duration-300'>
              <div className='relative h-64'>
                <Image 
                  src='/expedition.jpg' 
                  alt='Ford Expedition SUV for group transportation' 
                  fill 
                  className='object-cover' 
                  sizes='(max-width: 800px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent' />
                <div className='absolute bottom-4 left-4'>
                  <div className='bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                    Premium SUV
                  </div>
                </div>
              </div>
              <div className='p-8'>
                <h2 className='h2 mb-4 text-white'>Ford Expedition</h2>
                <p className='text-gray-300 mb-6 leading-relaxed'>
                  Spacious luxury SUV perfect for groups, families, or when you need extra luggage capacity. 
                  Premium seating for up to 6 passengers with captain&apos;s chairs.
                </p>
                
                <div className='grid gap-4 mb-6'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-300'>Up to 6 passengers</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-300'>Maximum luggage space</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-purple-400' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-300'>Group transportation</span>
                  </div>
                </div>

                <Link 
                  href='/fleet/suv' 
                  className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center block'
                >
                  Learn More About Ford Expedition
                </Link>
              </div>
            </div>

            {/* Honda CRV */}
            <div className='bg-white rounded-2xl shadow-2xl overflow-hidden border border-red-200 hover:shadow-3xl transition-shadow duration-300 relative'>
              <div className='absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg'>
                30% OFF
              </div>
              <div className='relative h-64'>
                <Image 
                  src='/honda.jpg' 
                  alt='Honda CRV for affordable professional transportation' 
                  fill 
                  className='object-cover' 
                  sizes='(max-width: 800px) 100vw, 33vw'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
                <div className='absolute bottom-4 left-4'>
                  <div className='bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold'>
                    Most Popular
                  </div>
                </div>
              </div>
              <div className='p-8'>
                <h2 className='h2 mb-4 text-gray-900'>2008 Honda CRV</h2>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  Our most popular service with driver Ehab. Reliable, professional transportation 
                  at an unbeatable value with our exclusive 30% discount.
                </p>
                
                <div className='grid gap-4 mb-6'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-red-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-700'>Up to 4 passengers</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-red-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-700'>Ehab will pick you up</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center'>
                      <svg className='w-4 h-4 text-red-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                    </div>
                    <span className='text-gray-700'>30% discount included</span>
                  </div>
                </div>

                <Link 
                  href='/fleet/discreet' 
                  className='w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors text-center block'
                >
                  Book with Ehab - 30% Off
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-br from-slate-100 to-white'>
        <div className='container max-w-4xl text-center'>
          <h2 className='h2 mb-8 text-gray-900'>Why Choose Our Fleet?</h2>
          <div className='grid gap-8 md:grid-cols-3'>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
              <div className='text-4xl mb-4'>🚗</div>
              <h3 className='font-bold text-gray-900 mb-2'>Premium Vehicles</h3>
              <p className='text-gray-600'>Clean, well-maintained vehicles with professional appearance</p>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
              <div className='text-4xl mb-4'>👨‍💼</div>
              <h3 className='font-bold text-gray-900 mb-2'>Professional Drivers</h3>
              <p className='text-gray-600'>Vetted, experienced drivers including our popular driver Ehab</p>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
              <div className='text-4xl mb-4'>💰</div>
              <h3 className='font-bold text-gray-900 mb-2'>Great Value</h3>
              <p className='text-gray-600'>Competitive pricing with special 30% discount on Honda CRV service</p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-br from-brand-purple via-purple-600 to-indigo-700 text-white'>
        <div className='container max-w-4xl text-center'>
          <h2 className='h2 mb-6 text-white'>Ready to Book?</h2>
          <p className='large mb-8 text-purple-100 max-w-2xl mx-auto'>
            Choose from our premium fleet and experience Chicago&apos;s finest transportation service. 
            Professional drivers, clean vehicles, unbeatable service.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href='/contact' className='bg-white text-brand-purple font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors'>
              Book Any Vehicle
            </Link>
            <Link href='/book-ehab' className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors'>
              Book Ehab - 30% Off
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

