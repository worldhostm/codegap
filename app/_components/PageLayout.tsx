import React from 'react'

interface PageLayoutProps {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}

export default function PageLayout({ title, description, children, className = '' }: PageLayoutProps) {
  return (
    <div className={`min-h-screen bg-gray-50 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  )
}