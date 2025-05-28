// components/Header.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search, Menu, X, ExternalLink } from 'lucide-react'
import SearchModal from './SearchModal'
import { clsx } from 'clsx'

const navigation = [
  { name: 'Get Started', href: '/get-started' },
  { name: 'Build', href: '/build-forms' },
  { name: 'Process', href: '/process-submissions' },
  { name: 'Integrate', href: '/integrate-extend' },
  { name: 'Customize', href: '/customize-style' },
  { name: 'Examples', href: '/examples-support' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">JFB</span>
                </div>
                <span className="font-bold text-xl text-gray-900">
                  JetFormBuilder <span className="text-sm font-normal text-gray-500">Docs</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-sm font-medium transition-colors',
                    pathname?.startsWith(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              
              <a
                href="https://crocoblock.com/plugins/jetformbuilder/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600"
              >
                Plugin Page
                <ExternalLink className="ml-1 w-4 h-4" />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-gray-600"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block px-3 py-2 text-base font-medium rounded-md transition-colors',
                    pathname?.startsWith(item.href)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
