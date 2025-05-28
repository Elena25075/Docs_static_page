// app/get-started/installation/page.tsx
import React from 'react'
import DocsLayout from '@/components/DocsLayout'
import CodeBlock from '@/components/CodeBlock'
import { AlertCircle, Download, Key, CheckCircle } from 'lucide-react'

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

export default function InstallationPage() {
  return (
    <DocsLayout navigation={navigation}>
      <div className="prose-custom">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Installation & Setup
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Get JetFormBuilder installed and configured on your WordPress site in just a few minutes.
        </p>

        {/* Installation Methods */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Installation Methods
        </h2>

        {/* Method 1: WordPress Admin */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <Download className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Method 1: WordPress Admin Dashboard
            </h3>
          </div>
          
          <ol className="space-y-3 text-gray-700">
            <li>1. Log in to your WordPress admin dashboard</li>
            <li>2. Navigate to <strong>Plugins → Add New</strong></li>
            <li>3. Search for "JetFormBuilder"</li>
            <li>4. Click <strong>Install Now</strong> on the JetFormBuilder plugin</li>
            <li>5. Click <strong>Activate</strong> after installation completes</li>
          </ol>
        </div>

        {/* Method 2: Manual Upload */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Key className="w-5 h-5 text-primary-600" />
            <h3 className="text-lg font-semibold text-gray-900">
              Method 2: Manual Upload (Pro Version)
            </h3>
          </div>
          
          <ol className="space-y-3 text-gray-700 mb-4">
            <li>1. Download the plugin ZIP file from your Crocoblock account</li>
            <li>2. Go to <strong>Plugins → Add New → Upload Plugin</strong></li>
            <li>3. Choose the downloaded ZIP file</li>
            <li>4. Click <strong>Install Now</strong></li>
            <li>5. Click <strong>Activate Plugin</strong></li>
          </ol>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-blue-900">Pro Version Note</h4>
                <p className="text-blue-800 text-sm">
                  The Pro version requires a valid license key and includes advanced features 
                  like Stripe payments, advanced fields, and premium integrations.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* License Activation */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          License Activation (Pro)
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Activating Your License Key
          </h3>
          
          <ol className="space-y-3 text-gray-700 mb-6">
            <li>1. Navigate to <strong>Crocoblock → License</strong> in your WordPress admin</li>
            <li>2. Enter your license key in the provided field</li>
            <li>3. Click <strong>Activate License</strong></li>
            <li>4. You should see a success message confirming activation</li>
          </ol>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-900">Find Your License Key</h4>
                <p className="text-green-800 text-sm">
                  Your license key is available in your Crocoblock account dashboard 
                  under the "Licenses" section.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Verify Installation
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Check That Everything Works
          </h3>
          
          <ul className="space-y-3 text-gray-700">
            <li>✓ You should see <strong>JetFormBuilder</strong> in your admin menu</li>
            <li>✓ Navigate to <strong>JetFormBuilder → Add New</strong> to create forms</li>
            <li>✓ Check that all required dependencies are met</li>
            <li>✓ Verify your license is active (Pro version only)</li>
          </ul>
        </div>

        {/* Troubleshooting */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Common Installation Issues
        </h2>

        <div className="space-y-4 mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">
              "Plugin could not be activated" Error
            </h4>
            <p className="text-yellow-800 text-sm">
              This usually indicates a PHP version conflict. Ensure your server runs PHP 7.4 or higher.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">
              License Key Not Working
            </h4>
            <p className="text-yellow-800 text-sm">
              Verify the license key is copied correctly and that your Crocoblock subscription is active.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">
              Missing Dependencies
            </h4>
            <p className="text-yellow-800 text-sm">
              JetFormBuilder works best with Elementor, Gutenberg, or Bricks. Install your preferred page builder.
            </p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-primary-900 mb-4">
            What's Next?
          </h3>
          <p className="text-primary-800 mb-4">
            Now that JetFormBuilder is installed, let's create your first form!
          </p>
          <a 
            href="/get-started/first-form"
            className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Create Your First Form →
          </a>
        </div>
      </div>
    </DocsLayout>
  )
}

etFormBuilder form. Here's what you can explore next:

- [Add the form to your page](/get-started/display-form)
- [Learn about advanced fields](/build-forms/advanced-fields)
- [Set up conditional logic](/build-forms/conditional-logic)
- [Configure payment processing](/integrate-extend/payments)

<div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
  <strong>Pro Tip:</strong> Start simple and add complexity gradually. You can always come back and add more fields or advanced features later.
</div>
