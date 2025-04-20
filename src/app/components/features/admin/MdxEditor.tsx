'use client'

import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'
import {
  ArticleWithRelations,
  DomainType,
} from '../../../../../prisma/generated/zod'
import { Button } from '../../forms.tsx/Button'
import MdxLayout from '../../mdx/MdxLayout'
import { ErrorBoundary } from './ErrorBoundary'
import { MdxEditorHeader } from './MdxEditorHeader'

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

const validateFrontMatter = (
  frontmatter: Record<string, string | string[]>,
) => {
  const { title, domain, categories } = frontmatter
  if (!title || !domain || !categories) return
  if (
    Array.isArray(title) ||
    Array.isArray(domain) ||
    !Array.isArray(categories)
  )
    return
  if (domain !== 'frontend' && domain !== 'backend' && domain !== 'infra')
    return

  return { title, domain: domain.toUpperCase() as DomainType, categories }
}

export const MdxEditor = ({ editorialArticle }: Props) => {
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

  useEffect(() => {
    ;(async () => {
      try {
        const { content, data } = matter(mdxString)
        const mdxSource = await serialize(content, {
          scope: data,
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: 'one-dark-pro',
                  keepBackground: false,
                  defaultLang: 'ts',
                  showLineNumbers: true,
                },
              ],
            ],
          },
        })
        setSerializedMdx(mdxSource)
        setFrontmatter(data)
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
        validateArticle={validateArticle}
        editorialArticleId={editorialArticle?.id}
      />
      <div className="flex w-full p-2 bg-article rounded-lg">
        <div className="w-1/2 pr-4">
          <textarea
            className="w-full resize-none outline-none text-lg p-2 h-mdx-editor border-r border-zinc-500"
            rows={30}
            value={mdxString}
            onChange={(e) => setMdxString(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
        </div>
        <div className="w-1/2">
          {serializedMdx && (
            <MdxLayout editable={true}>
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
