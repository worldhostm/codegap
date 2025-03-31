import React from 'react'
import TiptapEditor from './Tiptap';
import QuillEditor from './QuillEditor';

export default function Editors() {
  return (
    <div>
      <TiptapEditor id="1" initialContent="<p>This is the first editor.</p>" />
      <QuillEditor id="1" initialValue="<p>This is the first Quill editor.</p>" />
    </div>
  )
}
