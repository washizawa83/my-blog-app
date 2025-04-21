import { AdminMenuButton } from '@/app/components/features/admin/AdminMenuButton'
import { PageLayout } from '@/app/components/layouts/PageLayout'
import MdxLayout from '@/app/components/mdx/MdxLayout'
import { Chip } from '@/app/components/ui/Chip'
import { parseMdxStringByRemote } from '@/app/lib/mdx'
import { getArticleById } from '@/app/service/article/article'
import { getLoginState } from '@/app/service/auth/auth'
import matter from 'gray-matter'

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const article = await getArticleById(id)
  if (!article) return
  const { content } = matter(article.text)
  const mdxSourceByRemote = await parseMdxStringByRemote(content)
  const isLogin = await getLoginState()

  return (
    <PageLayout>
      <div className="pb-8 border-b-2 border-zinc-500">
        {isLogin && <AdminMenuButton articleId={id} />}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl mb-4 font-bold">{article.title}</h2>
        </div>
        <div className="flex justify-between">
          <ul className="flex flex-wrap">
            {article.articleCategory.map((category, i) => (
              <li key={i} className="mr-2 py-1">
                <Chip label={category.name} />
              </li>
            ))}
          </ul>
          <span>{article.createdAt.toLocaleDateString('ja-JP')}</span>
        </div>
      </div>
      <div className="bg-article px-4 py-8 rounded-b-lg">
        <MdxLayout>{mdxSourceByRemote.content}</MdxLayout>
      </div>
    </PageLayout>
  )
}
