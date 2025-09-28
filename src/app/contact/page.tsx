export const metadata = { title: 'Contact • Late Night Hero' }

export default function ContactPage(){
  return (
    <main className='container'>
      <section className='mt-10'>
        <h1 className='h1'>Contact</h1>
        <p className='mt-3 text-white/80'>Call, text, or email our 24/7 dispatch.</p>
      </section>
      <section className='my-10 grid gap-6 sm:grid-cols-3'>
        <div className='card p-5'>
          <div className='h3 mb-1'>Phone</div>
          <a className='underline' href='tel:+17734308011'>(773) 430-8011</a>
          <p className='small mt-2'>Text/WhatsApp welcome.</p>
        </div>
        <div className='card p-5'>
          <div className='h3 mb-1'>Email</div>
          <a className='underline' href='mailto:nurallababidi@gmail.com'>nurallababidi@gmail.com</a>
          <p className='small mt-2'>Tap to open your email app.</p>
        </div>
        <div className='card p-5'>
          <div className='h3 mb-1'>Hours</div>
          <p className='small'>24/7 — we’re always here.</p>
        </div>
      </section>
    </main>
  )
}

