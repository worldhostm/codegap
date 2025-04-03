// extensions/TextBox.ts
import { Node, mergeAttributes } from '@tiptap/core'

export interface TextBoxOptions {
  HTMLAttributes: Record<string, any>
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    textBox: {
      insertTextBox: () => ReturnType
    }
  }
}

export const TextBox = Node.create<TextBoxOptions>({
  name: 'textBox',
  group: 'block',
  content: 'block+',
  defining: true,

  addAttributes() {
    return {
      backgroundColor: {
        default: '#f2f4f6',
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="text-box"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, {
        'data-type': 'text-box',
        style: `
          background-color: #f0f8ff;
          padding: 12px;
          border-radius: 8px;
          margin: 10px 0;
        `,
      }),
      0,
    ]
  },

  addCommands() {
    return {
      insertTextBox:
        () =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            content: [{ type: 'text', text: '텍스트 박스입니다!' }],
          })
        },
    }
  },
})
