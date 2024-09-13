import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  value: number; // 목표값
  max: number; // 최대값
  duration?: number; // 애니메이션 지속시간 (ms)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max, duration = 1000 }) => {
  const [progress, setProgress] = useState(0); // 애니메이션되는 현재값

  useEffect(() => {
    let start = 0;
    const increment = (value / duration) * 10; // 애니메이션 속도 조절

    const animateProgress = () => {
      if (start < value) {
        start += increment;
        setProgress(Math.min(start, value));
        setTimeout(animateProgress, 5);
      }
    };

    animateProgress(); // 애니메이션 시작

    return () => {
      setProgress(0); // 컴포넌트 언마운트 시 초기화
    };
  }, [value, duration]);

  // 퍼센티지 계산
  const percentage = Math.min((progress / max) * 100, 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-8">
      <div
        className="bg-blue-500 h-8 rounded-full transition-all duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;
