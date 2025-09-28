import Image from 'next/image'

export const metadata = {
  title: 'About Nur Allababidi - Late Night Hero Founder',
  description: 'Meet Nur Allababidi, biochemistry degree holder who built Late Night Hero from nothing. 8 years of business, 2000+ happy customers, Chicago area luxury transportation.'
}

export default function AboutPage() {
  return (
    <main className='container mt-12'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='h1 mb-6'>About Nur Allababidi</h1>
          <p className='text-xl text-white/80 max-w-2xl mx-auto'>
            The inspiring story of building Chicago&apos;s premier luxury transportation service from absolutely nothing.
          </p>
        </div>

        <div className='grid gap-16 lg:gap-24'>
          <section className='grid gap-8 lg:grid-cols-2 items-center'>
            <div>
              <h2 className='h2 mb-6 text-brand-purple'>Built From Nothing</h2>
              <div className='space-y-4 text-white/90'>
                <p>
                  In 2017, with nothing but determination and a vision, Nur Allababidi founded Late Night Hero. 
                  Starting with a single vehicle and countless late nights, he began serving the Chicago area with 
                  a commitment to excellence that would define everything that followed.
                </p>
                <p>
                  What began as one man&apos;s entrepreneurial dream has grown into Chicago&apos;s most trusted luxury 
                  transportation service. Through relentless dedication, authentic Syrian hospitality, and an 
                  unwavering focus on customer satisfaction, Late Night Hero has served over <strong className='text-brand-purple'>2,000 happy customers</strong> 
                  across 8 years of business.
                </p>
                <p>
                  Today, we operate premium Lincoln sedans and are expanding with Ford Expedition SUVs, but our 
                  core mission remains unchanged: treating every passenger like family and every ride like it matters.
                </p>
              </div>
            </div>
            <div className='card p-8 bg-gradient-to-br from-brand-purple/10 to-purple-900/5'>
              <div className='text-center'>
                <div className='w-32 h-32 relative mx-auto mb-6 rounded-full overflow-hidden bg-brand-purple/20'>
                  <Image
                    src='/Owner.jpg'
                    alt='Nur Allababidi - Late Night Hero Founder and CEO'
                    fill
                    className='object-cover'
                    sizes='128px'
                  />
                </div>
                <h3 className='h3 mb-4'>Nur Allababidi</h3>
                <p className='text-brand-purple font-medium mb-2'>Founder & CEO</p>
                <p className='text-white/70 text-sm'>
                  Syrian entrepreneur with biochemistry background who built Late Night Hero through authentic service and relentless work ethic.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='h2 mb-8 text-center'>Education & Background</h2>
            <div className='grid gap-6 md:grid-cols-3'>
              <div className='card p-6 text-center'>
                <div className='w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'/>
                  </svg>
                </div>
                <h3 className='h4 mb-2'>Biochemistry Degree</h3>
                <p className='text-white/70 text-sm'>
                  Strong scientific background providing analytical thinking and attention to detail that drives operational excellence.
                </p>
              </div>
              <div className='card p-6 text-center'>
                <div className='w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-green-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <h3 className='h4 mb-2'>8 Years Experience</h3>
                <p className='text-white/70 text-sm'>
                  Founded in 2017, Late Night Hero has consistently grown through word-of-mouth referrals and exceptional service.
                </p>
              </div>
              <div className='card p-6 text-center'>
                <div className='w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <svg className='w-8 h-8 text-brand-purple' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'/>
                  </svg>
                </div>
                <h3 className='h4 mb-2'>2000+ Customers</h3>
                <p className='text-white/70 text-sm'>
                  Over two thousand satisfied customers across Chicago, O&apos;Hare, and surrounding areas trust Late Night Hero.
                </p>
              </div>
            </div>
          </section>

          <section className='text-center'>
            <div className='card p-8 bg-gradient-to-r from-brand-purple/10 to-purple-900/5 border-brand-purple/20'>
              <h2 className='h2 mb-6'>The Syrian-American Dream</h2>
              <div className='max-w-3xl mx-auto space-y-4 text-white/90'>
                <p className='text-lg'>
                  &quot;I came to America with nothing but hope and determination. Every late-night pickup, every early morning 
                  airport run, every satisfied customer - they all represent the American dream in action.&quot;
                </p>
                <p>
                  Nur&apos;s journey from biochemistry student to successful entrepreneur embodies the immigrant experience 
                  of building something meaningful through hard work, integrity, and genuine care for others. His Syrian 
                  heritage brings warmth and hospitality to every interaction, creating the family atmosphere that 
                  Late Night Hero is known for.
                </p>
                <p>
                  <strong>Today, we&apos;re not just a transportation company - we&apos;re proof that with dedication and authentic 
                  service, you can build something lasting from nothing.</strong>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className='h2 mb-8 text-center'>Our Growth Story</h2>
            <div className='grid gap-6 md:grid-cols-4'>
              <div className='text-center'>
                <div className='text-3xl font-bold text-brand-purple mb-2'>2017</div>
                <div className='h4 mb-2'>The Beginning</div>
                <p className='text-white/70 text-sm'>Started with one car and unlimited determination to serve Chicago</p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-brand-purple mb-2'>2019</div>
                <div className='h4 mb-2'>Expansion</div>
                <p className='text-white/70 text-sm'>Added luxury Lincoln sedans and expanded to O&apos;Hare service</p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-brand-purple mb-2'>2023</div>
                <div className='h4 mb-2'>Recognition</div>
                <p className='text-white/70 text-sm'>Reached 2000+ satisfied customers through word-of-mouth referrals</p>
              </div>
              <div className='text-center'>
                <div className='text-3xl font-bold text-brand-purple mb-2'>2025</div>
                <div className='h4 mb-2'>Future Growth</div>
                <p className='text-white/70 text-sm'>Adding Ford Expedition SUVs and recruiting professional drivers</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}