import { ArticleInfoWithRelations } from '@/app/service/article/article'
import { ArticleItem } from './ArticleItem'

type Props = {
  articles: ArticleInfoWithRelations[]
}

export const ArticleList = ({ articles }: Props) => {
  if (articles.length === 0) {
    return (
      <div>
        <p>記事がありません</p>
      </div>
    )
  }

  return (
    <ul>
      {articles.map((article, i) => (
        <li key={i}>
          <ArticleItem article={article} domain={article.articleDomain.name} />
        </li>
      ))}
    </ul>
  )
}
