'use client'

import Button from '@/app/system/_components/Button';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function Init() {
const [isInit ,setisInit] = useState<boolean>(false);
const router = useRouter();
// useEffect(() => {
//   setisInit(true);
//   return () => {
//   }
// }, [])

return (
    <div className='fixed w-full h-full flex items-center justify-center bg-black'>
      <div 
      className='relative rounded-full bg-red-600 flex items-center justify-center w-[100%] h-[100%] animate-growWidth z-10'
      >
        <div
        className='absolute w-[100%] h-[100%] rounded-full bg-black'
        // bg-gradient-to-r from-black to-gray-300
        />
        <div style={{
            color:'white',
            zIndex:1,
            display:'flex',
            flexDirection:'column',
            gap:'100px',
        }}
        className='animate-fadeIn text-8xl whitespace-nowrap w-full font-extrabold'
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
