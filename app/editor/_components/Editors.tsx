'use client'
import React, { useState } from 'react';
import TiptapEditor from './Tiptap';


export default function Editors() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 에디터 내용이 변경될 때 호출될 함수
  const handleContentChange = (value: string) => {
    setContent(value)
  }

  // 저장 API 호출
  const fetchSaveText = async () => {
    try {
      const res = await fetch('/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, writer: '사용자이름' }), // writer는 하드코딩 예시
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || '저장 실패')
      }

      const data = await res.json()
      console.log('✅ 저장 성공:', data)
      return data
    } catch (err) {
      console.error('❌ 저장 중 오류:', err)
      return null
    }
  }

  return (
    <div>
      <TiptapEditor id={"1"} />
      {/* <input
        type="text"
        value={title}
        placeholder="제목을 입력하세요"
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <QuillEditor
        id="1"
        initialValue="<p>텍스트를 입력하세요</p>"
        onChange={()=>setContent}
        valueText={content}
      />

      <button
        onClick={fetchSaveText}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        저장
      </button> */}
    </div>
  )
}
