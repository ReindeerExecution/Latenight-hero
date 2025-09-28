export const metadata = {
  title: 'Frequently Asked Questions - Late Night Hero',
  description: 'Complete FAQ about Late Night Hero luxury transportation. Pricing, booking, service areas, safety.'
}

export default function FAQPage(){
  return (
    <main className='container mt-12'>
      <div className='text-center mb-12'>
        <h1 className='h1 mb-4'>Frequently Asked Questions</h1>
        <p className='text-lg text-white/80 max-w-2xl mx-auto'>
          Everything you need to know about Late Night Hero, built from nothing and serving Chicago for 8 years.
        </p>
      </div>

      <div className='max-w-4xl mx-auto space-y-8'>
        <section>
          <h2 className='h2 mb-6 text-brand-purple text-center'>About Our Service</h2>
          <div className='grid gap-6'>
            <div className='card p-6'>
              <h3 className='h3 mb-3 text-yellow-400'>Who is Nur Allababidi?</h3>
              <p className='text-white/90'>
                Nur Allababidi is a Syrian-American entrepreneur with a biochemistry degree who founded Late Night Hero in 2017 with nothing but determination. 
                Over 8 years, we&apos;ve served 2000+ happy customers across Chicago, proving you can build something meaningful from nothing.
              </p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-3'>How do I book a ride?</h3>
              <p className='text-white/90'>
                Call or text (773) 430-8011, email nurallababidi@gmail.com, or WhatsApp us. We prefer personal contact over apps and provide instant quotes.
              </p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-3'>Do you monitor flights for delays?</h3>
              <p className='text-white/90'>
                Yes! We actively monitor all O&apos;Hare arrivals and adjust pickup times automatically. No extra charges for reasonable flight delays.
              </p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-3'>What vehicles do you have?</h3>
              <p className='text-white/90'>
                Lincoln MKZ sedans for 2-3 passengers with luxury comfort. Ford Expedition SUVs coming soon for up to 6 passengers.
              </p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-3'>How does pricing work?</h3>
              <p className='text-white/90'>
                Flat rates for common routes ($85-95 O&apos;Hare to Oak Brook) or metered ($5.90/mi + $1.45/min). 20% gratuity required.
              </p>
            </div>
            <div className='card p-6'>
              <h3 className='h3 mb-3'>Are your drivers professional?</h3>
              <p className='text-white/90'>
                All drivers pass background checks, have clean records, professional appearance, and are personally interviewed by Nur.
              </p>
            </div>
          </div>
        </section>

        <section className='text-center'>
          <div className='card p-8 bg-gradient-to-r from-brand-purple/10 to-purple-900/5'>
            <h2 className='h2 mb-4'>Questions? Call Anytime!</h2>
            <p className='text-white/80 mb-6'>Built from nothing • 8 years of service • 2000+ happy customers</p>
            <div className='flex flex-wrap justify-center gap-4'>
              <a href='tel:+17734308011' className='btn btn-primary'>Call (773) 430-8011</a>
              <a href='/about' className='btn btn-outline'>Learn Our Story</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
