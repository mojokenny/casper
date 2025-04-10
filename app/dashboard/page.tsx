import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">Better Voice Dashboard</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/">
              <button className="rounded-md border px-4 py-2 hover:bg-gray-50">Home</button>
            </Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 p-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Create New Box
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-medium">Total Feedback Boxes</h2>
            <p className="text-4xl font-bold">0</p>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-medium">Total Submissions</h2>
            <p className="text-4xl font-bold">0</p>
          </div>

          <div className="rounded-lg border p-6 shadow-sm">
            <h2 className="mb-2 text-lg font-medium">Recent Activity</h2>
            <p className="text-gray-500">No recent submissions</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold">Your Feedback Boxes</h2>
          <div className="rounded-lg border p-8 text-center">
            <p className="mb-4 text-gray-500">You haven&apos;t created any feedback boxes yet.</p>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Create Your First Box
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
