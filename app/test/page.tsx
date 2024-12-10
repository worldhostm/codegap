'use client'

import React, { useEffect, useState } from 'react'
import ProgressTile from '../_components/ProgressTile'
import Image from 'next/image'
import DynamicChart from '../system/_components/chart/DynamicChart';

export default function page() {
  const style = {
    animation: "rotateThenReverse 4s linear infinite",
  };


  const [trafficData, settrafficData] = useState({});
  useEffect(() => {
    const canvas = document.getElementById('lineGraph') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d'); // CanvasRenderingContext2D 가져오기
      // 그라데이션 설정
    const gradient = ctx?.createLinearGradient(500, 0, 100, 0);
    console.info(gradient);
    gradient?.addColorStop(0, 'rgba(75, 192, 192, 1)'); // 상단 색상
    // gradient?.addColorStop(1, 'rgba(75, 192, 192, 0)');   // 하단 색상 (투명)
    const trafficData1 = {
      labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Paid Search'],
      datasets: [
        {
          label: 'Traffic Sources',
          data: [80, 30, 15, 10, 5], // 트래픽 소스의 비율
          // backgroundColor: [
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(255, 205, 86, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          // ],
          backgroundColor: 'red',
          fill:'true',
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 3,
          options : {
            scales: {
              x: {
                type: 'category', // 카테고리 스케일
              },
              y: {
                type: 'linear', // linear 스케일
                beginAtZero: true,
              },
            },
          }
        },
      ]
    };
    settrafficData(trafficData1);
  }, [trafficData])
  

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
      <div className='flex gap-5'>
          <ProgressTile 
              label='라벨'
              percentage={95}
              targetAmount={1000000}
              currentAmount={950000}
              description='설명'
          />
          <ProgressTile 
              label='라벨'
              percentage={95}
              targetAmount={1000000}
              currentAmount={950000}
              description='설명'
          />
          <ProgressTile 
              label='라벨'
              percentage={95}
              targetAmount={1000000}
              currentAmount={950000}
              description='설명'
          />
      </div>
      <div style={{
        width:'100vw'
      }}>
        <DynamicChart
            chartType='line'
            data={trafficData}
            id='lineGraph'
          />
      </div>
        {/* <Image 
        src={'/sample/Benz.svg'} 
        width={60} 
        height={60} 
        alt=''
        style={style}
        /> */}
    </div>
  )
}
