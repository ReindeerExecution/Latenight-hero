export const metadata = {
  title: 'Book Ehab - Late Night Hero Special Booking',
  description: 'Oh so you\'re choosing Ehab as your driver huh? Book Chicago\'s most popular driver with our special 30% discount.'
}

export default function BookEhabPage() {
  return (
    <>
      <section className='bg-gradient-to-br from-brand-purple via-purple-800 to-slate-900 text-white pt-32 pb-16'>
        <div className='container max-w-4xl text-center'>
          <div className='mb-8'>
            <h1 className='display-sm mb-6 text-white'>Oh, So You&apos;re Choosing Ehab as Your Driver, Huh?</h1>
            <p className='large text-purple-100 max-w-2xl mx-auto mb-8'>
              Smart choice! You&apos;ve selected Chicago&apos;s most popular driver. 
              Let&apos;s get you set up with Ehab&apos;s premium Honda CRV service.
            </p>
            <div className='inline-flex items-center gap-2 bg-purple-600 text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg animate-bounce'>
              🎉 30% OFF - Ehab Special Rate
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900'>
        <div className='container max-w-4xl'>
          <div className='grid gap-12 lg:grid-cols-2 items-start'>
            {/* Left side - Ehab info */}
            <div className='space-y-8'>
              <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-purple-500 shadow-lg'>
                <div className='text-center mb-6'>
                  <div className='w-24 h-24 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold'>
                    E
                  </div>
                  <h2 className='h2 text-white mb-2'>Your Driver: Ehab</h2>
                  <p className='text-purple-400 font-semibold'>Chicago&apos;s Most Popular Driver</p>
                </div>
                
                <div className='space-y-4'>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>✓</span>
                    </div>
                    <span className='text-gray-300'>Professional Honda CRV Service</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>✓</span>
                    </div>
                    <span className='text-gray-300'>5+ Years Experience</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>✓</span>
                    </div>
                    <span className='text-gray-700'>30% Discount Applied</span>
                  </div>
                  <div className='flex items-center gap-3'>
                    <div className='w-8 h-8 bg-green-500 rounded-full flex items-center justify-center'>
                      <span className='text-white text-sm'>✓</span>
                    </div>
                    <span className='text-gray-700'>Available 24/7</span>
                  </div>
                </div>
              </div>
              
              <div className='bg-gradient-to-r from-red-100 to-blue-100 rounded-xl p-6 border border-red-200'>
                <h3 className='font-bold text-gray-900 mb-3 text-lg'>🏆 Why Ehab is #1</h3>
                <ul className='space-y-2 text-gray-700'>
                  <li>• Highest customer satisfaction ratings</li>
                  <li>• Always on time, every time</li>
                  <li>• Clean, comfortable Honda CRV</li>
                  <li>• Friendly, professional service</li>
                  <li>• Tommy Hilfiger style meets Chicago reliability</li>
                </ul>
              </div>
            </div>

            {/* Right side - Booking form */}
            <div className='bg-white rounded-2xl shadow-2xl p-8 border border-gray-100'>
              <div className='text-center mb-8'>
                <h2 className='h2 text-gray-900 mb-2'>Book Your Ride with Ehab</h2>
                <p className='text-gray-600'>Fill out the form below and we&apos;ll send your booking details directly to our team</p>
              </div>

              <form action='mailto:defcon5ready@gmail.com' method='post' encType='text/plain' className='space-y-6'>
                <div className='grid gap-6 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='firstName' className='block text-sm font-medium text-gray-700 mb-2'>
                      First Name *
                    </label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                      placeholder='Your first name'
                    />
                  </div>
                  <div>
                    <label htmlFor='lastName' className='block text-sm font-medium text-gray-700 mb-2'>
                      Last Name *
                    </label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                      placeholder='Your last name'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>
                    Email Address *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                    placeholder='your.email@example.com'
                  />
                </div>

                <div>
                  <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-2'>
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                    placeholder='(555) 123-4567'
                  />
                </div>

                <div className='grid gap-6 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='pickup' className='block text-sm font-medium text-gray-700 mb-2'>
                      Pickup Location *
                    </label>
                    <input
                      type='text'
                      id='pickup'
                      name='pickup'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                      placeholder='123 Main St, Chicago'
                    />
                  </div>
                  <div>
                    <label htmlFor='dropoff' className='block text-sm font-medium text-gray-700 mb-2'>
                      Drop-off Location *
                    </label>
                    <input
                      type='text'
                      id='dropoff'
                      name='dropoff'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                      placeholder='456 State St, Chicago'
                    />
                  </div>
                </div>

                <div className='grid gap-6 sm:grid-cols-2'>
                  <div>
                    <label htmlFor='date' className='block text-sm font-medium text-gray-700 mb-2'>
                      Date *
                    </label>
                    <input
                      type='date'
                      id='date'
                      name='date'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                    />
                  </div>
                  <div>
                    <label htmlFor='time' className='block text-sm font-medium text-gray-700 mb-2'>
                      Time *
                    </label>
                    <input
                      type='time'
                      id='time'
                      name='time'
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor='passengers' className='block text-sm font-medium text-gray-700 mb-2'>
                    Number of Passengers
                  </label>
                  <select
                    id='passengers'
                    name='passengers'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                  >
                    <option value='1'>1 Passenger</option>
                    <option value='2'>2 Passengers</option>
                    <option value='3'>3 Passengers</option>
                    <option value='4'>4 Passengers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor='specialRequests' className='block text-sm font-medium text-gray-700 mb-2'>
                    Special Requests or Notes
                  </label>
                  <textarea
                    id='specialRequests'
                    name='specialRequests'
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900'
                    placeholder='Any special requests, luggage info, or additional details...'
                  ></textarea>
                </div>

                <div className='bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-4 border border-red-200'>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='text-2xl'>🎉</span>
                    <span className='font-bold text-red-700'>30% Discount Applied!</span>
                  </div>
                  <p className='text-sm text-gray-600'>
                    Your booking with Ehab automatically includes our limited-time 30% discount. 
                    Final pricing will be confirmed via email.
                  </p>
                </div>

                <button
                  type='submit'
                  className='w-full bg-gradient-to-r from-red-500 to-purple-600 hover:from-red-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                >
                  Send Booking Request to Ehab 🚗
                </button>

                <div className='text-center'>
                  <p className='text-sm text-gray-500 mb-2'>
                    Booking details will be sent to: <strong>defcon5ready@gmail.com</strong>
                  </p>
                  <p className='text-sm text-gray-500'>
                    You&apos;ll receive confirmation within 24 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-br from-gray-50 to-white'>
        <div className='container max-w-4xl text-center'>
          <h2 className='h2 text-gray-900 mb-8'>What Happens Next?</h2>
          <div className='grid gap-8 md:grid-cols-3'>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
              <div className='w-16 h-16 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold'>
                1
              </div>
              <h3 className='font-bold text-gray-900 mb-2'>We Review Your Request</h3>
              <p className='text-gray-600'>Your booking details are sent directly to our team at defcon5ready@gmail.com</p>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
              <div className='w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold'>
                2
              </div>
              <h3 className='font-bold text-gray-900 mb-2'>Ehab Confirms</h3>
              <p className='text-gray-600'>Ehab personally reviews and confirms your ride within 24 hours</p>
            </div>
            <div className='bg-white rounded-xl p-6 shadow-lg border border-gray-100'>
              <div className='w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold'>
                3
              </div>
              <h3 className='font-bold text-gray-900 mb-2'>Enjoy Your Ride</h3>
              <p className='text-gray-600'>Ehab arrives on time in his Honda CRV for your premium experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}