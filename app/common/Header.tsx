'use client'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='w-full bg-black text-white p-8 flex'>
      <nav className='w-full flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Header</h1>
        <ul className='flex space-x-4 items-center gap-30'>
          <li><Link href="/todo" className='hover:text-gray-300'>Todo</Link></li>
          <li><Link href="/system" className='hover:text-gray-300'>System</Link></li>
          <li><Link href="/init" className='hover:text-gray-300'>Init</Link></li>
          <li><Link href="/portfolio" className='hover:text-gray-300'>PortFolio</Link></li>
          <li><Link href="/test" className='hover:text-gray-300'>테스트</Link></li>
          <li><Link href="/basket" className='hover:text-gray-300'>장바구니</Link></li>
          <li><Link href="/news" className='hover:text-gray-300'>뉴스</Link></li>
          <li><Link href="/sample" className='hover:text-gray-300'>샘플</Link></li>
          <li><Link href="/editor" className='hover:text-gray-300'>에디터s</Link></li>
        </ul>
      </nav>
    </header>
  )
}