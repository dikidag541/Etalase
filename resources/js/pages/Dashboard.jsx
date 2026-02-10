import React from 'react'
import DashboardLayout from '@/Layouts/DashboardLayout'

export default function Dashboard() {
  const stats = [
    { label: 'Total Visits', value: '12,234' },
    { label: 'Active Projects', value: '5' },
    { label: 'Total Revenue', value: '$45,678' },
    { label: 'Followers', value: '234' },
  ]

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome back! Here's an overview of your account.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-4 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="rounded-lg bg-white p-6 shadow">
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg bg-white shadow">
        <div className="border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-600">No recent activity yet.</p>
        </div>
      </div>
    </DashboardLayout>
  )
}
