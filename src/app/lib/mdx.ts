import { CompileOptions } from "@mdx-js/mdx";
import { compileMDX } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize"
import rehypePrettyCode from 'rehype-pretty-code'
import { Button } from "../components/mdx/components/Button";

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

export const parseMdxStringByRemote = async (data: string) => {
  return compileMDX({
    source: data,
    options: {
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, MdxOptions]],
      },
    },
    components: {Button}
  })
}