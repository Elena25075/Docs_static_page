// app/layout.tsx
import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'JetFormBuilder Documentation',
  description: 'Complete guide to building powerful forms with JetFormBuilder',
  keywords: 'JetFormBuilder, forms, WordPress, documentation, tutorial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-gray-900">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
