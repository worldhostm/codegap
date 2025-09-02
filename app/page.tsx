'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import PageLayout from './_components/PageLayout'
import SectionCard from './_components/SectionCard'
import Button from './system/_components/Button'

export default function Home() {
  const router = useRouter()

  const navigateToPage = (path: string) => {
    router.push(path)
  }

  return (
    <PageLayout
      title="CodeGap Dashboard"
      description="다양한 기능과 컴포넌트들을 확인하고 테스트할 수 있는 통합 대시보드입니다."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <SectionCard
          title="🎨 Design System"
          description="재사용 가능한 UI 컴포넌트들의 라이브러리"
        >
          <p className="text-sm text-gray-600 mb-4">
            버튼, 카드, 차트 등 다양한 UI 컴포넌트들을 확인하고 테스트할 수 있습니다.
          </p>
          <Button
            label="System Components"
            variant="primary"
            onClick={() => navigateToPage('/system')}
          />
        </SectionCard>

        <SectionCard
          title="📝 Todo Manager"
          description="할 일 관리 시스템"
        >
          <p className="text-sm text-gray-600 mb-4">
            할 일을 추가, 편집, 삭제할 수 있는 완전한 CRUD 기능을 제공합니다.
          </p>
          <Button
            label="Todo List"
            variant="secondary"
            onClick={() => navigateToPage('/todo')}
          />
        </SectionCard>

        <SectionCard
          title="✏️ Rich Text Editor"
          description="고급 텍스트 편집기"
        >
          <p className="text-sm text-gray-600 mb-4">
            TipTap 기반의 풍부한 텍스트 편집 기능을 제공합니다.
          </p>
          <Button
            label="Text Editor"
            variant="secondary"
            onClick={() => navigateToPage('/editor')}
          />
        </SectionCard>

        <SectionCard
          title="💼 Portfolio"
          description="포트폴리오 및 경력 소개"
        >
          <p className="text-sm text-gray-600 mb-4">
            개인 포트폴리오와 경력사항을 확인할 수 있습니다.
          </p>
          <Button
            label="Portfolio"
            variant="secondary"
            onClick={() => navigateToPage('/portfolio')}
          />
        </SectionCard>

        <SectionCard
          title="🛒 Basket"
          description="장바구니 및 쇼핑 기능"
        >
          <p className="text-sm text-gray-600 mb-4">
            쇼핑 카트 관리 및 상품 선택 기능을 테스트할 수 있습니다.
          </p>
          <Button
            label="Shopping Basket"
            variant="secondary"
            onClick={() => navigateToPage('/basket')}
          />
        </SectionCard>

        <SectionCard
          title="🧪 Test Lab"
          description="실험적 기능들"
        >
          <p className="text-sm text-gray-600 mb-4">
            새로운 기능들을 테스트하고 실험해볼 수 있는 공간입니다.
          </p>
          <Button
            label="Test Components"
            variant="secondary"
            onClick={() => navigateToPage('/test')}
          />
        </SectionCard>

        <SectionCard
          title="🚀 Initialize"
          description="프로젝트 초기화"
        >
          <p className="text-sm text-gray-600 mb-4">
            프로젝트 설정 및 초기화 도구들을 확인할 수 있습니다.
          </p>
          <Button
            label="Initialize"
            variant="secondary"
            onClick={() => navigateToPage('/init')}
          />
        </SectionCard>

        <SectionCard
          title="📰 News"
          description="뉴스 및 업데이트"
        >
          <p className="text-sm text-gray-600 mb-4">
            최신 뉴스와 프로젝트 업데이트를 확인할 수 있습니다.
          </p>
          <Button
            label="News Feed"
            variant="secondary"
            onClick={() => navigateToPage('/news')}
          />
        </SectionCard>

        <SectionCard
          title="🎨 CSS Playground"
          description="CSS 스타일 실험실"
        >
          <p className="text-sm text-gray-600 mb-4">
            CSS 스타일링과 레이아웃을 실험해볼 수 있는 공간입니다.
          </p>
          <Button
            label="CSS Lab"
            variant="secondary"
            onClick={() => navigateToPage('/css')}
          />
        </SectionCard>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">프로젝트 정보</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            이 프로젝트는 Next.js 14+, TypeScript, Tailwind CSS를 기반으로 구축되었습니다. 
            각 섹션에서 다양한 기능들을 테스트하고 개발 과정을 확인할 수 있습니다.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
