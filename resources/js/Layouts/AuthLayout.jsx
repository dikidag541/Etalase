import React from 'react'
import { usePage, Link } from '@inertiajs/react'

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center justify-center mb-8">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Etalase
          </Link>
          <p className="text-gray-600 text-sm mt-2">Art & Design Marketplace</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {children}
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          <Link href="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  )
}
