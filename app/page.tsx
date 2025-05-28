// app/page.tsx
import React from 'react'
import Link from 'next/link'
import { ChevronRight, BookOpen, Zap, Code, Palette, Puzzle, LifeBuoy } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuickStartCard from '@/components/QuickStartCard'

export default function HomePage() {
  const navigationCards = [
    {
      title: 'Get Started',
      description: 'Quick setup and your first form in 5 minutes',
      icon: <Zap className="w-6 h-6" />,
      href: '/get-started',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      title: 'Build Forms',
      description: 'Fields, logic, validation, and multi-step forms',
      icon: <BookOpen className="w-6 h-6" />,
      href: '/build-forms',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      title: 'Process Submissions',
      description: 'Actions, notifications, and data handling',
      icon: <Code className="w-6 h-6" />,
      href: '/process-submissions',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      title: 'Integrate & Extend',
      description: 'Payments, email marketing, and automation',
      icon: <Puzzle className="w-6 h-6" />,
      href: '/integrate-extend',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    },
    {
      title: 'Customize & Style',
      description: 'Design, themes, and responsive layouts',
      icon: <Palette className="w-6 h-6" />,
      href: '/customize-style',
      color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
    },
    {
      title: 'Examples & Support',
      description: 'Use cases, tutorials, and troubleshooting',
      icon: <LifeBuoy className="w-6 h-6" />,
      href: '/examples-support',
      color: 'bg-gray-50 border-gray-200 hover:bg-gray-100'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                JetFormBuilder
                <span className="text-primary-600"> Documentation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Complete guide to building powerful, flexible forms with JetFormBuilder. 
                From simple contact forms to complex multi-step workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/get-started" 
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center"
                >
                  Get Started
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="/examples-support" 
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  View Examples
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quick Start Guide
              </h2>
              <p className="text-lg text-gray-600">
                Get your first form up and running in minutes
              </p>
            </div>
            <QuickStartCard />
          </div>
        </section>

        {/* Navigation Cards */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Explore the Documentation
              </h2>
              <p className="text-lg text-gray-600">
                Find exactly what you need with our organized, task-oriented guide
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {navigationCards.map((card, index) => (
                <Link 
                  key={index}
                  href={card.href}
                  className={`block p-6 border-2 rounded-xl transition-all hover:shadow-lg ${card.color}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Topics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Topics
              </h2>
              <p className="text-lg text-gray-600">
                Most searched and helpful documentation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Creating Your First Form', href: '/get-started/first-form' },
                { title: 'Payment Integration', href: '/integrate-extend/payments' },
                { title: 'Conditional Logic', href: '/build-forms/conditional-logic' },
                { title: 'Email Notifications', href: '/process-submissions/notifications' },
                { title: 'Custom Styling', href: '/customize-style/css-customization' },
                { title: 'Multi-Step Forms', href: '/build-forms/multi-step' },
                { title: 'File Uploads', href: '/build-forms/fields/file-upload' },
                { title: 'Troubleshooting', href: '/examples-support/troubleshooting' }
              ].map((topic, index) => (
                <Link 
                  key={index}
                  href={topic.href}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-900 hover:text-primary-600">
                    {topic.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
