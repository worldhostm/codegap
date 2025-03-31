'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

// Quill은 SSR이 안 되므로 dynamic import
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface QuillEditorProps {
  id: string
  initialValue?: string
}

export default function QuillEditor({ id, initialValue }: QuillEditorProps) {
  const [value, setValue] = useState(initialValue || '')
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }], // 글씨색 / 하이라이트
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  }

  return (
    <div style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
      <ReactQuill value={value} onChange={setValue} modules={modules}/>
      <p>
        <strong>Editor {id} HTML Output:</strong>
      </p>
      <div className='w-full p-6 flex break-all'>{value}</div>
    </div>
  )
}
