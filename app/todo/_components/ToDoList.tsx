'use client'

import Spending from '@/app/_components/Spending';
import Button from '@/app/system/_components/Button';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react'

export default function ToDoList() {
    const [todo, settodo] = useState(['컴포넌트 만들기', '디자인 컴포넌트 만들기', '공통 함수 작성하기', '상수 파일만들기']);
    const deleteTodo=(idx:number)=>{
        settodo((prev)=>{
            const newValue = prev.filter((e)=>e !== prev[idx]);
            return newValue;
        })
    }
    useEffect(() => {
      return () => {
      }
    }, [todo])
    
    const router = useRouter();
  return (
    <Fragment>
        {
            todo && todo.map((e,idx)=>
                <div 
                key={e + idx}
                className='bg-blue-200'
                >
                    {e}
                    <button onClick={()=>deleteTodo(idx)}>deleteTodo</button>
                </div>
            )
        }
        <Button
        label='시스템'
        onClick={()=>router.push('/system')}
        >
        </Button>
        <Spending />
    </Fragment>
  )
}
