'use client'
import { useState } from 'react'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [tipAck, setTipAck] = useState(false)
  return (
    <section id='book' className='container my-16' aria-label='Booking form'>
      <div className='card p-6 sm:p-8'>
        <h2 className='h2 mb-2'>Book Your Ride</h2>
        <p className='small mb-6'>We’ll text you a confirmation within minutes. Recommended tip is 20% and tip must be included to confirm pickup.</p>
        {submitted ? (
          <div role='status' className='rounded-xl border border-emerald-500 bg-emerald-500/10 p-4'>
            Request received — our dispatcher will confirm by SMS shortly.
          </div>
        ) : (
          <form aria-describedby='booking-help' onSubmit={(e)=>{e.preventDefault(); if(!tipAck) return; setSubmitted(true) }} className='grid gap-4 sm:grid-cols-2'>
            <input required aria-label='Full name' placeholder='Full name' className='rounded-xl bg-white/5 p-3 outline-none border border-white/10' />
            <input required type='tel' aria-label='Mobile number' placeholder='Mobile (for SMS updates)' className='rounded-xl bg-white/5 p-3 outline-none border border-white/10' />
            <input required aria-label='Pickup address' placeholder='Pickup address' className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 sm:col-span-2' />
            <input required aria-label='Dropoff address' placeholder='Dropoff address' className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 sm:col-span-2' />
            <input aria-label='Date and time' type='datetime-local' className='rounded-xl bg-white/5 p-3 outline-none border border-white/10' />
            <select aria-label='Vehicle type' className='rounded-xl bg-white/5 p-3 outline-none border border-white/10'>
              <option>Sedan (Black)</option><option>SUV (Black)</option>
            </select>
            <textarea aria-label='Notes' placeholder='Notes (flight #, gate, child seat, etc.)' className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 sm:col-span-2' rows={4} />
            <label className='sm:col-span-2 small flex items-start gap-2'>
              <input type='checkbox' checked={tipAck} onChange={e=>setTipAck(e.target.checked)} aria-label='I agree to include a 20% tip' className='mt-1' />
              <span>I agree to include a 20% tip. Service requires tip included in the quoted total.</span>
            </label>
            <button className='btn btn-primary sm:col-span-2 disabled:opacity-60' type='submit' disabled={!tipAck}>Request Ride</button>
            <p id='booking-help' className='small sm:col-span-2'>We confirm price by text before pickup. We do not pick up if tip is not included.</p>
          </form>
        )}
      </div>
    </section>
  )
}

