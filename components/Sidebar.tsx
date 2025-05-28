// components/Sidebar.tsx
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'

interface SidebarItem {
  title: string
  href?: string
  children?: SidebarItem[]
}

interface SidebarProps {
  navigation: SidebarItem[]
}

export default function Sidebar({ navigation }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const isActive = (href: string) => pathname === href
  const isParentActive = (item: SidebarItem): boolean => {
    if (item.href && isActive(item.href)) return true
    return item.children?.some(child => isParentActive(child)) || false
  }

  const renderItem = (item: SidebarItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.title)
    const isItemActive = item.href ? isActive(item.href) : isParentActive(item)

    return (
      <div key={item.title}>
        <div className={clsx(
          'flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors',
          level > 0 && 'ml-4',
          isItemActive 
            ? 'bg-primary-50 text-primary-700 font-medium' 
            : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
        )}>
          {item.href ? (
            <Link href={item.href} className="flex-1">
              {item.title}
            </Link>
          ) : (
            <span className="flex-1">{item.title}</span>
          )}
          
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.title)}
              className="p-1 hover:bg-gray-200 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="ml-2">
            {item.children?.map(child => renderItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <nav className="space-y-1">
      {navigation.map(item => renderItem(item))}
    </nav>
  )
}
