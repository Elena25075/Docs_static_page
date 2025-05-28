// app/get-started/page.tsx
import React from 'react'
import DocsLayout from '@/components/DocsLayout'
import { ChevronRight, Download, Settings, Rocket } from 'lucide-react'
import Link from 'next/link'

const navigation = [
  {
    title: 'Get Started',
    children: [
      { title: 'Overview', href: '/get-started' },
      { title: 'Installation', href: '/get-started/installation' },
      { title: 'License Activation', href: '/get-started/license' },
      { title: 'First Form', href: '/get-started/first-form' },
      { title: 'Display Form', href: '/get-started/display-form' },
    ]
  }
]

export default function GetStartedPage() {
  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Installation & Setup',
      description: 'Install the plugin and activate your license',
      href: '/get-started/installation'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Create Your First Form',
      description: 'Build a simple contact form in minutes',
      href: '/get-started/first-form'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Publish & Configure',
      description: 'Add the form to your page and set up actions',
      href: '/get-started/display-form'
    }
  ]

  return (
    <DocsLayout navigation={navigation}>
      <div className="prose-custom">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Getting Started with JetFormBuilder
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          JetFormBuilder is a powerful WordPress form builder that helps you create 
          everything from simple contact forms to complex multi-step workflows with 
          payments, conditional logic, and advanced integrations.
        </p>

        {/* Quick Overview */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-4">
            What You'll Learn
          </h2>
          <ul className="text-blue-800 space-y-2">
            <li>• How to install and configure JetFormBuilder</li>
            <li>• Creating your first form with essential fields</li>
            <li>• Adding forms to pages and posts</li>
            <li>• Setting up basic actions and notifications</li>
          </ul>
        </div>

        {/* Step-by-step guide */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Step-by-Step Guide
        </h2>

        <div className="grid gap-6 mb-8">
          {steps.map((step, index) => (
            <Link 
              key={index}
              href={step.href}
              className="block p-6 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-2 bg-primary-100 rounded-lg text-primary-600">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <span className="inline-flex items-center text-primary-600 font-medium">
                    Continue
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Prerequisites */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Prerequisites
        </h2>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">System Requirements</h3>
          <ul className="text-gray-700 space-y-1">
            <li>• WordPress 5.0 or higher</li>
            <li>• PHP 7.4 or higher</li>
            <li>• MySQL 5.6 or higher</li>
            <li>• Modern web browser with JavaScript enabled</li>
          </ul>
        </div>

        {/* Next Steps */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-4">
            Ready to Start?
          </h3>
          <p className="text-green-800 mb-4">
            Let's begin with installing JetFormBuilder and getting your first form up and running.
          </p>
          <Link 
            href="/get-started/installation"
            className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Installation
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </DocsLayout>
  )
}
