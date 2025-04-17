'use client'

import { postArticle } from '@/app/service/article/article'
import { useRouter } from 'next/navigation'
import { Button } from '../../forms.tsx/Button'
import { EditedArticle } from './MdxEditor'

type Props = {
  getEditedArticle: () => EditedArticle | undefined
}

const redirectUrl = '/admin'

export const MdxEditorHeader = ({ getEditedArticle }: Props) => {
  const router = useRouter()

  const post = async (isPublic: boolean) => {
    const article = getEditedArticle()
    if (!article) return

    try {
      await postArticle(article, isPublic)
      router.push(redirectUrl)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="flex justify-end w-full p-2">
      <div>
        <Button label="pending" color="blue" handleClick={() => post(false)} />
      </div>
      <div className="ml-4">
        <Button label="post" color="green" handleClick={() => post(true)} />
      </div>
    </div>
  )
}
