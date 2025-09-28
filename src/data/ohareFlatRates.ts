// Flat upfront fares FROM O'Hare to suburbs (base, pre-tax).
// Fill in fares you offer; notes highlight local positives.

export type FlatRate = {
  suburb: string
  fare: number | null // base price in USD, before tax
  note?: string
}

export const OHARE_FLAT_RATES: FlatRate[] = [
  { suburb: 'Downtown Chicago', fare: 179, note: 'Chicago Loop & Riverwalk - Millennium Park, theatres, lakefront.' },
  { suburb: 'Oak Brook', fare: null, note: 'Home to Oakbrook Center and beautiful residential streets.' },
  { suburb: 'Schaumburg', fare: null, note: 'Known for Woodfield Mall and tons of dining.' },
  { suburb: 'Naperville', fare: null, note: 'Famous Riverwalk and family-friendly downtown.' },
  { suburb: 'Evanston', fare: null, note: 'Northwestern University and lakefront beaches.' },
  { suburb: 'Skokie', fare: null, note: 'Northshore Sculpture Park and welcoming neighborhoods.' },
  { suburb: 'Arlington Heights', fare: null, note: 'Lively downtown; close to Arlington Park area.' },
  { suburb: 'Rosemont', fare: null, note: 'Entertainment district, Fashion Outlets, Allstate Arena.' },
  { suburb: 'Park Ridge', fare: null, note: 'Tree-lined streets and the historic Pickwick Theatre.' },
  { suburb: 'Des Plaines', fare: null, note: 'Rivers Casino and forest preserve trails.' },
  { suburb: 'Elk Grove Village', fare: null, note: 'One of the largest industrial parks in North America.' },
  { suburb: 'Niles', fare: null, note: 'The quirky Leaning Tower of Niles.' },
  { suburb: 'Glenview', fare: null, note: 'The Grove and Gallery Park; family-friendly.' },
  { suburb: 'Northbrook', fare: null, note: 'Great shopping and parks; Ravinia nearby.' },
  { suburb: 'Palatine', fare: null, note: 'Near Deer Grove Forest Preserve; charming downtown.' },
  { suburb: 'Wheaton', fare: null, note: 'Cantigny Park and historic Wheaton College.' },
  { suburb: 'Downers Grove', fare: null, note: 'Classic Car Nights and historic Sears kit homes.' },
  { suburb: 'Hinsdale', fare: null, note: 'Beautiful historic homes and a walkable downtown.' },
  { suburb: 'Lombard', fare: null, note: 'The Lilac Village with scenic parks.' },
  { suburb: 'Lisle', fare: null, note: 'Morton Arboretum trails and family events.' },
  { suburb: 'Bolingbrook', fare: null, note: 'The Promenade and many community parks.' },
  { suburb: 'Aurora', fare: null, note: 'Paramount Theatre and the Fox River.' },
  { suburb: 'Oak Park', fare: null, note: 'Frank Lloyd Wright Home & Studio and iconic architecture.' },
  { suburb: 'La Grange', fare: null, note: 'Historic downtown and beloved neighborhood restaurants.' },
  { suburb: 'Burr Ridge', fare: null, note: 'Upscale shops, dining, and quiet neighborhoods.' },
  { suburb: 'Orland Park', fare: null, note: 'Orland Square and extensive bike paths.' },
  { suburb: 'Tinley Park', fare: null, note: 'Hollywood Casino Amphitheatre and community festivals.' },
  { suburb: 'Elmhurst', fare: null, note: 'Elmhurst University and a dynamic downtown.' },
  { suburb: 'Melrose Park', fare: null, note: 'Beloved Italian heritage festivals and local eateries.' },
  { suburb: 'Morton Grove', fare: null, note: 'Forest preserves and welcoming neighborhoods.' },
  { suburb: 'Buffalo Grove', fare: null, note: 'Buffalo Grove Days and the Raupp Museum.' }
]

