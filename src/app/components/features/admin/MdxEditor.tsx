'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import { Button } from '../../button'
import MdxLayout from '../../mdx/MdxLayout'
const components = { Button }

const INDENT = '  '

export const MdxEditor = () => {
  const [mdxString, setMdxString] = useState('')
  const [serializedMdx, setSerializedMdx] =
    useState<
      MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
    >()

  useEffect(() => {
    ;(async () => {
      try {
        const mdxSource = await serialize(mdxString)
        setSerializedMdx(mdxSource)
      } catch (e) {
        console.warn('syntax error', e)
      }
    })()
  }, [mdxString])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()

      const textarea = e.currentTarget
      const { selectionStart, selectionEnd } = textarea
      const newValue =
        mdxString.substring(0, selectionStart) +
        INDENT +
        mdxString.substring(selectionEnd)

      setMdxString(newValue)

      // 次の描画フレームでキャレット位置を調整
      requestAnimationFrame(() => {
        textarea.selectionStart = textarea.selectionEnd =
          selectionStart + INDENT.length
      })
    }
  }

  return (
    <div className="flex w-full p-2">
      <div className="w-1/2 pr-4">
        <textarea
          className="w-full border rounded-lg resize-none outline-none text-lg p-2 h-mdx-editor"
          rows={30}
          value={mdxString}
          onChange={(e) => setMdxString(e.target.value)}
          onKeyDown={handleKeyDown}
        ></textarea>
      </div>
      <div className="w-1/2">
        {serializedMdx && (
          <MdxLayout editable={true}>
            <MDXRemote {...serializedMdx} components={components} />
          </MdxLayout>
        )}
      </div>
    </div>
  )
}
