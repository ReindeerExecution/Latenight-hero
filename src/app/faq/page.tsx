export const metadata = { title: 'FAQ • Late Night Hero' }

export default function FAQPage(){
  return (
    <main className='container'>
      <section className='mt-10'>
        <h1 className='h1'>Frequently Asked Questions</h1>
        <p className='mt-3 text-white/80'>Quick answers about pricing, pickups, and policies.</p>
      </section>
      <section className='my-10 grid gap-4'>
        <div className='card p-5'>
          <div className='h3'>Do you track flights?</div>
          <p className='small mt-2'>Yes — we monitor delays and adjust pickup windows accordingly.</p>
        </div>
        <div className='card p-5'>
          <div className='h3'>How does pricing work?</div>
          <p className='small mt-2'>Choose metered ($5.90/mi + $1.45/min) or an upfront flat price. Tax applies where required. Recommended tip is 20% and must be included to confirm pickup.</p>
        </div>
        <div className='card p-5'>
          <div className='h3'>Is tip required?</div>
          <p className='small mt-2'>Yes. We require a 20% tip included in the total. We do not pick up if tip is not included.</p>
        </div>
        <div className='card p-5'>
          <div className='h3'>What payment methods do you accept?</div>
          <p className='small mt-2'>Cash or major cards in car; corporate invoicing by request.</p>
        </div>
        <div className='card p-5'>
          <div className='h3'>Do you offer child seats?</div>
          <p className='small mt-2'>Yes, request in notes and we’ll confirm availability.</p>
        </div>
        <div className='card p-5'>
          <div className='h3'>Do you serve suburbs beyond this list?</div>
          <p className='small mt-2'>Absolutely. Call <a className='underline' href='tel:+17734308011'>(773) 430‑8011</a> or email <a className='underline' href='mailto:nurallababidi@gmail.com'>nurallababidi@gmail.com</a> for a quote.</p>
        </div>
      </section>
    </main>
  )
}

