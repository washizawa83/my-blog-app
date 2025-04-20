import { CompileOptions } from "@mdx-js/mdx";
import { serialize } from "next-mdx-remote/serialize"
import rehypePrettyCode from 'rehype-pretty-code'

export const MdxOptions: Omit<CompileOptions, 'outputFormat' | 'providerImportSource'> & {
  useDynamicImport?: boolean;
} = {
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
