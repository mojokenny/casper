"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const routes = [
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/dashboard/boxes",
      label: "Boxes",
      active: pathname === "/dashboard/boxes",
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <span className="h-5 w-5">☰</span>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold">Better Voice</h1>
                  </div>
                  <nav className="flex flex-col gap-2">
                    {routes.map((route) => (
                      <Link
                        key={route.href}
                        href={route.href}
                        onClick={() => setOpen(false)}
                        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                          route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                        }`}
                      >
                        {route.label}
                      </Link>
                    ))}
                    <Button
                      variant="ghost"
                      className="flex items-center justify-start gap-2 px-3"
                      onClick={() => signOut({ callbackUrl: "/" })}
                    >
                      Logout
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="hidden md:block">
              <h1 className="text-xl font-bold">Better Voice</h1>
            </Link>
          </div>
          <nav className="hidden md:flex md:items-center md:gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-2 text-sm font-medium ${
                  route.active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <Button variant="ghost" size="icon" onClick={() => signOut({ callbackUrl: "/" })} className="hidden md:flex">
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <div className="flex h-full flex-col gap-4 p-4">
            <nav className="flex flex-col gap-2">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                    route.active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                  }`}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto">
              <Button
                variant="ghost"
                className="w-full justify-start gap-2"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
