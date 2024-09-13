import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  show: boolean;
  duration?: number; // 지속 시간 (ms)
  onClose: () => void;
}

export default function Toast({ message, show, duration = 3000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (show) {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration);
    }else{
        setVisible(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [show, duration, onClose]);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow-lg transition-transform duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
      style={{ zIndex: 50 }}
    >
      {message}
    </div>
  );
}
