'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Button } from '../forms.tsx/Button'
import MdxLayout from './MdxLayout'

const components = { Button }

type Props = {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >
}

export const MdxRenderer = ({ mdxSource }: Props) => {
  return (
    <MdxLayout>
      <MDXRemote {...mdxSource} components={components} />
    </MdxLayout>
  )
}
