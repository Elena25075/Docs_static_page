// app/providers.tsx
'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchResults: any[]
  setSearchResults: (results: any[]) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function Providers({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  return (
    <SearchContext.Provider value={{
      searchQuery,
      setSearchQuery,
      searchResults,
      setSearchResults
    }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within a Providers')
  }
  return context
}
