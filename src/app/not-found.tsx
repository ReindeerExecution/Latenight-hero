import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="container mt-10">
      <div className="card p-8 text-center">
        <h1 className="h1 mb-4">404 - Page Not Found</h1>
        <p className="text-white/80 mb-6">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="flex gap-3 justify-center">
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <a href="tel:7736419702" className="btn btn-outline">
            Call us
          </a>
        </div>
        <p className="small mt-6">
          Need a ride? Call us at (773) 641-9702
        </p>
      </div>
    </main>
  )
}