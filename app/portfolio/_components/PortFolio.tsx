'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import PageLayout from '@/app/_components/PageLayout'
import SectionCard from '@/app/_components/SectionCard'
import Button from '@/app/system/_components/Button'
import ToggleButtonTab from '../../system/_components/ToggleButtonTab'

const ExperienceContent = () => (
  <div className="space-y-6">
    <SectionCard 
      title="💼 경력 사항" 
      description="전문적인 개발 경험과 프로젝트 이력"
    >
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800">프론트엔드 개발자</h3>
          <p className="text-gray-600 text-sm">2022.03 - 현재 | Tech Company</p>
          <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>React, TypeScript를 사용한 웹 애플리케이션 개발</li>
            <li>Next.js 기반 SSR/SSG 애플리케이션 구축</li>
            <li>UI/UX 디자인 시스템 개발 및 유지보수</li>
            <li>성능 최적화로 로딩 속도 30% 개선</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800">웹 개발자</h3>
          <p className="text-gray-600 text-sm">2020.01 - 2022.02 | Startup Inc.</p>
          <ul className="mt-2 text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Vue.js와 JavaScript를 활용한 SPA 개발</li>
            <li>RESTful API 설계 및 백엔드 연동</li>
            <li>반응형 웹사이트 개발 및 크로스브라우징</li>
            <li>Git을 활용한 버전 관리 및 팀 협업</li>
          </ul>
        </div>
      </div>
    </SectionCard>

    <SectionCard 
      title="🎓 학력 및 자격증" 
      description="교육 배경과 전문 자격"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-blue-800">컴퓨터공학과</h4>
          <p className="text-sm text-blue-600">ABC 대학교 (2016-2020)</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h4 className="font-semibold text-green-800">정보처리기사</h4>
          <p className="text-sm text-green-600">한국산업인력공단 (2020)</p>
        </div>
      </div>
    </SectionCard>

    <SectionCard 
      title="🛠 기술 스택" 
      description="보유 기술 및 도구"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          'JavaScript', 'TypeScript', 'React', 'Next.js',
          'Vue.js', 'Node.js', 'TailwindCSS', 'Git'
        ].map((skill, index) => (
          <div key={index} className="text-center p-3 bg-gray-100 rounded-lg">
            <span className="text-sm font-medium text-gray-700">{skill}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  </div>
)

const PortfolioContent = () => (
  <div className="space-y-6">
    <SectionCard 
      title="🚀 주요 프로젝트" 
      description="개발한 프로젝트들의 상세 정보"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">E-Commerce Platform</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">온라인 쇼핑몰</h3>
          <p className="text-gray-600 text-sm mb-3">
            React와 Node.js를 사용한 풀스택 전자상거래 플랫폼
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Node.js</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">MongoDB</span>
          </div>
          <Button label="자세히 보기" variant="secondary" onClick={() => {}} />
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Task Management</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">업무 관리 시스템</h3>
          <p className="text-gray-600 text-sm mb-3">
            팀 협업을 위한 실시간 업무 관리 및 추적 시스템
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Vue.js</span>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">Express</span>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Socket.io</span>
          </div>
          <Button label="자세히 보기" variant="secondary" onClick={() => {}} />
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="w-full h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Data Visualization</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">데이터 시각화 대시보드</h3>
          <p className="text-gray-600 text-sm mb-3">
            복잡한 데이터를 직관적으로 표현하는 인터랙티브 대시보드
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Next.js</span>
            <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Chart.js</span>
            <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">TypeScript</span>
          </div>
          <Button label="자세히 보기" variant="secondary" onClick={() => {}} />
        </div>

        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
          <div className="w-full h-48 bg-gradient-to-br from-red-400 to-red-600 rounded-lg mb-4 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Mobile App</span>
          </div>
          <h3 className="font-semibold text-lg mb-2">모바일 애플리케이션</h3>
          <p className="text-gray-600 text-sm mb-3">
            React Native를 사용한 크로스 플랫폼 모바일 앱
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">React Native</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Expo</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Firebase</span>
          </div>
          <Button label="자세히 보기" variant="secondary" onClick={() => {}} />
        </div>
      </div>
    </SectionCard>

    <SectionCard 
      title="🏆 성과 및 기여" 
      description="프로젝트에서의 주요 성과들"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
          <div className="text-sm text-blue-800">완료된 프로젝트</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600 mb-2">98%</div>
          <div className="text-sm text-green-800">고객 만족도</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-2xl font-bold text-purple-600 mb-2">30%</div>
          <div className="text-sm text-purple-800">성능 개선</div>
        </div>
      </div>
    </SectionCard>
  </div>
)

export default function PortFolio() {
  const [activeTab, setActiveTab] = useState<boolean>(false)
  const router = useRouter()

  return (
    <PageLayout
      title="💼 Portfolio & Career"
      description="개발자로서의 경험과 프로젝트 포트폴리오를 확인하세요."
    >
      <div className="mb-8 flex justify-center">
        <ToggleButtonTab 
          options={['경력 사항','포트폴리오']}
          isActive={activeTab}
          setisActive={() => setActiveTab(!activeTab)}
          className="border-2 border-gray-300 hover:border-gray-400 transition-colors"
        />
      </div>

      <div className="transition-all duration-300">
        {activeTab ? <PortfolioContent /> : <ExperienceContent />}
      </div>

      <div className="mt-12">
        <SectionCard 
          title="📞 연락처" 
          description="협업 및 문의사항이 있으시면 언제든 연락주세요"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Email: developer@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">GitHub: github.com/developer</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700">LinkedIn: linkedin.com/in/developer</span>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <Button
                label="홈으로 돌아가기"
                variant="secondary"
                onClick={() => router.push('/')}
              />
              <Button
                label="프로젝트 문의"
                variant="primary"
                onClick={() => setActiveTab(true)}
              />
            </div>
          </div>
        </SectionCard>
      </div>
    </PageLayout>
  )
}