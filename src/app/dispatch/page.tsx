export const metadata = { title: 'Dispatch • Late Night Hero' }

export default function DispatchPage(){
  return (
    <main className='container'>
      <section className='mt-10'>
        <h1 className='h1'>24/7 Dispatch</h1>
        <p className='mt-3 text-white/80'>Tap to call now. We reply fast by text, too.</p>
      </section>
      <section className='my-10'>
        <a href='tel:+17734308011' className='btn btn-primary'>Call (773) 430-8011</a>
      </section>
    </main>
  )
}

