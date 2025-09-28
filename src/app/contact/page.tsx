import Link from 'next/link'

export const metadata = {
  title: 'Contact Late Night Hero',
  description: '24/7 dispatch service for Chicago area luxury black car service. Now hiring drivers!'
}

export default function ContactPage() {
  return (
    <>
      <section className='bg-gradient-to-br from-brand-purple via-purple-800 to-slate-900 text-white pt-32 pb-16'>
        <div className='container max-w-4xl text-center'>
          <h1 className='display-sm mb-4 text-white'>Contact Late Night Hero</h1>
          <p className='large text-purple-100 max-w-2xl mx-auto'>
            24/7 dispatch service for luxury black car transportation. 
            Ready to serve you anywhere in Chicago.
          </p>
        </div>
      </section>

      <section className='py-16 bg-gradient-to-b from-gray-900 via-slate-800 to-gray-900'>
        <div className='container max-w-6xl'>
          <div className='grid gap-8 md:grid-cols-3 mb-16'>
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center shadow-lg border border-purple-400/30'>
              <h2 className='h3 mb-4 text-white'>24/7 Dispatch</h2>
              <a href='tel:+17736419702' className='text-2xl font-bold text-purple-400 hover:text-white transition-colors'>
                (773) 641-9702
              </a>
              <p className='text-gray-400 text-sm mt-2'>Call or text anytime</p>
            </div>

            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center shadow-lg border border-purple-400/30'>
              <h2 className='h3 mb-4 text-white'>Email</h2>
              <a href='mailto:nurallababidi@gmail.com' className='text-lg text-purple-400 hover:text-white transition-colors break-all'>
                nurallababidi@gmail.com
              </a>
              <p className='text-gray-400 text-sm mt-2'>Response within 2-4 hours</p>
            </div>
            
            <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center shadow-lg border border-purple-400/30'>
              <h2 className='h3 mb-4 text-white'>WhatsApp</h2>
              <a href='https://wa.me/17736419702' className='text-lg text-purple-400 hover:text-white transition-colors' target='_blank' rel='noopener noreferrer'>
                Message Us
              </a>
              <p className='text-gray-400 text-sm mt-2'>Quick booking requests</p>
            </div>
          </div>

          <div className='bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 text-center shadow-lg border border-purple-400/30'>
            <h2 className='h2 mb-4 text-white'>Want to Join Our Team?</h2>
            <p className='text-lg text-gray-300 mb-6'>
              We&apos;re expanding! Looking for professional drivers with SUVs or sedans throughout the Chicago area. Perfect for night shifts and excellent income.
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <Link href='/careers' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg'>
                Apply Now
              </Link>
              <a href='tel:+17736419702' className='bg-gray-700 hover:bg-gray-600 border border-purple-400/30 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg'>
                Call to Discuss
              </a>
            </div>
            <p className='text-gray-400 text-sm mt-4'>All Chicago suburbs welcome • Flexible schedules</p>
          </div>
        </div>
      </section>
    </>
  )
}
