'use client'
import React, { useState } from 'react'
import ToggleButtonTab from '../../system/_components/ToggleButtonTab'

// 수정된 컴포넌트들
const Component1 = () => <div className="absolute top-20 left-0 w-full h-screen bg-black"></div>
const Component2 = () => <div className="absolute top-20 left-0 w-full h-screen bg-red-600"></div>

export default function PortFolio() {
  const [activeTab, setActiveTab] = useState<boolean>(false)

  return (
    <div className="p-4">
      <ToggleButtonTab 
         options={['경력','포트폴리오']}
         isActive={activeTab}
         setisActive={() => setActiveTab(!activeTab)}
         className={`z-10 border-2 ${activeTab ? `border-black`: `border-red-400`}`}
      />
      {/* <div className="mt-4"> */}
        {activeTab ? <Component1 /> : <Component2 />}
      {/* </div> */}
    </div>
  )
}