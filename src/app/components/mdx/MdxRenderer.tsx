'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Button } from '../forms.tsx/Button'
import MdxLayout from './MdxLayout'
import { Note } from './components/Note'

const components = { Button, Note }

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
