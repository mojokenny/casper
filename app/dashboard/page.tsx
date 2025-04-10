import Link from "next/link"
import { DashboardLayout } from "@/components/dashboard-layout"

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="container py-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Link href="/dashboard/boxes/new">
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Create New Box
            </button>
          </Link>
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
            <Link href="/dashboard/boxes/new">
              <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Create Your First Box
              </button>
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
