import React, { useState } from 'react';

interface Tab {
  label: string;
  content: string;
}

interface TabComponentProps {
  tabs: Tab[];  // 부모 컴포넌트에서 배열을 전달받음
}

const TabComponent: React.FC<TabComponentProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);  // 현재 활성화된 탭을 관리

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* 탭 헤더 */}
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}  // 탭 클릭 시 활성화된 탭 상태 업데이트
            className={`py-2 px-4 transition-colors duration-300 ${
              activeTab === index
                ? 'text-white bg-blue-500'
                : 'text-gray-500 bg-gray-200'
            } 
            ${index === 0 ? 'rounded-l-[48px]' : ''}  /* 첫 번째 탭에 왼쪽 위아래 모서리 둥글게 */
            ${index === tabs.length - 1 ? 'rounded-r-[48px]' : ''}  /* 마지막 탭에 오른쪽 위아래 모서리 둥글게 */
            ${index !== 0 && index !== tabs.length - 1 ? 'rounded-none' : ''}  /* 중간 탭에는 둥근 모서리 없음 */
            border focus:outline-none`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* 탭 콘텐츠 */}
      {/* <div className="p-4 border border-t-0 rounded-b-lg bg-white shadow-md">
        {tabs[activeTab].content}
      </div> */}
    </div>
  );
};

export default TabComponent;
