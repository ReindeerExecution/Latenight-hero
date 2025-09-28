// @ts-check
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy':'#1E1B4B',
        'brand-purple':'#7E3AF2',
        'brand-purple-soft':'#A78BFA',
        'brand-cream':'#F5F3FF',
        'brand-gold':'#E9D8A6',
        'brand-black':'#0B0B0F'
      }
    }
  },
  plugins: []
}
export default config
