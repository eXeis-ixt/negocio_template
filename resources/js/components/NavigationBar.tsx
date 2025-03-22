
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link } from "@inertiajs/react"
import AppLogoIcon from "./app-logo-icon"

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-[10000] flex justify-center pt-4">
      <nav
        className={cn(
          "w-[95%] max-w-5xl rounded-xl border border-border/40 transition-all duration-300",
          scrolled ? "bg-transparent backdrop-blur-xl shadow-lg" : "bg-transparent backdrop-blur-md shadow-md",
        )}
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" prefetch className="text-xl font-bold">
              <AppLogoIcon />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" prefetch className="text-sm font-medium hover:text-red-500">
                Home
              </Link>

              <Link href={route('team.register')}>
              <Button size="sm">Team Register</Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pt-4 pb-2">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/features"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                  About
                </Link>
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

