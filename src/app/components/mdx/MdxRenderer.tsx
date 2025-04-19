'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import MdxLayout from './MdxLayout'

type Props = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >
}

export const MdxRenderer = ({ mdxSource }: Props) => {
  return (
    <MdxLayout>
      <MDXRemote {...mdxSource} />
    </MdxLayout>
  )
}
