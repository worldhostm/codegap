'use client'

import React, { useEffect, useState } from 'react'
import Container from '../css/_components/FlexContainer'
import Button from './_components/Button'
import Loader from './_components/Loader'
import Toast from './_components/Toast'
import AnimatedNumber from './_components/AnimatedNumber'
import Slider from './_components/Slider'
import ToggleSwitch from './_components/ToggleButton'
import Card from './_components/Card'
import ProgressBar from './_components/ProgressBar'
import ConfirmModal from './_components/ConfirmModal'
import Table from './_components/Table'
import SearchInput from './_components/SearchInput'
import { useRouter } from 'next/navigation'
import { setInterval } from 'timers'
import ImageZoom from './_components/ImageZoom'
import TabComponent from './_components/TabComponent'
import DynamicChart from './_components/chart/DynamicChart'
import StarRating from './_components/StarRating'

interface ComponentSectionProps {
  title: string
  description: string
  children: React.ReactNode
}

const ComponentSection = ({ title, description, children }: ComponentSectionProps) => (
  <div className="w-full mb-12">
    <div className="mb-6 border-b border-gray-200 pb-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
    <div className="flex flex-wrap gap-6">
      {children}
    </div>
  </div>
)

interface ComponentDemoProps {
  name: string
  description: string
  children: React.ReactNode
}

const ComponentDemo = ({ name, description, children }: ComponentDemoProps) => (
  <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow min-w-[300px]">
    <div className="mb-4">
      <h3 className="font-semibold text-lg text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
    <div className="flex flex-col gap-3">
      {children}
    </div>
  </div>
)

export default function System() {
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload()
    }, 30000 * 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const slidesData = [
    { src: '/sample/sample_images_00.png', caption: 'Caption One' },
    { src: '/sample/sample_images_01.png', caption: 'Caption Two' },
    { src: '/sample/sample_images_02.png', caption: 'Caption Three' },
  ];
const trafficData = {
  labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Paid Search'],
  datasets: [
    {
      label: 'Traffic Sources',
      data: [80, 30, 15, 10, 5], // 트래픽 소스의 비율
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 3,
      options : {
        scales: {
          x: {
            type: 'category', // 카테고리 스케일
          },
          y: {
            type: 'linear', // linear 스케일
            beginAtZero: true,
          },
        },
      }
    },
  ]
};

const trafficData2 = {
  labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Paid Search'],
  datasets: [
    {
      label: 'Traffic Sources',
      data: [
        { x: 10, y: 80, r: 10 }, // Bubble 차트를 위한 x, y, r 값
        { x: 20, y: 30, r: 15 },
        { x: 30, y: 15, r: 20 },
        { x: 40, y: 10, r: 25 },
        { x: 50, y: 5, r: 30 },
      ],
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 3,
    },
  ],
  options: {
    scales: {
      x: {
        type: 'linear', // x축은 linear 스케일
        position: 'bottom',
      },
      y: {
        type: 'linear', // y축은 linear 스케일
        beginAtZero: true,
      },
    },
  },
};

const jsonData = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'Sam Johnson', age: 22, email: 'sam@example.com' },
];

const tabs = [
  { label: 'Home', content: 'This is the Home tab' },
  { label: 'Profile', content: 'This is the Profile tab' },
  { label: 'Settings', content: 'This is the Settings tab' },
];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Design System Components</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            재사용 가능한 UI 컴포넌트들의 모음입니다. 각 컴포넌트는 다양한 상황에서 사용할 수 있도록 설계되었습니다.
          </p>
        </div>

        {/* Navigation Buttons */}
        <ComponentSection
          title="Navigation & Actions"
          description="사용자 인터랙션을 위한 버튼, 탭, 토글 등의 컴포넌트"
        >
          <ComponentDemo name="Button" description="다양한 스타일과 상태를 제공하는 기본 버튼 컴포넌트">
            <div className="flex gap-3 flex-wrap">
              <Button label="Primary" variant="primary" onClick={() => {}} />
              <Button label="Secondary" variant="secondary" onClick={() => {}} />
              <Button label="Danger" variant="danger" onClick={() => {}} />
            </div>
          </ComponentDemo>

          <ComponentDemo name="Tab Component" description="여러 콘텐츠를 탭으로 구분하여 표시하는 컴포넌트">
            <TabComponent tabs={tabs} />
          </ComponentDemo>

          <ComponentDemo name="Toggle Switch" description="On/Off 상태를 표현하는 토글 스위치">
            <ToggleSwitch initialState={true} />
          </ComponentDemo>
        </ComponentSection>

        {/* Feedback & Status */}
        <ComponentSection
          title="Feedback & Status"
          description="사용자에게 피드백을 제공하는 알림, 모달, 로더 등의 컴포넌트"
        >
          <ComponentDemo name="Toast" description="사용자에게 일시적인 메시지를 표시하는 알림">
            <Button 
              label="Show Toast" 
              variant="primary" 
              onClick={() => setIsToastOpen(true)}
            />
            <Toast 
              message="테스트 메시지입니다!" 
              show={isToastOpen} 
              onClose={() => setIsToastOpen(false)} 
            />
          </ComponentDemo>

          <ComponentDemo name="Confirm Modal" description="사용자 확인이 필요한 작업에 사용되는 모달">
            <Button 
              label="Open Modal" 
              variant="primary" 
              onClick={() => setIsModalOpen(true)}
            />
            <ConfirmModal
              isOpen={isModalOpen}
              onConfirm={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
              message="정말로 실행하시겠습니까?"
            />
          </ComponentDemo>

          <ComponentDemo name="Loader" description="로딩 상태를 나타내는 스피너">
            <Loader />
          </ComponentDemo>

          <ComponentDemo name="Progress Bar" description="작업 진행률을 시각적으로 표시">
            <ProgressBar value={75} max={100} />
          </ComponentDemo>
        </ComponentSection>

        {/* Data Display */}
        <ComponentSection
          title="Data Display"
          description="데이터를 시각적으로 표현하는 차트, 표, 카드 등의 컴포넌트"
        >
          <ComponentDemo name="Table" description="구조화된 데이터를 표 형태로 표시">
            <Table data={jsonData} />
          </ComponentDemo>

          <ComponentDemo name="Card" description="정보를 카드 형태로 표시하는 컴포넌트">
            <Card
              title="Sample Card"
              description="카드 컴포넌트 예시입니다"
              imageUrl="/sample/sample_images_00.png"
            />
          </ComponentDemo>

          <ComponentDemo name="Star Rating" description="별점을 표시하는 평점 컴포넌트">
            <StarRating stars={4.5} />
          </ComponentDemo>

          <ComponentDemo name="Animated Number" description="숫자가 애니메이션과 함께 증가하는 효과">
            <AnimatedNumber start={0} end={1000} duration={3000} />
          </ComponentDemo>
        </ComponentSection>

        {/* Charts */}
        <ComponentSection
          title="Data Visualization"
          description="데이터를 차트로 시각화하는 다양한 차트 컴포넌트"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            <ComponentDemo name="Doughnut Chart" description="도넛형 차트로 비율 데이터 표시">
              <DynamicChart chartType="doughnut" data={trafficData} />
            </ComponentDemo>

            <ComponentDemo name="Bar Chart" description="막대형 차트로 데이터 비교">
              <DynamicChart chartType="bar" data={trafficData} />
            </ComponentDemo>

            <ComponentDemo name="Line Chart" description="선형 차트로 트렌드 표시">
              <DynamicChart chartType="line" data={trafficData} />
            </ComponentDemo>

            <ComponentDemo name="Radar Chart" description="레이더형 차트로 다차원 데이터 표시">
              <DynamicChart chartType="radar" data={trafficData} />
            </ComponentDemo>

            <ComponentDemo name="Polar Area Chart" description="극지역형 차트로 카테고리별 데이터 표시">
              <DynamicChart chartType="polarArea" data={trafficData} />
            </ComponentDemo>

            <ComponentDemo name="Bubble Chart" description="버블 차트로 3차원 데이터 표시">
              <div className="h-64">
                <DynamicChart chartType="bubble" data={trafficData2} className="w-full h-full" />
              </div>
            </ComponentDemo>
          </div>
        </ComponentSection>

        {/* Media & Input */}
        <ComponentSection
          title="Media & Input"
          description="미디어 표시 및 사용자 입력을 위한 컴포넌트"
        >
          <ComponentDemo name="Image Slider" description="여러 이미지를 슬라이드 형태로 표시">
            <Slider imgArr={slidesData} />
          </ComponentDemo>

          <ComponentDemo name="Image Zoom" description="이미지에 줌 기능을 제공">
            <ImageZoom 
              imgSrc={slidesData[0].src}
              resultWidth={250}
              resultHeight={250}
            />
          </ComponentDemo>

          <ComponentDemo name="Search Input" description="검색 기능이 포함된 입력 필드">
            <SearchInput onSearch={(query) => console.log('Search:', query)} />
          </ComponentDemo>
        </ComponentSection>

        {/* Quick Navigation */}
        <ComponentSection
          title="Quick Navigation"
          description="빠른 페이지 이동을 위한 네비게이션 버튼들"
        >
          <ComponentDemo name="Page Navigation" description="다른 페이지로 이동하는 버튼들">
            <div className="flex gap-3 flex-wrap">
              <Button 
                label="Todo List" 
                variant="secondary" 
                onClick={() => router.push('/todo')}
              />
              <Button 
                label="Initialize" 
                variant="secondary" 
                onClick={() => router.push('/init')}
              />
            </div>
          </ComponentDemo>
        </ComponentSection>
      </div>
    </div>
  )
}
