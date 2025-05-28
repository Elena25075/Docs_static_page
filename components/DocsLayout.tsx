// components/DocsLayout.tsx
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { SidebarItem } from './Sidebar'

interface DocsLayoutProps {
  children: React.ReactNode
  navigation: SidebarItem[]
}

export default function DocsLayout({ children, navigation }: DocsLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6">
            <Sidebar navigation={navigation} />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
