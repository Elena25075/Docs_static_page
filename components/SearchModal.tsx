// components/SearchModal.tsx
'use client'
import React, { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useSearch } from '@/app/providers'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const { setSearchQuery } = useSearch()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(query)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <form onSubmit={handleSearch} className="flex items-center p-4 border-b">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            type="text"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none text-lg"
            autoFocus
          />
          <button
            type="button"
            onClick={onClose}
            className="ml-3 p-1 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        <div className="p-4">
          <div className="text-sm text-gray-500 mb-4">
            Popular searches
          </div>
          <div className="space-y-2">
            {[
              'Creating a form',
              'Payment integration',
              'Conditional logic',
              'Email notifications',
              'Multi-step forms'
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => {
                  setQuery(suggestion)
                  setSearchQuery(suggestion)
                  onClose()
                }}
                className="block w-full text-left px-3 py-2 rounded hover:bg-gray-100 text-sm"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
