export const METER_MILE_RATE = 5.9 // USD per mile (legacy metered model)
export const METER_MINUTE_RATE = 1.45 // USD per minute (legacy metered model)

// New flat pricing model directives
export const OHARE_PER_MILE_RATE = 6 // USD per mile from O'Hare (user requirement)
export const ILLINOIS_TAX_RATE = 0.11 // 11% Illinois sales tax (user requirement)

export function calculateMeteredFare(
  miles: number,
  minutes: number,
  taxRate = 0
) {
  const safeMiles = Number.isFinite(miles) && miles > 0 ? miles : 0
  const safeMinutes = Number.isFinite(minutes) && minutes > 0 ? minutes : 0
  const base = safeMiles * METER_MILE_RATE + safeMinutes * METER_MINUTE_RATE
  const tax = base * Math.max(0, taxRate)
  const total = base + tax
  return { base, tax, total }
}

export function applyTax(amount: number, taxRate = 0) {
  const base = Math.max(0, amount || 0)
  const tax = base * Math.max(0, taxRate)
  const total = base + tax
  return { base, tax, total }
}

export function formatUSD(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(Number.isFinite(value) ? value : 0)
}

// Compute a flat fare from O'Hare given miles (no tip) applying IL tax.
// Miles must be a positive finite number; otherwise returns zeros.
export function computeOhareFlat(miles: number, perMile: number = OHARE_PER_MILE_RATE, taxRate: number = ILLINOIS_TAX_RATE){
  const safeMiles = Number.isFinite(miles) && miles > 0 ? miles : 0
  const base = safeMiles * Math.max(0, perMile)
  const tax = base * Math.max(0, taxRate)
  const total = base + tax
  return { miles: safeMiles, base, tax, total }
}

