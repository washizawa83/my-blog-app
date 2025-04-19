import Link from 'next/link'
import { ArticleList } from '../components/features/article/ArticleList'
import { Button } from '../components/forms.tsx/Button'
import { PageLayout } from '../components/layouts/PageLayout'
import { getArticleInfos } from '../service/article/article'

export default async function AdminPage() {
  const articles = await getArticleInfos()

  return (
    <PageLayout>
      <div className="flex justify-end items-center mb-2">
        <Link href="/admin/new-post">
          <Button label="記事を作成" />
        </Link>
      </div>
      <div>
        <h2>記事一覧</h2>
        <ArticleList articles={articles} />
      </div>
    </PageLayout>
  )
}
