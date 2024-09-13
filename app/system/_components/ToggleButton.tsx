'use client'
import React, { useEffect, useState } from 'react';

interface ToggleSwitchProps {
  label?: string; // 선택적으로 토글 스위치에 레이블을 추가할 수 있음
  initialState?: boolean; // 초기 상태 (true = 켜짐, false = 꺼짐)
  onChange?: (checked: boolean) => void; // 토글 상태 변경 시 호출되는 콜백 함수
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, initialState = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(initialState);

  const toggleSwitch = () => {
      const newState = !isChecked;
      setIsChecked(newState);
      if (onChange) {
        onChange(newState); // 상태 변경 시 부모 컴포넌트로 콜백 전달
      }
    };
    
    useEffect(() => {
      return () => {}
  }, [isChecked])
  

  return (
    <div className="flex items-center space-x-3">
      {label && <span>{label}</span>}
      <div
        className={`w-12 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isChecked ? 'bg-blue-500' : 'bg-gray-300'}`}
        style={{
            backgroundColor:isChecked ? '#3b82f6' : ''
        }}
        onClick={toggleSwitch}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${isChecked ? 'translate-x-5' : 'translate-x-0'}`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
