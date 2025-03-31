'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'

interface TiptapEditorProps {
  id: string
  initialContent?: string
}

export default function TiptapEditor({ id, initialContent }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent ?? `<p>Editor ${id}</p>`,
  })

  useEffect(() => {
    return () => {
      editor?.destroy()
    }
  }, [editor])

  if (!editor) return null

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem' }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
        <button onClick={() => editor.chain().focus().setParagraph().run()}>Paragraph</button>
        <button onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}>
          H2
        </button>
      </div>
      <EditorContent editor={editor} />
      <p>
        <strong>HTML Output:</strong>
      </p>
      <pre>{editor.getHTML()}</pre>
    </div>
  )
}
