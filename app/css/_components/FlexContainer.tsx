import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string; // 추가 스타일을 위해 사용
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      {children}
    </div>
  );
}
