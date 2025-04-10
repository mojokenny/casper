import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg border p-6 shadow-md">
        <h1 className="mb-6 text-2xl font-bold">Login</h1>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="w-full rounded-md border p-2"
              placeholder="name@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              className="w-full rounded-md border p-2"
            />
          </div>
          
          <Link href="/dashboard">
            <button 
              className="w-full rounded-md bg-blue-600 p-2 text-white hover:bg-blue-700"
            >
              Login (Demo)
            </button>
          </Link>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Go back home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
