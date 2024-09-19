'use client'

import React, { useEffect, useState } from 'react'

export default function Init() {
const [isInit ,setisInit] = useState<boolean>(false);

// useEffect(() => {
//   setisInit(true);
//   return () => {
//   }
// }, [])

return (
    <div className='fixed w-full h-full flex items-center justify-center bg-black'>
      <div 
      className='relative rounded-full bg-red-600 flex items-center justify-center w-[100%] h-[100%] animate-growWidth'
      >
        <div
        className='absolute w-[100%] h-[100%] rounded-full bg-black'
        />
        <div style={{
            color:'white',
            zIndex:1
        }}
        className='animate-fadeIn text-8xl whitespace-nowrap w-full font-extrabold'
        >
            CODE GAP
        </div>
      </div>
    </div>
  );
  
}
