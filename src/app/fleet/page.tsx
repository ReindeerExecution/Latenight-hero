export const metadata = {
  title: 'Fleet • Late Night Hero'
}

export default function FleetPage(){
  return (
    <main className='container'>
      <section className='mt-10'>
        <h1 className='h1'>Our Fleet</h1>
        <p className='mt-3 text-white/80'>Clean, late‑model vehicles with professional, vetted drivers.</p>
      </section>
      <section className='my-10 grid gap-6 sm:grid-cols-3'>
        <div className='card p-5'><div className='h3 mb-1'>Black Sedan</div><div className='small'>2–3 passengers • Business‑class comfort</div></div>
        <div className='card p-5'><div className='h3 mb-1'>Black SUV</div><div className='small'>Up to 6 passengers • Extra luggage</div></div>
        <div className='card p-5'><div className='h3 mb-1'>Airport Meet & Greet</div><div className='small'>Driver with sign • Baggage assistance</div></div>
      </section>
    </main>
  )
}

