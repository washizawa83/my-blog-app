'use client'

import { MdxOptions, syncroll, validateFrontMatter } from '@/app/lib/mdx'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  ArticleWithRelations,
  DomainType,
} from '../../../../../prisma/generated/zod'
import { Button } from '../../mdx/components/Button'
import MdxLayout from '../../mdx/MdxLayout'
import { ErrorBoundary } from './ErrorBoundary'
import { MdxEditorHeader } from './MdxEditorHeader'
import { UploadImage } from './UploadImage'

type Props = {
  editorialArticle?: ArticleWithRelations
}

const components = { Button }

const frontMatterItem = {
  TITLE: 'title',
  DOMAIN: 'domain',
  CATEGORIES: 'categories',
} as const

const templateFrontMatter = `---
${frontMatterItem.TITLE}: 
${frontMatterItem.DOMAIN}: frontend
${frontMatterItem.CATEGORIES}: []
---
`

export type EditedArticle = {
  title: string
  domain: DomainType
  categories: string[]
  text: string
}

const INDENT = '  '

export const MdxEditor = ({ editorialArticle }: Props) => {
  const [articleId] = useState(uuidv4())
  const [hasRenderError, setHasRenderError] = useState(false)
  const [mdxString, setMdxString] = useState(
    editorialArticle?.text ?? templateFrontMatter,
  )
  const [serializedMdx, setSerializedMdx] =
    useState<
      MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
    >()
  const [frontmatter, setFrontmatter] = useState<
    Record<string, string | string[]>
  >({})

  const [textareaCaret, setTextareaCaret] = useState(0)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const { content, data } = matter(mdxString)
        const mdxSource = await serialize(content, {
          scope: data,
          mdxOptions: MdxOptions,
        })
        setSerializedMdx(mdxSource)
        setFrontmatter(data)
        setTextareaCaret(updateTextareaCaret())
      } catch (e) {
        console.warn('syntax error', e)
      }
    })()
  }, [mdxString])

  const updateTextareaCaret = () => {
    const textareaCurrent = textareaRef.current
    if (textareaCurrent?.selectionStart) {
      return textareaCurrent.selectionStart
    }

    return textareaRef.current!.textLength
  }

  const insertImageNotation = (imageUrl: string) => {
    const notation = `![](${imageUrl})`
    const newValue =
      mdxString.substring(0, textareaCaret) +
      notation +
      mdxString.substring(textareaCaret)
    setMdxString(newValue)
  }

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

  const validateArticle = (): EditedArticle | undefined => {
    if (hasRenderError) return
    const validatedEditedArticle = validateFrontMatter(frontmatter)
    if (!validatedEditedArticle) return
    if (mdxString === '') return

    return {
      ...validatedEditedArticle,
      text: mdxString,
    }
  }

  return (
    <div>
      <MdxEditorHeader
        articleId={articleId}
        validateArticle={validateArticle}
        editorialArticleId={editorialArticle?.id}
      />
      <div>
        <UploadImage
          articleId={articleId}
          insertImageNotation={insertImageNotation}
        />
      </div>
      <div className="flex w-full p-2 bg-article rounded-lg">
        <div className="w-1/2 pr-4">
          <textarea
            ref={textareaRef}
            onScroll={() => syncroll(textareaRef, previewRef)}
            className="w-full resize-none outline-none text-lg p-2 h-mdx-editor border-r border-zinc-500"
            rows={30}
            value={mdxString}
            onChange={(e) => setMdxString(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <div className="w-1/2">
          {serializedMdx && (
            <MdxLayout editable={true} ref={previewRef}>
              <ErrorBoundary
                onError={(state: boolean) => setHasRenderError(state)}
              >
                <MDXRemote {...serializedMdx} components={components} />
              </ErrorBoundary>
            </MdxLayout>
          )}
        </div>
      </div>
    </div>
  )
}
