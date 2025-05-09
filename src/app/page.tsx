import { ArticleList } from './components/features/article/ArticleList'
import { PageLayout } from './components/layouts/PageLayout'
import { getArticleInfos } from './service/article/article'

export default async function Home() {
  const articles = await getArticleInfos(true)

  return (
    <PageLayout>
      <div>
        <h2>記事一覧</h2>
        <ArticleList articles={articles} />
      </div>
    </PageLayout>
  )
}
