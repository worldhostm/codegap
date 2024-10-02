'use client'
import React, { useEffect, useState } from 'react'
import ProgressBar from '../system/_components/ProgressBar'
import { describe } from 'node:test';
import styles from './progressTile.module.css';

interface Props{
    percentage: number;
    label: string;
    targetAmount: number;
    currentAmount: number;  
    description?:string; // 설명
    currentlabel?:string; // 달성금액 라벨
    targetlabel?:string; // 목표금액 라벨
}
export default function ProgressTile({percentage, label, targetAmount, currentAmount, description, targetlabel, currentlabel}: Props) {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // 마우스 움직임을 추적하여 상태 업데이트
    const handleMouseMove = (e: MouseEvent) => {
        setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    useEffect(() => {
        // 마우스 이동 이벤트 리스너 추가
        document.addEventListener('mousemove', handleMouseMove);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
  
    return (
    <div className={`w-[full] h-[full] relative ${styles[`custom-cursor-container`]}`}>
        <div
        className='w-[300px] h-[180px] bg-white border border-gray-200 rounded-[8px] flex gap-3 items-center justify-center flex-col p-4'
        >
            <div className='w-[100%] flex jusitify-start sm:text-base font-Pretendard font-semibold'>
                <div className='flex gap-2'>
                    <div>
                        {label}
                    </div>
                    <div className='text-gray-500 text-sm flex items-center'>
                        {description}
                    </div>
                </div>
            </div>
            <div className='w-[100%] flex jusitify-start sm:text-xl font-bold text-blue-500 font-mono'>
                {percentage} %
                <span className='text-blue-300 text-base flex items-center'>&nbsp;달성</span>
                </div>
            <ProgressBar value={percentage} max={100} />
            <div className='w-[100%] flex gap-4 jusitify-start sm:text-xs font-semibold '>
                <div className='w-[60px] h-[20px] bg-gray-200 rounded-md flex items-center justify-center'>
                    {currentlabel ??'달성금액'}
                </div>
                <div>
                {currentAmount.toLocaleString('ko-KR')}
                </div>
            </div>
            <div className='w-[100%] flex gap-4 jusitify-start sm:text-xs font-semibold'>
                <div className='w-[60px] h-[20px] bg-gray-200 rounded-md flex items-center justify-center font-semibold'>
                    {targetlabel??'목표금액'}
                </div>
                <div>
                    {targetAmount.toLocaleString('ko-KR')}
                </div>
            </div>
        </div>
        <div className={`custom-cursor ${styles[`custom-cursor`]}`} style={{ left: cursorPosition.x, top: cursorPosition.y }} />
    </div>
  )
}
