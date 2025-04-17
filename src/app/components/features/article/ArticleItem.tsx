import { ArticleInfoWithRelations } from '@/app/service/article/article'
import Link from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'
import { Chip } from '../../ui/Chip'

type articleItemVariants = VariantProps<typeof listItem>

export const listItem = tv({
  base: 'w-full py-2 px-4 bg-slate-600/[.2] border-l-3 border-slate-600 rounded-r-lg my-5',
  variants: {
    domain: {
      FRONTEND: 'border-l-indigo-500',
      BACKEND: 'border-l-fuchsia-500',
      INFRA: 'border-l-emerald-500',
    },
  },
  defaultVariants: {
    domain: 'FRONTEND',
  },
})

type Props = {
  article: ArticleInfoWithRelations
} & articleItemVariants

export const ArticleItem = ({ article, ...variants }: Props) => {
  return (
    <Link href="">
      <div className={listItem({ ...variants })}>
        <h3 className="text-2xl h-10 mb-3">{article.title}</h3>
        <div className="flex justify-between">
          <ul>
            {article.articleCategory.map((category, i) => (
              <Chip key={i} color="sky" label={category.name} />
            ))}
          </ul>
          <span>{article.createdAt.toLocaleDateString('ja-JP')}</span>
        </div>
      </div>
    </Link>
  )
}
