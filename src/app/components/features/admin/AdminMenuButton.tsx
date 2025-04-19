'use client'

import { deleteArticle } from '@/app/service/article/article'
import { useRouter } from 'next/navigation'
import { Tooltip, TooltipOption } from '../../ui/Tooltip'

type Props = {
  articleId: string
}

const redirectUrl = '/admin'

export const AdminMenuButton = ({ articleId }: Props) => {
  const router = useRouter()
  const tooltipOptions: TooltipOption[] = [
    {
      label: 'edit',
      handleClick: () => {
        router.push(`/admin/edit-post?id=${articleId}`)
      },
    },
    {
      label: 'delete',
      color: 'red',
      handleClick: async () => {
        const confirmed = window.confirm('記事を削除しますか？')
        if (confirmed) {
          await deleteArticle(articleId)
          router.push(redirectUrl)
        }
      },
    },
  ]

  return (
    <div className="flex justify-end mb-2">
      <Tooltip options={tooltipOptions} />
    </div>
  )
}
