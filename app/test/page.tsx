'use client'

import React from 'react'
import ProgressTile from '../_components/ProgressTile'
import Image from 'next/image'

export default function page() {
  const style = {
    animation: "rotateThenReverse 4s linear infinite",
  };
  return (
    <div className='w-[full] h-[full] p-2'>
      <style jsx>{`
        @keyframes rotateThenReverse {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(40deg);
          }
          50% {                      
            transform: rotate(360deg); /* 시계 방향 회전 */
          }
          60% {
            transform: rotate(340deg);
          }
          75% {
            transform: rotate(180deg); /* 반대 방향으로 회전 시작 */
          }
          100% {
            transform: rotate(0deg); /* 원래 위치 */
          }
        }
      `}</style>
        <ProgressTile 
            label='라벨'
            percentage={95}
            targetAmount={1000000}
            currentAmount={950000}
            description='설명'
        />
        <Image 
        src={'/sample/Benz.svg'} 
        width={60} 
        height={60} 
        alt=''
        style={style}
        />
    </div>
  )
}
