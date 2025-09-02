'use client'

import Spending from '@/app/_components/Spending'
import Button from '@/app/system/_components/Button'
import PageLayout from '@/app/_components/PageLayout'
import SectionCard from '@/app/_components/SectionCard'
import SearchInput from '@/app/system/_components/SearchInput'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ToDoList() {
    const [todos, setTodos] = useState([
        'UI 컴포넌트 라이브러리 구축',
        '디자인 시스템 문서화',
        '공통 함수 및 유틸리티 작성',
        '상수 파일 정리 및 관리',
        'API 연동 로직 구현'
    ])
    const [newTodo, setNewTodo] = useState('')
    const [filter, setFilter] = useState('')
    
    const router = useRouter()

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos(prev => [...prev, newTodo.trim()])
            setNewTodo('')
        }
    }

    const deleteTodo = (idx: number) => {
        setTodos(prev => prev.filter((_, i) => i !== idx))
    }

    const filteredTodos = todos.filter(todo => 
        todo.toLowerCase().includes(filter.toLowerCase())
    )

    const handleSearch = (query: string) => {
        setFilter(query)
    }

    useEffect(() => {
        return () => {}
    }, [todos])

    return (
        <PageLayout
            title="📝 Todo Manager"
            description="할 일을 효율적으로 관리하고 추적할 수 있는 시스템입니다."
        >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Todo 입력 섹션 */}
                <SectionCard 
                    title="새 할 일 추가" 
                    description="새로운 작업을 추가하세요"
                    className="lg:col-span-1"
                >
                    <div className="space-y-4">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            placeholder="새 할 일을 입력하세요..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                        />
                        <Button
                            label="추가하기"
                            variant="primary"
                            onClick={addTodo}
                            className="w-full"
                        />
                    </div>
                </SectionCard>

                {/* Todo 목록 섹션 */}
                <SectionCard 
                    title="할 일 목록" 
                    description={`총 ${filteredTodos.length}개의 할 일이 있습니다`}
                    className="lg:col-span-2"
                >
                    <div className="space-y-4">
                        <SearchInput
                            onSearch={handleSearch}
                            placeholder="할 일 검색..."
                        />
                        
                        <div className="space-y-3 max-h-96 overflow-y-auto">
                            {filteredTodos.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    {filter ? '검색 결과가 없습니다.' : '할 일이 없습니다. 새로운 작업을 추가해보세요!'}
                                </div>
                            ) : (
                                filteredTodos.map((todo, idx) => (
                                    <div 
                                        key={`${todo}-${idx}`}
                                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                                    >
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                            <span className="text-gray-800">{todo}</span>
                                        </div>
                                        <Button
                                            label="완료"
                                            variant="danger"
                                            onClick={() => deleteTodo(idx)}
                                            className="text-sm px-3 py-1"
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </SectionCard>
            </div>

            {/* 추가 기능 섹션 */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <SectionCard 
                    title="지출 관리" 
                    description="할 일과 관련된 지출을 추적하세요"
                >
                    <Spending />
                </SectionCard>

                <SectionCard 
                    title="빠른 이동" 
                    description="다른 섹션으로 이동하세요"
                >
                    <div className="flex flex-wrap gap-3">
                        <Button
                            label="시스템 컴포넌트"
                            variant="secondary"
                            onClick={() => router.push('/system')}
                        />
                        <Button
                            label="홈으로"
                            variant="secondary"
                            onClick={() => router.push('/')}
                        />
                        <Button
                            label="에디터"
                            variant="secondary"
                            onClick={() => router.push('/editor')}
                        />
                    </div>
                </SectionCard>
            </div>

            {/* 통계 정보 */}
            <div className="mt-8">
                <SectionCard 
                    title="통계" 
                    description="현재 상태 요약"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{todos.length}</div>
                            <div className="text-sm text-blue-800">전체 할 일</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{filteredTodos.length}</div>
                            <div className="text-sm text-green-800">검색 결과</div>
                        </div>
                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                {todos.length > 0 ? Math.round((filteredTodos.length / todos.length) * 100) : 0}%
                            </div>
                            <div className="text-sm text-purple-800">매칭률</div>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </PageLayout>
    )
}
