import { serialize } from "next-mdx-remote/serialize"

export const parseMdxString = async (content: string, data: {[key: string]: unknown}) => {
  return await serialize(content, {
    scope: data,
  })
}