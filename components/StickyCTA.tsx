export default function StickyCTA(){
  return (
    <div className='fixed-cta' role='region' aria-label='Quick actions'>
      <div className='container py-3 flex gap-3 sm:justify-end'>
        <a href='tel:+17734308011' className='btn btn-primary' aria-label='Call dispatcher'>Call 24/7 Dispatch</a>
        <a href='#book' className='btn btn-outline' aria-label='Open booking form'>Book Online</a>
      </div>
    </div>
  )
}
