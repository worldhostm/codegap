'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageLayout from '../_components/PageLayout'
import SectionCard from '../_components/SectionCard'
import Button from '../system/_components/Button'

export default function CSSPlayground() {
  const [selectedDemo, setSelectedDemo] = useState<string>('')
  const router = useRouter()

  const cssExamples = [
    {
      id: 'flexbox',
      title: 'Flexbox Layout',
      description: 'Flexible Box 레이아웃 시스템',
      code: '.flex { display: flex; justify-content: center; align-items: center; }',
      demo: (
        <div className="flex justify-center items-center h-32 bg-blue-100 rounded">
          <div className="bg-blue-500 text-white p-4 rounded">Centered Content</div>
        </div>
      )
    },
    {
      id: 'grid',
      title: 'CSS Grid',
      description: '2차원 그리드 레이아웃 시스템',
      code: '.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }',
      demo: (
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-200 p-4 rounded text-center">Item 1</div>
          <div className="bg-green-200 p-4 rounded text-center">Item 2</div>
          <div className="bg-green-200 p-4 rounded text-center">Item 3</div>
        </div>
      )
    },
    {
      id: 'animations',
      title: 'CSS Animations',
      description: '부드러운 애니메이션 효과',
      code: '@keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }',
      demo: (
        <div className="flex justify-center">
          <div className="bg-purple-500 text-white p-4 rounded animate-bounce">
            Bouncing Element
          </div>
        </div>
      )
    },
    {
      id: 'gradients',
      title: 'CSS Gradients',
      description: '그라디언트 배경 효과',
      code: 'background: linear-gradient(45deg, #ff6b6b, #4ecdc4);',
      demo: (
        <div className="h-32 bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 rounded flex items-center justify-center">
          <span className="text-white font-semibold">Gradient Background</span>
        </div>
      )
    }
  ]

  return (
    <PageLayout
      title="🎨 CSS Playground"
      description="다양한 CSS 기술과 효과들을 실험하고 학습할 수 있는 공간입니다."
    >
      <div className="space-y-6">
        
        {/* CSS 예제 목록 */}
        <SectionCard 
          title="CSS 예제 모음" 
          description="인터랙티브 CSS 데모와 코드 예제"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cssExamples.map((example) => (
              <div 
                key={example.id} 
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedDemo === example.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedDemo(example.id)}
              >
                <h3 className="font-semibold text-lg mb-2">{example.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{example.description}</p>
                
                {/* 데모 영역 */}
                <div className="mb-4">
                  {example.demo}
                </div>
                
                {/* 코드 영역 */}
                {selectedDemo === example.id && (
                  <div className="mt-4 p-3 bg-gray-100 rounded text-sm font-mono overflow-x-auto">
                    <code>{example.code}</code>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

        {/* Tailwind CSS 유틸리티 */}
        <SectionCard 
          title="Tailwind CSS 유틸리티" 
          description="자주 사용되는 Tailwind CSS 클래스들"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800">Spacing</h4>
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-blue-100">m-4, p-4</div>
                <div className="mx-2 px-2 bg-blue-100">mx-2, px-2</div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-green-800">Colors</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-green-200 p-2">bg-green-200</div>
                <div className="text-green-600 p-2">text-green-600</div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-purple-800">Typography</h4>
              <div className="space-y-2 text-sm">
                <div className="font-bold">font-bold</div>
                <div className="text-lg">text-lg</div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold mb-2 text-red-800">Layout</h4>
              <div className="space-y-2 text-sm">
                <div className="flex">flex</div>
                <div className="grid">grid</div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 반응형 디자인 */}
        <SectionCard 
          title="반응형 디자인" 
          description="다양한 화면 크기에 대응하는 레이아웃"
        >
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-red-100 p-4 rounded text-center">
                <div className="text-sm text-red-800">Mobile First</div>
                <div className="text-xs text-red-600">기본 (320px+)</div>
              </div>
              <div className="bg-yellow-100 p-4 rounded text-center">
                <div className="text-sm text-yellow-800">Tablet</div>
                <div className="text-xs text-yellow-600">md: (768px+)</div>
              </div>
              <div className="bg-green-100 p-4 rounded text-center">
                <div className="text-sm text-green-800">Desktop</div>
                <div className="text-xs text-green-600">lg: (1024px+)</div>
              </div>
              <div className="bg-blue-100 p-4 rounded text-center">
                <div className="text-sm text-blue-800">Large Desktop</div>
                <div className="text-xs text-blue-600">xl: (1280px+)</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center">
              브라우저 창 크기를 조절해보세요!
            </p>
          </div>
        </SectionCard>

        {/* 네비게이션 */}
        <SectionCard 
          title="빠른 이동" 
          description="다른 페이지로 이동하기"
        >
          <div className="flex flex-wrap gap-3">
            <Button
              label="홈으로"
              variant="primary"
              onClick={() => router.push('/')}
            />
            <Button
              label="시스템 컴포넌트"
              variant="secondary"
              onClick={() => router.push('/system')}
            />
            <Button
              label="포트폴리오"
              variant="secondary"
              onClick={() => router.push('/portfolio')}
            />
          </div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}
