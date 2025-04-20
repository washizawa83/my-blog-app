import { ArticleList } from './components/features/article/ArticleList'
import { PageLayout } from './components/layouts/PageLayout'
import { getArticleInfos } from './service/article/article'

export default async function Home() {
  console.log('記事データ取得')
  const articles = await getArticleInfos()
  console.log(articles)
  console.log('記事データ取得完了')

  return (
    <PageLayout>
      <div>
        <h2>記事一覧</h2>
        <ArticleList articles={articles} />
      </div>
    </PageLayout>
  )
}
