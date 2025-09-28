export default async function sitemap() {
  const base = 'https://late-night-hero.vercel.app'
  return [
    { url: base + '/', lastModified: new Date() },
    { url: base + '/oak-brook', lastModified: new Date() },
    { url: base + '/ohare', lastModified: new Date() },
    { url: base + '/rates', lastModified: new Date() },
    { url: base + '/fleet', lastModified: new Date() },
    { url: base + '/faq', lastModified: new Date() },
    { url: base + '/contact', lastModified: new Date() },
    { url: base + '/dispatch', lastModified: new Date() }
  ]
}
