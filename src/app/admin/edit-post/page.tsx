import { MdxEditor } from '@/app/components/features/admin/MdxEditor'
import { PageLayout } from '@/app/components/layouts/PageLayout'
import { getArticleById } from '@/app/service/article/article'

export const runtime = 'edge'

type Props = {
  searchParams: Promise<{ [key: string]: string | undefined }>
}

export default async function Page({ searchParams }: Props) {
  const articleId = (await searchParams).id
  if (!articleId) return
  const article = await getArticleById(articleId)
  if (!article) return

  return (
    <PageLayout>
      <MdxEditor editorialArticle={article} />
    </PageLayout>
  )
}
