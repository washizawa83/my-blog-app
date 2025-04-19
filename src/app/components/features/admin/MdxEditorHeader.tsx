'use client'

import { editArticle, postArticle } from '@/app/service/article/article'
import { useRouter } from 'next/navigation'
import { Button } from '../../forms.tsx/Button'
import { EditedArticle } from './MdxEditor'

type Props = {
  validateArticle: () => EditedArticle | undefined
  editorialArticleId?: string
}

const redirectUrl = '/admin'

export const MdxEditorHeader = ({
  validateArticle,
  editorialArticleId,
}: Props) => {
  const router = useRouter()
  const isEdit = editorialArticleId !== undefined

  const post = async (isPublic: boolean) => {
    const article = validateArticle()
    if (!article) return

    try {
      if (isEdit) {
        await editArticle(editorialArticleId, article, isPublic)
      } else {
        await postArticle(article, isPublic)
      }
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
        <Button
          label={`${isEdit ? 'edit' : 'post'}`}
          color="green"
          handleClick={() => post(true)}
        />
      </div>
    </div>
  )
}
