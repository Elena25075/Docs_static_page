// components/QuickStartCard.tsx
'use client'
import React, { useState } from 'react'
import { ChevronRight, Check } from 'lucide-react'
import Link from 'next/link'

export default function QuickStartCard() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const steps = [
    {
      title: 'Install JetFormBuilder',
      description: 'Download and activate the plugin',
      href: '/get-started/installation'
    },
    {
      title: 'Create Your First Form',
      description: 'Add fields and configure basic settings',
      href: '/get-started/first-form'
    },
    {
      title: 'Add to Your Page',
      description: 'Display the form on your website',
      href: '/get-started/display-form'
    },
    {
      title: 'Configure Actions',
      description: 'Set up what happens after form submission',
      href: '/process-submissions/actions'
    }
  ]

  const toggleStep = (index: number) => {
    setCompletedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Quick Start Checklist
      </h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center space-x-3">
            <button
              onClick={() => toggleStep(index)}
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                completedSteps.includes(index)
                  ? 'bg-success-500 border-success-500 text-white'
                  : 'border-gray-300 hover:border-success-500'
              }`}
            >
              {completedSteps.includes(index) && <Check className="w-4 h-4" />}
            </button>
            <div className="flex-1">
              <Link href={step.href} className="block hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <h4 className="font-medium text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </Link>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <Link
          href="/get-started"
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
        >
          View detailed guide
          <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
