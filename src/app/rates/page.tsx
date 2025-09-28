import { OHARE_FLAT_RATES } from '@/data/ohareFlatRates'
import FareCalculator from '@/components/FareCalculator'
import { computeOhareFlat, formatUSD, ILLINOIS_TAX_RATE, OHARE_PER_MILE_RATE } from '@/lib/pricing'

// Approximate mileage from O'Hare to each suburb (placeholder values where null fare exists)
// In a future iteration these could be sourced from a distance matrix API.
const APPROX_MILES: Record<string, number> = {
  'Downtown Chicago': 18,
  'Oak Brook': 17,
  'Schaumburg': 14,
  'Naperville': 30,
  'Evanston': 15,
  'Skokie': 13,
  'Arlington Heights': 12,
  'Rosemont': 3,
  'Park Ridge': 5,
  'Des Plaines': 6,
  'Elk Grove Village': 7,
  'Niles': 11,
  'Glenview': 13,
  'Northbrook': 17,
  'Palatine': 18,
  'Wheaton': 27,
  'Downers Grove': 25,
  'Hinsdale': 18,
  'Lombard': 22,
  'Lisle': 29,
  'Bolingbrook': 33,
  'Aurora': 39,
  'Oak Park': 12,
  'La Grange': 17,
  'Burr Ridge': 21,
  'Orland Park': 36,
  'Tinley Park': 39,
  'Elmhurst': 11,
  'Melrose Park': 10,
  'Morton Grove': 12,
  'Buffalo Grove': 23
}

export const metadata = {
  title: 'Rates • Late Night Hero Black Car',
  description: 'Transparent O\'Hare flat rates and per‑mile pricing. Illinois tax 11% applied. 20% tip required.'
}

export default function RatesPage(){
  const rows = OHARE_FLAT_RATES.map(r => {
    const miles = APPROX_MILES[r.suburb] ?? 0
    // If a manual flat fare exists (base pre-tax), we honor it; else compute via $6/mi.
    if (typeof r.fare === 'number') {
      const base = r.fare
      const tax = base * ILLINOIS_TAX_RATE
      const total = base + tax
      return { ...r, miles, base, tax, total }
    } else {
      const calc = computeOhareFlat(miles, OHARE_PER_MILE_RATE, ILLINOIS_TAX_RATE)
      return { ...r, miles: calc.miles, base: calc.base, tax: calc.tax, total: calc.total }
    }
  })

  return (
    <main className='container mt-12' id='main'>
      <h1 className='h1 mb-4'>Rates & Pricing</h1>
      <p className='text-white/80 max-w-2xl'>Flat pricing from O\'Hare at ${OHARE_PER_MILE_RATE.toFixed(2)}/mile + Illinois sales tax ({(ILLINOIS_TAX_RATE*100).toFixed(0)}%). A 20% tip is required and added on top of the total below. Dispatcher confirms exact price before pickup.</p>
      <div className='mt-8'>
        <h2 className='h3 mb-3'>Instant Calculator</h2>
        <FareCalculator defaultMode='upfront' defaultTaxRatePct={(ILLINOIS_TAX_RATE*100).toFixed(0)} />
      </div>

      <div className='mt-12 overflow-x-auto rounded-xl border border-white/10'>
        <table className='w-full text-sm'>
          <caption className='sr-only'>O'Hare to suburb flat rates with tax (tip excluded)</caption>
          <thead className='bg-white/5 text-white/70'>
            <tr>
              <th className='text-left px-4 py-2'>Suburb</th>
              <th className='text-left px-4 py-2'>Approx Miles</th>
              <th className='text-left px-4 py-2'>Base (${OHARE_PER_MILE_RATE}/mi)</th>
              <th className='text-left px-4 py-2'>Tax (11%)</th>
              <th className='text-left px-4 py-2'>Total (w/ tax)</th>
              <th className='text-left px-4 py-2'>Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row.suburb} className='odd:bg-white/0 even:bg-white/5'>
                <td className='px-4 py-2 font-medium'>{row.suburb}</td>
                <td className='px-4 py-2'>{row.miles}</td>
                <td className='px-4 py-2'>{formatUSD(row.base)}</td>
                <td className='px-4 py-2'>{formatUSD(row.tax)}</td>
                <td className='px-4 py-2 font-semibold'>{formatUSD(row.total)}</td>
                <td className='px-4 py-2 text-white/70'>{row.note || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className='small mt-3'>Miles are approximate typical driving distance, not guaranteed. Flat fares include tax; required 20% tip is additional. Waiting time, stops, tolls, or special requests may adjust final total.</p>
    </main>
  )
}
