'use client'

import Button from '@/app/system/_components/Button';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { setTimeout } from 'timers';

export default function Init() {
const [isInit ,setisInit] = useState<boolean>(true);
useEffect(() => {
  setTimeout(() => {
    setisInit(false);
  }, 1500);
}, [isInit]);

const router = useRouter();
// useEffect(() => {
//   setisInit(true);
//   return () => {
//   }
// }, [])

return (
    <div className='fixed w-full h-full flex items-center justify-center bg-black p-20'>
      <div 
      className='flex items-center justify-center w-[100%] h-[100%] p-100'
      >
        <div
        className='absolute border-red-600 w-[110vw] h-[110vh] rounded-full bg-white animate-growWidth'
        // bg-gradient-to-r from-black to-gray-300
        />
        <div style={{
            color: isInit ? 'black':'white',
            zIndex:1,
            display:'flex',
            flexDirection:'column',
            gap:'100px',
            padding:'100px'
        }}
        className={`animate-fadeIn text-8xl whitespace-nowrap w-full font-extrabold p-100 ${isInit ? 'text-black' :'text-white'}`}
          // text-black`}
          
        >
            CODE GAP
        <Button 
        label='둘러보기'
        variant={'danger'}
        className='w-[30%] h-[100%] rounded-full text-3xl ml-px'
        onClick={()=>router.push('/system')}
        ></Button>
        </div>
      </div>
    </div>
  );
  
}
