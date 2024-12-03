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
      className='absolute flex items-center justify-center w-[100%] h-[100%]'
      >
        <div
        className='fixed border-red-600 w-[120vw] h-[120vh] rounded-full bg-black animate-growWidth'
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
