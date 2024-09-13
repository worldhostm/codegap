import React, { useState } from 'react';

interface LabeledInputProps {
  label: string;  // 라벨 텍스트
  placeholder?: string;  // 인풋 플레이스홀더
  value?: string;  // 초기 값
  onChange?: (value: string) => void;  // 값이 변경될 때 호출되는 함수
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;  // 키다운 이벤트
  }

const LabeledInput: React.FC<LabeledInputProps> = ({ label, placeholder = '', value = '', onChange , onKeyDown}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <label className="block mb-4">
      <span className="text-gray-700">{label}</span>
      <input
        type="text"
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
      />
    </label>
  );
};

export default LabeledInput;
