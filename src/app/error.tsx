"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong...</h2>
      <button
        onClick={reset}
        className="font-display hover:text-accent cursor-pointer text-sm uppercase"
      >
        Try again
      </button>
    </div>
  )
}
