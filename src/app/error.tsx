'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="container mt-10">
      <div className="card p-8 text-center">
        <h1 className="h1 mb-4">Something went wrong!</h1>
        <p className="text-white/80 mb-6">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="btn btn-primary"
          >
            Try again
          </button>
          <Link href="/" className="btn btn-outline">
            Go home
          </Link>
        </div>
        <p className="small mt-6">
          If this problem persists, please call us at (773) 641-9702
        </p>
      </div>
    </main>
  )
}