import BookingForm from '@/components/BookingForm'

export default function OHare() {
  return (
    <main className='container'>
      <section className='mt-10'>
        <h1 className='h1'>O&#39;Hare Airport Car Service</h1>
        <p className='mt-3 text-white/80'>Live flight tracking • Curbside or meet-and-greet • Text-first dispatch.</p>
      </section>
      <section className='my-10'>
        <div className='card p-6'>
          <div className='h3'>Pickup Options</div>
          <ul className='small mt-2 list-disc pl-5'>
            <li>Curbside: fastest, coordinated by SMS after landing.</li>
            <li>Meet-and-Greet: driver with sign inside terminal.</li>
          </ul>
          <div className='small mt-4'>
            Upfront example: O&#39;Hare → Downtown Chicago — $179 base + tax + 20% tip required.
          </div>
        </div>
      </section>
      <BookingForm/>
    </main>
  )
}
