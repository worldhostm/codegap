'use client'

import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import Highlight from '@tiptap/extension-highlight'

import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'

import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image';
import { useEditor, EditorContent } from '@tiptap/react'
import Heading from '@tiptap/extension-heading';
import Document from '@tiptap/extension-document';
import Gapcursor from '@tiptap/extension-gapcursor';
import Paragraph from '@tiptap/extension-paragraph';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Text from '@tiptap/extension-text';
import { useCallback, useEffect } from 'react';
import {TextBox} from './tiptap/TextBox';
import FileHandler from '@tiptap-pro/extension-file-handler';
import TextAlign from '@tiptap/extension-text-align';
import Strike from '@tiptap/extension-strike';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Underline from '@tiptap/extension-underline';
// import Emoji, { gitHubEmojis } from '@tiptap-pro/extension-emoji'
// import suggestion from './suggestion';

// Emoji.configure({
//   emojis: gitHubEmojis,
// })

interface TiptapEditorProps {
  id: string
  initialContent?: string
}
Table.configure({
  HTMLAttributes: {
    class: 'my-custom-class',
  },
})
export default function TiptapEditor({ id, initialContent }: TiptapEditorProps) {
  const editor = useEditor({
    extensions: [
      Document,
      Highlight.configure({ multicolor: true }),
      Italic,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        isAllowedUri: (url, ctx) => {
          try {
            // construct URL
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`)

            // use default validation
            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false
            }

            // disallowed protocols
            const disallowedProtocols = ['ftp', 'file', 'mailto']
            const protocol = parsedUrl.protocol.replace(':', '')

            if (disallowedProtocols.includes(protocol)) {
              return false
            }

            // only allow protocols specified in ctx.protocols
            const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme))

            if (!allowedProtocols.includes(protocol)) {
              return false
            }

            // disallowed domains
            const disallowedDomains = ['example-phishing.com', 'malicious-site.net']
            const domain = parsedUrl.hostname

            if (disallowedDomains.includes(domain)) {
              return false
            }

            // all checks have passed
            return true
          } catch {
            return false
          }
        },
        shouldAutoLink: url => {
          try {
            // construct URL
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`)

            // only auto-link if the domain is not in the disallowed list
            const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com']
            const domain = parsedUrl.hostname

            return !disallowedDomains.includes(domain)
          } catch {
            return false
          }
        },

      }),
      Blockquote,
      Paragraph,
      Text,
      Image,
      Bold,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Gapcursor,
      TextBox,
      Heading,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      // Emoji.configure({
      //   emojis: gitHubEmojis,
      //   enableEmoticons: true,
      //   suggestion,
      // }),
      FileHandler.configure({
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
        onDrop: (currentEditor, files, pos) => {
          files.forEach(file => {
            const fileReader = new FileReader()

            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
              currentEditor.chain().insertContentAt(pos, {
                type: 'image',
                attrs: {
                  src: fileReader.result,
                },
              }).focus().run()
            }
          })
        },
        onPaste: (currentEditor, files, htmlContent) => {
          files.forEach(file => {
            if (htmlContent) {
              // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
              // you could extract the pasted file from this url string and upload it to a server for example
              console.log(htmlContent) // eslint-disable-line no-console
              return false
            }

            const fileReader = new FileReader()

            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
              currentEditor.chain().insertContentAt(currentEditor.state.selection.anchor, {
                type: 'image',
                attrs: {
                  src: fileReader.result,
                },
              }).focus().run()
            }
          })
        },
      }),
    ],
    content:``,
  })

  const addImage = useCallback(() => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  useEffect(() => {
    return () => {
      editor?.destroy()
    }
  }, [editor])

  if (!editor) return null

  return (
    // bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]
    // <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem' }}>
    //   <div 
    //   className='flex gap-[8px]'
    //   style={{ marginBottom: '0.5rem' }}
    //   >
    <div className="control-group">
        <div className="button-group block gap-[8px] break-all w-[1200px] h-[auto]">
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'is-active' : ''}
          >
            Toggle highlight
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffc078' }).run()}
            className={editor.isActive('highlight', { color: '#ffc078' }) ? 'is-active' : ''}
          >
            Orange
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#8ce99a' }).run()}
            className={editor.isActive('highlight', { color: '#8ce99a' }) ? 'is-active' : ''}
          >
            Green
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#74c0fc' }).run()}
            className={editor.isActive('highlight', { color: '#74c0fc' }) ? 'is-active' : ''}
          >
            Blue
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()}
            className={editor.isActive('highlight', { color: '#b197fc' }) ? 'is-active' : ''}
          >
            Purple
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: 'red' }).run()}
            className={editor.isActive('highlight', { color: 'red' }) ? 'is-active' : ''}
          >
            Red ('red')
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHighlight({ color: '#ffa8a8' }).run()}
            className={editor.isActive('highlight', { color: '#ffa8a8' }) ? 'is-active' : ''}
          >
            Red (#ffa8a8)
          </button>
          <button
            onClick={() => editor.chain().focus().unsetHighlight().run()}
            disabled={!editor.isActive('highlight')}
          >
            Unset highlight
          </button>
        <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`bg-blue-500 text-white px-4 py-2 rounded ${editor.isActive('bold') ? 'is-active' : ''}`}
          >
            Toggle bold
        </button>
        <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          Toggle blockquote
        </button>
        <button
            onClick={() => editor.chain().focus().setBlockquote().run()}
            disabled={!editor.can().setBlockquote()}
          >
            Set blockquote
          </button>
          <button
            onClick={() => editor.chain().focus().unsetBlockquote().run()}
            disabled={!editor.can().unsetBlockquote()}
          >
            Unset blockquote
          </button>
        <button onClick={addImage}>Set image</button>
          <button
            onClick={() => editor.chain().focus().insertContent({
              type: 'textBox',
              content: [
                {
                  type: 'paragraph',
                  content: [{ type: 'text', text: '텍스트 박스입니다!' }],
                },
              ],
            }).run()
            }
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            텍스트 박스 삽입
         </button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]"
            onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: false  }).run()}>
            Insert table
          </button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().addColumnBefore().run()}>
            Add column before
          </button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().addColumnAfter().run()}>Add column after</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().deleteColumn().run()}>Delete column</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().addRowBefore().run()}>Add row before</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().addRowAfter().run()}>Add row after</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().deleteRow().run()}>Delete row</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().deleteTable().run()}>Delete table</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().mergeCells().run()}>Merge cells</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().splitCell().run()}>Split cell</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().toggleHeaderColumn().run()}>
            Toggle header column
          </button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().toggleHeaderRow().run()}>
            Toggle header row
          </button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().toggleHeaderCell().run()}>
            Toggle header cell
          </button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().mergeOrSplit().run()}>Merge or split</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().setCellAttribute('colspan', 2).run()}>
            Set cell attribute
          </button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().fixTables().run()}>Fix tables</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().goToNextCell().run()}>Go to next cell</button>
          <button className ="bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]" onClick={() => editor.chain().focus().goToPreviousCell().run()}>
            Go to previous cell
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px] ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
          >
            Left
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px] ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}
          >
            Center
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px] ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
          >
            Right
          </button>
          <button
            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
            className={`bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px] ${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}`}
          >
            Justify
          </button>
          <button 
          className={`bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]`}
          onClick={() => editor.chain().focus().unsetTextAlign().run()}>
            Unset text align
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]${editor.isActive({ level: 1 }) ? 'is-active' : ''}`}
          >
            Toggle H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`bg-gray-200 w-[auto] h-[auto] p-[10px] rounded-[8px]${editor.isActive({ level: 2 }) ? 'is-active' : ''}`}
          >
            Toggle H2
          </button>
      </div>
      <EditorContent editor={editor} className='tiptap'/>
      <p>
        <strong>HTML Output:</strong>
      </p>
      <div
      style={{ 
        width:'700px',
        wordBreak: 'break-word' 
      
      }}
      dangerouslySetInnerHTML={{ __html: editor.getHTML() }} />
    </div>
  )
}
