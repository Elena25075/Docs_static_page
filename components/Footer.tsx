// components/Footer.tsx
import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JFB</span>
              </div>
              <span className="font-bold text-xl">JetFormBuilder</span>
            </div>
            <p className="text-gray-400 text-sm">
              Powerful form builder for WordPress. Create complex forms with ease.
            </p>
          </div>

          {/* Documentation Links */}
          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/get-started" className="text-gray-400 hover:text-white">Get Started</Link></li>
              <li><Link href="/build-forms" className="text-gray-400 hover:text-white">Build Forms</Link></li>
              <li><Link href="/integrate-extend" className="text-gray-400 hover:text-white">Integrations</Link></li>
              <li><Link href="/examples-support" className="text-gray-400 hover:text-white">Examples</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://crocoblock.com/plugins/jetformbuilder/" 
                  className="text-gray-400 hover:text-white inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plugin Page <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://crocoblock.com/support/" 
                  className="text-gray-400 hover:text-white inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://crocoblock.com/knowledge-base/" 
                  className="text-gray-400 hover:text-white inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Knowledge Base <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://www.facebook.com/groups/crocoblock" 
                  className="text-gray-400 hover:text-white inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Group <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/c/CrocoblockWebsite" 
                  className="text-gray-400 hover:text-white inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Crocoblock. All rights reserved. Built with ❤️ for the WordPress community.</p>
        </div>
      </div>
    </footer>
  )
}
