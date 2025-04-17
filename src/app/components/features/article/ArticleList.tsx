import { ArticleInfoWithRelations } from '@/app/service/article/article'
import { ArticleItem } from './ArticleItem'

type Props = {
  articles: ArticleInfoWithRelations[]
}

export const ArticleList = ({ articles }: Props) => {
  return (
    <ul>
      {articles.map((article, i) => (
        <li key={i}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  )
}
