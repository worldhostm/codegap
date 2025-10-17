'use client'

import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Quill from 'quill';
import QuillBetterTable from 'quill-better-table';
import 'quill-better-table/dist/quill-better-table.css'

const BlockEmbed = Quill.import('blots/block/embed');
const Block = Quill.import('blots/block');
Block.tagName = ['DIV', 'TABLE', 'TR', 'TD', 'TH'];

class TextBoxBlot extends BlockEmbed {
  static create() {
    const node = super.create();
    node.setAttribute('class', 'quill-textbox');
    node.setAttribute('contenteditable', 'true');
    node.innerHTML = '기본 입력되있는'; // 기본 텍스트
    return node;
  }
}

TextBoxBlot.blotName = 'textbox';
TextBoxBlot.tagName = 'div';
Quill.register(TextBoxBlot);
Quill.register(Block,true);
Quill.register({
  'modules/better-table': QuillBetterTable
}, true);
// Quill은 SSR이 안 되므로 dynamic import
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

interface QuillEditorProps {
  id: string
  initialValue?: string
  // onChange:(e:any)=>void
  onChange:()=>Dispatch<SetStateAction<string>>
  valueText : string
}

export default function QuillEditor({ id, initialValue }: QuillEditorProps) {
  const [value, setValue] = useState(initialValue || '');

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
  
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
  
      const formData = new FormData();
      formData.append("image", file);
  
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
  
        const { url } = await res.json();
  
        // 에디터 인스턴스 확인
        const editor = quillRef.current?.getEditor();
        if (!editor) {
          console.warn("Quill editor not ready");
          return;
        }
  
        // getSelection(true)는 강제로 포커스 줌
        const range = editor.getSelection(true);
  
        // 안정성을 위해 100ms 지연 후 insertEmbed 실행
        if (!range || typeof range.index !== 'number') {
          setTimeout(() => {
            const fallbackRange = editor.getSelection(true);
            if (fallbackRange && typeof fallbackRange.index === 'number') {
              editor.insertEmbed(fallbackRange.index, 'image', url);
              editor.setSelection(fallbackRange.index + 1,0);
            } else {
              editor.insertEmbed(editor.getLength(), 'image', url);
            }
          }, 100);
        } else {
          editor.insertEmbed(range.index, "image", url);
          editor.setSelection(range.index + 1,0);
        }
      } catch (err) {
        console.error("Upload failed", err);
      }
    };
  };
  
  const quillRef = React.useRef<ReactQuill | null>()

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ script: 'sub' }, { script: 'super' }],
        ['blockquote', 'code-block'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
      ],
    },
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const insertTextBox = () => {
    const editor = quillRef.current?.getEditor();
    const range = editor?.getSelection(true);
  
    if (editor && range && typeof range.index === "number") {
      editor.insertEmbed(range.index, 'textbox', true, 'user');
      // editor.setSelection(range.index + 1);
    }
  };

  const insertBasicTable = () => {
    const editor = quillRef.current?.getEditor();
    const html = `
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <tr>
          <th>Header 1</th><th>Header 2</th><th>Header 3</th>
        </tr>
        <tr>
          <td>Row 1</td><td>Row 1</td><td>Row 1</td>
        </tr>
      </table>
    `;
    editor?.clipboard.dangerouslyPasteHTML(editor.getSelection()?.index || 0, html);
  };

  return (
    <div style={{ marginBottom: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
      <button onClick={insertBasicTable} className="mb-2 px-4 py-2 bg-green-500 text-white rounded">
      표 삽입
    </button>
      <button onClick={insertTextBox} className="mb-2 px-4 py-2 bg-blue-500 text-white rounded">
      텍스트 박스 삽입
    </button>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={imageHandler} // 기존 input.onchange와 동일한 로직
      />
      <ReactQuill value={value} onChange={setValue} modules={modules} ref={quillRef }/>
      <p>
        <strong>Editor {id} HTML Output:</strong>
      </p>
      <div className='w-full p-6 flex break-all'>{value}</div>
    </div>
  )
}
