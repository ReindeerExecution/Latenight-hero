export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://late-night-hero.vercel.app/sitemap.xml'
  }
}
