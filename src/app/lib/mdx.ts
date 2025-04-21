import { CompileOptions } from "@mdx-js/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize"
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { Button } from "../components/mdx/components/Button";
import { RefObject } from "react";
import { DomainType } from "../../../prisma/generated/zod";

export const MdxOptions: Omit<CompileOptions, 'outputFormat' | 'providerImportSource'> & {
  useDynamicImport?: boolean;
} = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: 'material-theme-ocean',
        keepBackground: false,
        defaultLang: 'ts',
        showLineNumbers: true,
      },
    ],
  ],
}

export const parseMdxString = async (content: string, data: {[key: string]: unknown}) => {
  return await serialize(content, {
    scope: data,
    mdxOptions: MdxOptions
  })
}

export const parseMdxStringByRemote = async (data: string) => {
  return compileMDX({
    source: data,
    options: {
      mdxOptions: {
        ...MdxOptions
      },
    },
    components: {Button}
  })
}

export const validateFrontMatter = (
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

export const syncroll = (
  textareaRef: RefObject<HTMLTextAreaElement | null>,
  previewRef: RefObject<HTMLDivElement | null>,
) => {
  const textarea = textareaRef.current
  const preview = previewRef.current

  if (!textarea || !preview) return

  const scrollRatio =
    textarea.scrollTop / (textarea.scrollHeight - textarea.clientHeight)

  preview.scrollTop =
    scrollRatio * (preview.scrollHeight - preview.clientHeight)
}