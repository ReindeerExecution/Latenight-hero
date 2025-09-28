"use client"
import { useMemo, useState } from 'react'
import { OHARE_FLAT_RATES } from '@/data/ohareFlatRates'
import { calculateMeteredFare, applyTax, formatUSD, METER_MILE_RATE, METER_MINUTE_RATE } from '@/lib/pricing'

type Mode = 'metered' | 'upfront'

interface FareCalculatorProps {
  defaultMode?: Mode
  defaultMiles?: string
  defaultMinutes?: string
  defaultTaxRatePct?: string // expressed as percent string (e.g. '11')
  defaultTipRatePct?: string
}

export default function FareCalculator({
  defaultMode = 'metered',
  defaultMiles = '10',
  defaultMinutes = '20',
  defaultTaxRatePct = '0',
  defaultTipRatePct = '20'
}: FareCalculatorProps){
  const [mode, setMode] = useState<Mode>(defaultMode)
  const [miles, setMiles] = useState<string>(defaultMiles)
  const [minutes, setMinutes] = useState<string>(defaultMinutes)
  const [taxRatePct, setTaxRatePct] = useState<string>(defaultTaxRatePct)
  const [tipRatePct, setTipRatePct] = useState<string>(defaultTipRatePct)
  const [suburb, setSuburb] = useState<string>(OHARE_FLAT_RATES[0]?.suburb ?? 'Oak Brook')

  const taxRate = useMemo(()=>{
    const pct = parseFloat(taxRatePct)
    return Number.isFinite(pct) && pct > 0 ? pct/100 : 0
  },[taxRatePct])
  const tipRate = useMemo(()=>{
    const pct = parseFloat(tipRatePct)
    return Number.isFinite(pct) && pct > 0 ? pct/100 : 0
  },[tipRatePct])

  const metered = useMemo(()=>{
    const m = parseFloat(miles)
    const min = parseFloat(minutes)
    const mt = calculateMeteredFare(m, min, taxRate)
    const tip = mt.base * tipRate // tip calculated on base
    const grand = mt.total + tip
    return { ...mt, tip, grand }
  },[miles, minutes, taxRate, tipRate])

  const upfront = useMemo(()=>{
    const found = OHARE_FLAT_RATES.find(x=> x.suburb === suburb)
    const base = found?.fare ?? 0
    const ut = applyTax(base, taxRate)
    const tip = ut.base * tipRate
    const grand = ut.total + tip
    return { ...ut, tip, grand }
  },[suburb, taxRate, tipRate])

  return (
    <section className='card p-6' aria-label='Fare calculator'>
      <div className='h3 mb-1'>Fare Calculator</div>
  <p className='small mb-4'>Choose metered or upfront flat price. Recommended tip is 20% and must be included. Illinois tax defaults to 11% on the rates page.</p>

      <div className='flex gap-2 mb-4' role='tablist' aria-label='Pricing mode'>
        <button role='tab' aria-selected={mode==='metered'} className={`btn ${mode==='metered'?'btn-primary':'btn-outline'}`} onClick={()=>setMode('metered')}>Metered</button>
        <button role='tab' aria-selected={mode==='upfront'} className={`btn ${mode==='upfront'?'btn-primary':'btn-outline'}`} onClick={()=>setMode('upfront')}>Upfront</button>
      </div>

      {mode==='metered' ? (
        <div className='grid gap-3 sm:grid-cols-4'>
          <div>
            <label className='small block mb-1'>Miles <span className='opacity-70'>(× {formatUSD(METER_MILE_RATE)}/mi)</span></label>
            <input inputMode='decimal' value={miles} onChange={e=>setMiles(e.target.value)} className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 w-full' placeholder='Miles' />
          </div>
          <div>
            <label className='small block mb-1'>Minutes <span className='opacity-70'>(× {formatUSD(METER_MINUTE_RATE)}/min)</span></label>
            <input inputMode='decimal' value={minutes} onChange={e=>setMinutes(e.target.value)} className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 w-full' placeholder='Minutes' />
          </div>
          <div>
            <label className='small block mb-1'>Tax %</label>
            <input inputMode='decimal' value={taxRatePct} onChange={e=>setTaxRatePct(e.target.value)} className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 w-full' placeholder='0' />
          </div>
          <div>
            <label className='small block mb-1'>Tip % (required)</label>
            <input inputMode='decimal' value={tipRatePct} onChange={e=>setTipRatePct(e.target.value)} className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 w-full' placeholder='20' />
          </div>

          <div className='sm:col-span-4 mt-2 rounded-xl border border-white/10 p-3 bg-white/5'>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-1'>
              <div>Base: <strong>{formatUSD(metered.base)}</strong></div>
              <div>Tax: <strong>{formatUSD(metered.tax)}</strong></div>
              <div>Tip: <strong>{formatUSD(metered.tip)}</strong></div>
              <div>Total: <strong>{formatUSD(metered.grand)}</strong></div>
            </div>
          </div>
        </div>
      ) : (
        <div className='grid gap-3 sm:grid-cols-4'>
          <div className='sm:col-span-2'>
            <label className='small block mb-1'>Suburb (from O&#39;Hare)</label>
                      <select 
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-purple-400/30 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
          >
              {OHARE_FLAT_RATES.map(x=> (
                <option key={x.suburb} value={x.suburb}>{x.suburb}</option>
              ))}
            </select>
          </div>
          <div>
            <label className='small block mb-1'>Tax %</label>
            <input inputMode='decimal' value={taxRatePct} onChange={e=>setTaxRatePct(e.target.value)} className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 w-full' placeholder='0' />
          </div>
          <div>
            <label className='small block mb-1'>Tip % (required)</label>
            <input inputMode='decimal' value={tipRatePct} onChange={e=>setTipRatePct(e.target.value)} className='rounded-xl bg-white/5 p-3 outline-none border border-white/10 w-full' placeholder='20' />
          </div>

          <div className='sm:col-span-4 mt-2 rounded-xl border border-white/10 p-3 bg-white/5'>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-1'>
              <div>Base: <strong>{formatUSD(upfront.base)}</strong></div>
              <div>Tax: <strong>{formatUSD(upfront.tax)}</strong></div>
              <div>Tip: <strong>{formatUSD(upfront.tip)}</strong></div>
              <div>Total: <strong>{formatUSD(upfront.grand)}</strong></div>
            </div>
            <p className='small mt-2'>If a suburb shows $0.00, add the flat price in the rates table below.</p>
          </div>
        </div>
      )}
      <p className='small mt-3'>We do not pick up if tip is not included in the total.</p>
    </section>
  )
}
