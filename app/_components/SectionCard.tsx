import React from 'react'

interface SectionCardProps {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export default function SectionCard({ title, description, children, className = '' }: SectionCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}