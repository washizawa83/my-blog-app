'use server'

import { EditedArticle } from "@/app/components/features/admin/MdxEditor"
import { prisma } from "../db-util"
import { ArticleWithRelations, DomainType } from "../../../../prisma/generated/zod"
import { getLoginState } from "../auth/auth"
import { deleteFile } from "../aws/aws-client"

export const upsertArticleCategories = async (categories: string[]) => {
  return Promise.all(categories.map(async (category) => {
    const registeredCategory = await getArticleCategory(category)
    if (!registeredCategory) {
      return await prisma.articleCategory.create({
        data: {name: category}
      })
    }
    return registeredCategory
  }))
}

export const getArticleCategory = async (category: string) => {
  return await prisma.articleCategory.findFirst({
    where: {name: {
      equals: category,
      mode: 'insensitive',
    }}
  })
}

export const getArticleDomain = async (domain: DomainType) => {
  return await prisma.articleDomain.findFirst({
    where: {name: domain}
  })
}

const prepareArticleData = async (article: EditedArticle) => {
  const categories = await upsertArticleCategories(article.categories)
  const categoryIds = categories.map((category) => ({
    id: category.id
  }))
  const domain = await getArticleDomain(article.domain as DomainType)

  return {categoryIds, domain}
}

export const postArticle = async (articleId: string, article: EditedArticle, isPublic: boolean) => {
  if (!(await getLoginState())) return new Error('Unauthorized')
  const {categoryIds, domain} = await prepareArticleData(article)
  if (!domain) return new Error('Invalid domain')

  return await prisma.article.create({
    data: {
      id: articleId,
      title: article.title,
      text: article.text,
      isPublic,
      articleCategory: {
        connect: categoryIds
      },
      articleDomainId: domain.id
    }
  })
}

export const editArticle = async (articleId: string, article: EditedArticle, isPublic: boolean) => {
  if (!(await getLoginState())) return new Error('Unauthorized')
  const {categoryIds, domain} = await prepareArticleData(article)
  if (!domain) return new Error('Invalid domain')

  return await prisma.article.update({
    where: { id: articleId },
    data: {
      id: articleId,
      title: article.title,
      text: article.text,
      isPublic,
      articleCategory: {
        set: categoryIds
      },
      articleDomainId: domain.id
    }
  })
}

export const getArticles = async (): Promise<ArticleWithRelations[]> => {
  return await prisma.article.findMany({
    include: {
      articleCategory: true,
      articleDomain: true
    }
  }) as ArticleWithRelations[]
}

export type ArticleInfoWithRelations = Omit<ArticleWithRelations, 'text'>

export const getArticleInfos = async (isPublic: boolean): Promise<ArticleInfoWithRelations[]> => {
  return await prisma.article.findMany({
    where: {
      isPublic
    },
    omit: {
      text: true,
    },
    include: {
      articleCategory: true,
      articleDomain: true
    }
  }) as ArticleInfoWithRelations[]
}

export const getArticleById = async (id: string): Promise<ArticleWithRelations> => {
  return await prisma.article.findFirst({
    where: {
      id: id
    },
    include: {
      articleCategory: true,
      articleDomain: true
    }
  }) as ArticleWithRelations
}

export const deleteArticle = async (id: string) => {
  if (!(await getLoginState())) return new Error('Unauthorized')
  await prisma.article.delete({
    where: {
      id
    }
  })
  await deleteFile(id)
}
