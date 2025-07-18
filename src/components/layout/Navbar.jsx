import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const navigation = [
  { name: 'The Land', href: '/land' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Industries', href: '/industries' },
  { name: 'Lease Models', href: '/lease-models' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Location', href: '/location' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link 
              to="/" 
              className="-m-1.5 p-1.5 flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="font-display text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                LandLease
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex h-12 w-12 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? (
                <HiX className="h-7 w-7" aria-hidden="true" />
              ) : (
                <HiMenu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative py-7 text-[15px] font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'text-primary-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact"
              className="rounded-lg bg-primary-600 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-primary-500"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${
            mobileMenuOpen ? 'block' : 'hidden'
          } absolute inset-x-0 top-16 sm:top-20 border-b border-gray-100 bg-white`}
        >
          <div className="divide-y divide-gray-100">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-lg px-4 py-3.5 text-[15px] font-medium ${
                    location.pathname === item.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="px-4 py-4">
              <Link
                to="/contact"
                className="block w-full rounded-lg bg-primary-600 px-4 py-3.5 text-center text-[15px] font-medium text-white hover:bg-primary-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 