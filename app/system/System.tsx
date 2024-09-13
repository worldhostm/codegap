'use client'

import React, { useEffect, useState } from 'react'
import Container from '../css/_components/FlexContainer'
import Button from './_components/Button'
import Loader from './_components/Loader'
import Toast from './_components/Toast'
import AnimatedNumber from './_components/AnimatedNumber'
import Slider from './_components/Slider'
import { Doughnut } from 'react-chartjs-2'
import DoughnutChart from './_components/chart/DoughnutChart'
import ToggleSwitch from './_components/ToggleButton'
import Card from './_components/Card'
import ProgressBar from './_components/ProgressBar'
import ConfirmModal from './_components/ConfirmModal'
import Table from './_components/Table'
import SearchInput from './_components/SearchInput'
import { useRouter } from 'next/navigation'
import { setInterval } from 'timers'
import ImageZoom from './_components/ImageZoom'

export default function System() {
  const [isOpen,setisOpen] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload(); // 페이지 새로고침
    }, 30000 * 1000); // 5초마다 새로고침

    return () => {
      clearInterval(interval);
    };
  }, []);

  const slidesData = [
    { src: '/sample/sample_images_00.png', caption: 'Caption One' },
    { src: '/sample/sample_images_01.png', caption: 'Caption Two' },
    { src: '/sample/sample_images_02.png', caption: 'Caption Three' },
  ];
const trafficData = {
  labels: ['Organic Search', 'Direct', 'Referral', 'Social', 'Paid Search'],
  datasets: [
    {
      label: 'Traffic Sources',
      data: [40, 30, 15, 10, 5], // 트래픽 소스의 비율
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 3,
    },
  ]
};

const jsonData = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
  { id: 3, name: 'Sam Johnson', age: 22, email: 'sam@example.com' },
];

  return (
    <Container
        className='flex-wrap gap-10 w-[1800px]'
    >
        <Button 
        label='Toast Test'
        variant='primary'
        onClick={()=>{setisOpen(!isOpen)}}
        />
        <Button 
        label='TODOLIST'
        variant='secondary'
        onClick={()=>{router.push('/todo')}}
        />
        <Button 
        label='BUTTON'
        variant='danger'
        onClick={()=>{}}
        />
        <Loader />
        <Toast 
        message='테스트'
        show={isOpen}
        onClose={()=>{
            setisOpen(false);
        }}
        />
        <AnimatedNumber
        start={0}
        end={1000}
        duration={3000}
        />
        <Slider 
        imgArr={slidesData}
        />
        <DoughnutChart 
        data={trafficData}
        />
        <ToggleSwitch 
        initialState={true}
        />
        <Card
        title='테스트'
        description='설명'
        imageUrl='/sample/sample_images_00.png'
        />
        <ProgressBar
        value={80}
        max={100}
        />
        <Button
        label='ConfirmModal'
        variant='primary'
        onClick={()=>setisOpen(!isOpen)}
        className='animate-wiggle'
        />
        <ConfirmModal
        isOpen={isOpen}
        onConfirm={()=>setisOpen(false)}
        onCancel={()=>setisOpen(false)}
        message='테스트 용입니다.'
        />
        <Table data={jsonData}/>
        <SearchInput
        onSearch={()=>{}}
        />
        <ImageZoom 
          imgSrc={slidesData[0].src}
          resultWidth={300}
          resultHeight={300}
        />
    </Container>
  )
}
