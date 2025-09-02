'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import TiptapEditor from './Tiptap'
import PageLayout from '@/app/_components/PageLayout'
import SectionCard from '@/app/_components/SectionCard'
import Button from '@/app/system/_components/Button'
import Toast from '@/app/system/_components/Toast'

export default function Editors() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [isToastOpen, setIsToastOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const router = useRouter()

  const handleContentChange = (value: string) => {
    setContent(value)
  }

  const fetchSaveText = async () => {
    if (!title.trim() || !content.trim()) {
      setToastMessage('제목과 내용을 모두 입력해주세요.')
      setIsToastOpen(true)
      return
    }

    try {
      const res = await fetch('/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, writer: '사용자이름' }),
      })

      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || '저장 실패')
      }

      const data = await res.json()
      setToastMessage('문서가 성공적으로 저장되었습니다!')
      setIsToastOpen(true)
      console.log('✅ 저장 성공:', data)
      return data
    } catch (err) {
      setToastMessage('저장 중 오류가 발생했습니다.')
      setIsToastOpen(true)
      console.error('❌ 저장 중 오류:', err)
      return null
    }
  }

  const clearContent = () => {
    setTitle('')
    setContent('')
    setToastMessage('내용이 초기화되었습니다.')
    setIsToastOpen(true)
  }

  return (
    <PageLayout
      title="✏️ Rich Text Editor"
      description="TipTap 기반의 강력한 텍스트 편집기로 다양한 포맷의 문서를 작성하세요."
    >
      <Toast 
        message={toastMessage}
        show={isToastOpen}
        onClose={() => setIsToastOpen(false)}
      />

      <div className="space-y-6">
        
        {/* 문서 정보 입력 */}
        <SectionCard 
          title="문서 정보" 
          description="문서의 기본 정보를 입력하세요"
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                문서 제목
              </label>
              <input
                type="text"
                value={title}
                placeholder="문서 제목을 입력하세요"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                label="저장하기"
                variant="primary"
                onClick={fetchSaveText}
              />
              <Button
                label="초기화"
                variant="danger"
                onClick={clearContent}
              />
              <Button
                label="홈으로"
                variant="secondary"
                onClick={() => router.push('/')}
              />
            </div>
          </div>
        </SectionCard>

        {/* 에디터 섹션 */}
        <SectionCard 
          title="문서 편집기" 
          description="다양한 서식과 기능을 사용해 문서를 작성하세요"
        >
          <div className="min-h-[500px]">
            <TiptapEditor id="main-editor" onChange={handleContentChange} />
          </div>
        </SectionCard>

        {/* 에디터 기능 안내 */}
        <SectionCard 
          title="에디터 기능" 
          description="사용 가능한 편집 기능들"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">텍스트 서식</h4>
              <p className="text-sm text-blue-600">굵게, 기울임, 밑줄, 취소선 등</p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">목록</h4>
              <p className="text-sm text-green-600">순서 있는 목록, 순서 없는 목록</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">헤더</h4>
              <p className="text-sm text-purple-600">H1, H2, H3 등 다양한 헤더</p>
            </div>
            
            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">링크</h4>
              <p className="text-sm text-yellow-600">URL 링크 삽입 및 편집</p>
            </div>
            
            <div className="p-4 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">이미지</h4>
              <p className="text-sm text-red-600">이미지 업로드 및 삽입</p>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h4 className="font-semibold text-indigo-800 mb-2">표</h4>
              <p className="text-sm text-indigo-600">표 생성 및 편집</p>
            </div>
          </div>
        </SectionCard>

        {/* 문서 통계 */}
        {(title || content) && (
          <SectionCard 
            title="문서 통계" 
            description="현재 문서의 상태"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">{title.length}</div>
                <div className="text-sm text-gray-500">제목 글자수</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">{content.length}</div>
                <div className="text-sm text-gray-500">내용 글자수</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-600">
                  {content.split(/\s+/).filter(word => word.length > 0).length}
                </div>
                <div className="text-sm text-gray-500">단어수</div>
              </div>
            </div>
          </SectionCard>
        )}
      </div>
    </PageLayout>
  )
}
