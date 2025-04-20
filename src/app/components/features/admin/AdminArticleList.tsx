'use client'

import { ArticleInfoWithRelations } from '@/app/service/article/article'
import { useState } from 'react'
import { ArticleList } from '../article/ArticleList'

type Props = {
  publicArticles: ArticleInfoWithRelations[]
  pendingArticles: ArticleInfoWithRelations[]
}

export const AdminArticleList = ({
  publicArticles,
  pendingArticles,
}: Props) => {
  const [isDisplayPublic, setDisplayPublic] = useState(true)

  return (
    <div>
      <div className="flex">
        <div
          className={`border-b border-green-500 px-12 py-1 rounded-t-lg cursor-pointer ${isDisplayPublic && 'bg-slate-700'}`}
          onClick={() => setDisplayPublic(true)}
        >
          公開した記事
        </div>
        <div
          className={`border-b border-blue-500 px-12 py-1 rounded-t-lg cursor-pointer ${!isDisplayPublic && 'bg-slate-700'}`}
          onClick={() => setDisplayPublic(false)}
        >
          保留中の記事
        </div>
      </div>
      <ArticleList
        articles={isDisplayPublic ? publicArticles : pendingArticles}
      />
    </div>
  )
}
