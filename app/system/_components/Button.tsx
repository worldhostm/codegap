import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger'; // 다양한 스타일에 따라
  className?: string; // 추가적으로 CSS 커스터마이징이 가능하도록
}

export default function Button({
  label,
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  // 버튼 스타일에 따라 Tailwind 클래스를 동적으로 적용
  const baseClass = 'px-4 py-2 rounded font-semibold focus:outline-none';
  const variantClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
}
