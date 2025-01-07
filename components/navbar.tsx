'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, ChevronDown, Globe, HelpCircle } from 'lucide-react'

const navItems = [
  { href: '/stays', label: 'Stays' },
  { href: '/flights', label: 'Flights' },
  { href: '/packages', label: 'Flight + Hotel' },
  { href: '/cars', label: 'Car rentals' },
  { href: '/cruises', label: 'Cruises' },
  { href: '/attractions', label: 'Attractions' },
  { href: '/taxis', label: 'Airport taxis' },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 lg:px-12 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold lg:text-3xl">
            Travel Intelligence Guide
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:bg-blue-700 px-4 py-2 rounded-md transition ${
                  pathname === item.href ? 'bg-blue-700' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="text-white flex items-center"
              >
                <Globe className="w-5 h-5 mr-2" />
                EN
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>

              {isLanguageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                >
                  {['English', 'Español', 'Français', 'Deutsch'].map((lang) => (
                    <button
                      key={lang}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsLanguageDropdownOpen(false)}
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <Button variant="ghost" className="text-white">
              <HelpCircle className="w-5 h-5 mr-2" />
              Help
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-blue-700">
              List your property
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-blue-700">
              Register
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-blue-700">
              Sign in
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === item.href
                      ? 'bg-blue-700 text-white'
                      : 'text-white hover:bg-blue-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="px-5 pt-4 pb-3 border-t border-blue-700">
              <Button variant="ghost" className="text-white w-full justify-start mb-2">
                <Globe className="w-5 h-5 mr-2" />
                Language
              </Button>
              <Button variant="ghost" className="text-white w-full justify-start mb-2">
                <HelpCircle className="w-5 h-5 mr-2" />
                Help
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-700 w-full mb-2">
                List your property
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-700 w-full mb-2">
                Register
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-700 w-full">
                Sign in
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
