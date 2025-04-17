'use server'

import { EditedArticle } from "@/app/components/features/admin/MdxEditor"
import { prisma } from "../db-util"
import { v4 as uuidv4 } from 'uuid'
import { DomainType } from "../../../../prisma/generated/zod"

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
    where: {name: category}
  })
}

export const getArticleDomain = async (domain: DomainType) => {
  return await prisma.articleDomain.findFirst({
    where: {name: domain}
  })
}

export const postArticle = async (article: EditedArticle, isPublic: boolean) => {
  const categories = await upsertArticleCategories(article.categories)
  const categoryIds = categories.map((category) => ({
    id: category.id
  }))
  const domain = await getArticleDomain(article.domain as DomainType)
  if (!domain) return

  return await prisma.article.create({
    data: {
      id: uuidv4(),
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