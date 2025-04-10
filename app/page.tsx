import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Better Voice</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <button className="rounded-md border px-4 py-2 hover:bg-gray-50">Login</button>
            </Link>
            <Link href="/register">
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Get Started</button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Collect real-time customer feedback <br className="hidden sm:inline" />
              in an efficient, discreet manner
            </h1>
            <p className="max-w-[700px] text-lg text-gray-500">
              Better Voice helps businesses address issues before they escalate by providing a simple way for customers
              to submit their feedback through unique links and QR codes.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/register">
              <button className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700">
                Get Started
              </button>
            </Link>
            <Link href="/learn-more">
              <button className="rounded-md border px-6 py-3 text-lg font-medium hover:bg-gray-50">
                Learn More
              </button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
