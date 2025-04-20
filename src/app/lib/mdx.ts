import { serialize } from "next-mdx-remote/serialize"
import rehypePrettyCode from 'rehype-pretty-code'

export const parseMdxString = async (content: string, data: {[key: string]: unknown}) => {
  return await serialize(content, {
    scope: data,
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode]],
    },
  })
}