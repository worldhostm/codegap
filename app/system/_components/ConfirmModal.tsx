import React from 'react';

interface ConfirmModalProps {
  message: string; // 모달에 표시할 메시지
  isOpen: boolean; // 모달이 열려 있는지 여부
  onConfirm: () => void; // "확인" 버튼을 클릭했을 때 호출될 함수
  onCancel: () => void; // "취소" 버튼을 클릭했을 때 호출될 함수
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ message, isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null; // 모달이 닫혀 있을 경우 렌더링하지 않음

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
        <p className="text-lg mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
          >
            취소
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
