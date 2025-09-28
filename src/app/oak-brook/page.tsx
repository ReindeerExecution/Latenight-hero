import BookingForm from '@/components/BookingForm'

export default function OakBrook() {
  return (
    <main className='container'>
      <section className='mt-10'>
        <h1 className='h1'>Oak Brook Taxi & Black Car</h1>
        <p className='mt-3 text-white/80'>Flat or metered pricing • Executive sedans & SUVs • 24/7 dispatch.</p>
      </section>
      <section className='my-10'>
        <div className='card p-6'>
          <div className='h3'>Popular Oak Brook Routes</div>
          <ul className='small mt-2 list-disc pl-5'>
            <li>Oak Brook ↔ O&#39;Hare: choose metered or request an upfront quote.</li>
            <li>Oak Brook ↔ Midway: metered or upfront quote on request.</li>
            <li>Oak Brook ↔ Downtown: metered or upfront quote on request.</li>
          </ul>
          <p className='small mt-3'>Recommended tip is 20% and must be included to confirm pickup.</p>
        </div>
      </section>
      <BookingForm/>
    </main>
  )
}
