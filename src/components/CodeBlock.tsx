import { useEffect } from 'react'

import Prism from 'prismjs'

import 'prismjs/components/prism-jsx.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'

type CodeBlockProps = {
  children: string
  className?: string
}

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined') Prism.highlightAll()
  }, [])
  return (
    <div className={`bg-darkblue rounded-xl ${className}`}>
      <pre className='line-numbers'>
        <code className={`language-jsx`}>{children}</code>
      </pre>
    </div>
  )
}

export default CodeBlock
