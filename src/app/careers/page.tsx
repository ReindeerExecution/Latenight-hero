export const metadata = {
  title: 'Join Our Team - Late Night Hero Careers',
  description: 'Drive for Late Night Hero! Flexible night shifts, excellent income, Chicago area luxury black car service. Apply now with your SUV or sedan.'
}

export default function CareersPage() {
  return (
    <main className='container mt-12'>
      <div className='text-center mb-12'>
        <h1 className='h1 mb-4'>Join the Late Night Hero Team</h1>
        <p className='text-lg text-white/80 mb-6'>
          We're expanding throughout the Chicago area and looking for professional drivers who want to be part of something special.
        </p>
      </div>

      <section className='grid gap-8 lg:grid-cols-2 mb-16'>
        <div className='card p-8'>
          <h2 className='h2 mb-6 text-brand-purple'>Why Drive Nights with Us?</h2>
          <ul className='space-y-4 text-white/90'>
            <li className='flex items-start gap-3'>
              <span className='text-brand-purple font-bold'></span>
              <span>Premium rates for night and weekend shifts</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-brand-purple font-bold'></span>
              <span>Perfect for those who prefer evening/overnight work</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-brand-purple font-bold'></span>
              <span>High-end clientele with guaranteed tips</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-brand-purple font-bold'></span>
              <span>O'Hare airport runs and luxury hotel pickups</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-brand-purple font-bold'></span>
              <span>Flexible scheduling - work when you want</span>
            </li>
          </ul>
        </div>

        <div className='card p-8'>
          <h2 className='h2 mb-6 text-brand-purple'>Vehicle Requirements</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='h4 mb-3 text-yellow-400'>Luxury Sedans</h3>
              <ul className='space-y-2 text-white/80 text-sm'>
                <li> Lincoln MKZ, BMW 3/5 Series, Mercedes C/E Class</li>
                <li> Audi A4/A6, Lexus ES/GS, or similar luxury models</li>
                <li> 2018 or newer, impeccable condition</li>
              </ul>
            </div>
            <div>
              <h3 className='h4 mb-3 text-yellow-400'>Premium SUVs</h3>
              <ul className='space-y-2 text-white/80 text-sm'>
                <li> Lincoln Navigator, Cadillac Escalade, BMW X5/X7</li>
                <li> Mercedes GLE/GLS, Audi Q7/Q8, Lexus GX/LX</li>
                <li> 2018 or newer, 6+ passenger capacity preferred</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <div className='card p-8 bg-gradient-to-r from-brand-purple/10 to-purple-900/5'>
          <h2 className='h2 mb-6 text-center'>Chicago Area Coverage</h2>
          <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center'>
            <div>
              <h3 className='h4 mb-2'>Downtown & Loop</h3>
              <p className='text-white/70 text-sm'>Business district, hotels, events</p>
            </div>
            <div>
              <h3 className='h4 mb-2'>O'Hare Airport</h3>
              <p className='text-white/70 text-sm'>24/7 terminal service</p>
            </div>
            <div>
              <h3 className='h4 mb-2'>Western Suburbs</h3>
              <p className='text-white/70 text-sm'>Oak Brook, Naperville, Wheaton</p>
            </div>
            <div>
              <h3 className='h4 mb-2'>North Shore</h3>
              <p className='text-white/70 text-sm'>Evanston, Winnetka, Highland Park</p>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <div className='card p-8'>
          <h2 className='h2 mb-6 text-center'>Driver Qualifications</h2>
          <div className='grid gap-8 md:grid-cols-2'>
            <div>
              <h3 className='h3 mb-4'>Professional Requirements</h3>
              <ul className='space-y-3 text-white/90'>
                <li className='flex items-start gap-3'>
                  <span className='text-green-400 font-bold'></span>
                  <span>Valid Illinois driver's license (5+ years clean record)</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-green-400 font-bold'></span>
                  <span>Professional appearance and demeanor</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-green-400 font-bold'></span>
                  <span>Excellent customer service skills</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-green-400 font-bold'></span>
                  <span>Smartphone with GPS navigation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='h3 mb-4'>Personal Qualities</h3>
              <ul className='space-y-3 text-white/90'>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 font-bold'></span>
                  <span>Punctual and reliable for late-night shifts</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 font-bold'></span>
                  <span>Comfortable with overnight driving</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 font-bold'></span>
                  <span>Discretion with high-profile clients</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='text-blue-400 font-bold'></span>
                  <span>Positive attitude and professional pride</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <div className='card p-8 bg-gradient-to-r from-yellow-900/20 to-orange-900/10 border-yellow-500/30'>
          <h2 className='h2 mb-6 text-center text-yellow-400'>Ready to Apply?</h2>
          <div className='text-center mb-8'>
            <p className='text-lg text-white/80 mb-4'>
              Send us your information and we'll get back to you within 24 hours to discuss opportunities and schedule an interview.
            </p>
            <p className='text-white/70'>
              Email: <a href='mailto:nurallababidi@gmail.com?subject=Driver Application - Late Night Hero' className='text-brand-purple hover:text-white font-medium'>nurallababidi@gmail.com</a>
            </p>
          </div>
          <div className='max-w-md mx-auto'>
            <h3 className='h3 mb-4 text-center'>Include in Your Email:</h3>
            <ul className='space-y-2 text-white/80'>
              <li> Full name and contact information</li>
              <li> Vehicle make, model, year, and condition</li>
              <li> Years of driving experience</li>
              <li> Preferred areas to work in Chicago</li>
              <li> Availability for night/weekend shifts</li>
              <li> Any previous chauffeur or service experience</li>
            </ul>
          </div>
          <div className='text-center mt-8'>
            <a href='mailto:nurallababidi@gmail.com?subject=Driver Application - Late Night Hero' className='btn btn-primary text-lg px-8 py-4'>
              Send Application Email
            </a>
            <p className='text-white/70 text-sm mt-4'>Or call (773) 430-8011 to speak with our team</p>
          </div>
        </div>
      </section>
    </main>
  )
}
