import { ArticleList } from '../components/features/article/ArticleList'
import { PageLayout } from '../components/layouts/PageLayout'
import { getArticleInfos } from '../service/article/article'

export default async function AdminPage() {
  const articles = await getArticleInfos()

  return (
    <PageLayout>
      <div>
        <h2>記事一覧</h2>
        <ArticleList articles={articles} />
      </div>
    </PageLayout>
  )
}
