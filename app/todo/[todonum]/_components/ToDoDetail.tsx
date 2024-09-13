'use client'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function ToDoDetail() {
  const param = useParams();
  
  useEffect(() => {
    console.info(param);
    return () => {}
  }, [param]);
  
  return (
    <div>ToDoDetail</div>
  )
}
