import Link from 'next/link'
import { AdminArticleList } from '../components/features/admin/AdminArticleList'
import { Button } from '../components/forms.tsx/Button'
import { PageLayout } from '../components/layouts/PageLayout'
import { getArticleInfos } from '../service/article/article'

export default async function AdminPage() {
  const publicArticles = await getArticleInfos(true)
  const pendingArticles = await getArticleInfos(false)

  return (
    <PageLayout>
      <div className="flex justify-end items-center mb-2">
        <Link href="/admin/new-post">
          <Button label="記事を作成" />
        </Link>
      </div>
      <div>
        <AdminArticleList
          publicArticles={publicArticles}
          pendingArticles={pendingArticles}
        />
      </div>
    </PageLayout>
  )
}
