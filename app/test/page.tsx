'use client'

import React, { useEffect, useState } from 'react'
import ProgressTile from '../_components/ProgressTile'
import Image from 'next/image'
import DynamicChart from '../system/_components/chart/DynamicChart';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
  ChartArea, } from 'chart.js';

// Chart.js에 필요한 컴포넌트를 등록합니다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function page() {
  const style = {
    animation: "rotateThenReverse 4s linear infinite",
  };

  // const trafficData = {
  //   labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Paid Search'],
  //   datasets: [
  //     {
  //       label: 'Traffic Sources',
  //       data: [80, 30, 15, 10, 5], // 트래픽 소스의 비율
  //       // backgroundColor: [
  //       //   'rgba(75, 192, 192, 0.2)',
  //       //   'rgba(255, 99, 132, 0.2)',
  //       //   'rgba(255, 205, 86, 0.2)',
  //       //   'rgba(54, 162, 235, 0.2)',
  //       //   'rgba(153, 102, 255, 0.2)',
  //       // ],
  //       backgroundColor: 'red',
  //       fill:'true',
  //       borderColor: [
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(255, 205, 86, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(153, 102, 255, 1)',
  //       ],
  //       borderWidth: 3,
  //       options : {
  //         scales: {
  //           x: {
  //             type: 'category', // 카테고리 스케일
  //           },
  //           y: {
  //             type: 'linear', // linear 스케일
  //             beginAtZero: true,
  //           },
  //         },
  //       }
  //     },
  //   ]
  // };

  const [trafficData, settrafficData] = useState({
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
        fill:true,
        borderColor:'rgba(45, 123, 246, 1)',
        backgroundColor: (context: ScriptableContext<'line'>) => getBackgroundColor(context),
        // borderWidth: 3,
      },
    ]
  });
  
  // `getBackgroundColor` 함수에서 차트의 context를 사용하여 그라데이션 적용
  const getBackgroundColor = (context: ScriptableContext<'line'>): CanvasGradient | undefined => {
    const {chart} = context;
    const {ctx, chartArea} = chart;

    if (!chartArea) {
      return undefined;
    }

    return createGradient(ctx, chartArea);
  };
  // 그라데이션 생성 함수
  function createGradient(ctx: CanvasRenderingContext2D, chartArea: ChartArea): CanvasGradient {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(45, 123, 246, 0.1)'); // 아래쪽 (투명)
    gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');
      //   changeCount < 0  ? 'rgba(45, 123, 246, 0.1)'
      // : changeCount > 0  ? 'rgba(248, 129, 120, 0.1)'
      // : changeCount === 0 ? 'rgba(53, 47, 56, 0.1)'
      // : 'rgba(255, 255, 255, 255)'
      // 'rgba(53, 47, 56, 0.1)'
      // ); // 위쪽 (색상으로 끝남)
    return gradient;
  }

  useEffect(() => {
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
          fill:true,
          borderColor:'rgba(75, 192, 192, 1)',
          backgroundColor: (context: ScriptableContext<'line'>) => getBackgroundColor(context),
          // borderWidth: 3,
        },
      ]
    };
    
  }, []);

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
