import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AdminUserScalarFieldEnumSchema = z.enum(['id','username','password']);

export const ArticleScalarFieldEnumSchema = z.enum(['id','title','text','createdAt','updatedAt','articleDomainId']);

export const ArticleDomainScalarFieldEnumSchema = z.enum(['id','name']);

export const ArticleCategoryScalarFieldEnumSchema = z.enum(['id','name']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ADMIN USER SCHEMA
/////////////////////////////////////////

export const AdminUserSchema = z.object({
  id: z.string().uuid(),
  username: z.string(),
  password: z.string(),
})

export type AdminUser = z.infer<typeof AdminUserSchema>

/////////////////////////////////////////
// ARTICLE SCHEMA
/////////////////////////////////////////

export const ArticleSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  articleDomainId: z.number().int(),
})

export type Article = z.infer<typeof ArticleSchema>

/////////////////////////////////////////
// ARTICLE DOMAIN SCHEMA
/////////////////////////////////////////

export const ArticleDomainSchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type ArticleDomain = z.infer<typeof ArticleDomainSchema>

/////////////////////////////////////////
// ARTICLE CATEGORY SCHEMA
/////////////////////////////////////////

export const ArticleCategorySchema = z.object({
  id: z.number().int(),
  name: z.string(),
})

export type ArticleCategory = z.infer<typeof ArticleCategorySchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ADMIN USER
//------------------------------------------------------

export const AdminUserSelectSchema: z.ZodType<Prisma.AdminUserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
}).strict()

// ARTICLE
//------------------------------------------------------

export const ArticleIncludeSchema: z.ZodType<Prisma.ArticleInclude> = z.object({
  articleDomain: z.union([z.boolean(),z.lazy(() => ArticleDomainArgsSchema)]).optional(),
  articleCategory: z.union([z.boolean(),z.lazy(() => ArticleCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArticleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ArticleArgsSchema: z.ZodType<Prisma.ArticleDefaultArgs> = z.object({
  select: z.lazy(() => ArticleSelectSchema).optional(),
  include: z.lazy(() => ArticleIncludeSchema).optional(),
}).strict();

export const ArticleCountOutputTypeArgsSchema: z.ZodType<Prisma.ArticleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ArticleCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ArticleCountOutputTypeSelectSchema: z.ZodType<Prisma.ArticleCountOutputTypeSelect> = z.object({
  articleCategory: z.boolean().optional(),
}).strict();

export const ArticleSelectSchema: z.ZodType<Prisma.ArticleSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  text: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  articleDomainId: z.boolean().optional(),
  articleDomain: z.union([z.boolean(),z.lazy(() => ArticleDomainArgsSchema)]).optional(),
  articleCategory: z.union([z.boolean(),z.lazy(() => ArticleCategoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArticleCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ARTICLE DOMAIN
//------------------------------------------------------

export const ArticleDomainIncludeSchema: z.ZodType<Prisma.ArticleDomainInclude> = z.object({
  article: z.union([z.boolean(),z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArticleDomainCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ArticleDomainArgsSchema: z.ZodType<Prisma.ArticleDomainDefaultArgs> = z.object({
  select: z.lazy(() => ArticleDomainSelectSchema).optional(),
  include: z.lazy(() => ArticleDomainIncludeSchema).optional(),
}).strict();

export const ArticleDomainCountOutputTypeArgsSchema: z.ZodType<Prisma.ArticleDomainCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ArticleDomainCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ArticleDomainCountOutputTypeSelectSchema: z.ZodType<Prisma.ArticleDomainCountOutputTypeSelect> = z.object({
  article: z.boolean().optional(),
}).strict();

export const ArticleDomainSelectSchema: z.ZodType<Prisma.ArticleDomainSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  article: z.union([z.boolean(),z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArticleDomainCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ARTICLE CATEGORY
//------------------------------------------------------

export const ArticleCategoryIncludeSchema: z.ZodType<Prisma.ArticleCategoryInclude> = z.object({
  article: z.union([z.boolean(),z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArticleCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ArticleCategoryArgsSchema: z.ZodType<Prisma.ArticleCategoryDefaultArgs> = z.object({
  select: z.lazy(() => ArticleCategorySelectSchema).optional(),
  include: z.lazy(() => ArticleCategoryIncludeSchema).optional(),
}).strict();

export const ArticleCategoryCountOutputTypeArgsSchema: z.ZodType<Prisma.ArticleCategoryCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ArticleCategoryCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ArticleCategoryCountOutputTypeSelectSchema: z.ZodType<Prisma.ArticleCategoryCountOutputTypeSelect> = z.object({
  article: z.boolean().optional(),
}).strict();

export const ArticleCategorySelectSchema: z.ZodType<Prisma.ArticleCategorySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  article: z.union([z.boolean(),z.lazy(() => ArticleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ArticleCategoryCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AdminUserWhereInputSchema: z.ZodType<Prisma.AdminUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AdminUserWhereInputSchema),z.lazy(() => AdminUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminUserWhereInputSchema),z.lazy(() => AdminUserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const AdminUserOrderByWithRelationInputSchema: z.ZodType<Prisma.AdminUserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminUserWhereUniqueInputSchema: z.ZodType<Prisma.AdminUserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().uuid(),
    username: z.string()
  }),
  z.object({
    id: z.string().uuid(),
  }),
  z.object({
    username: z.string(),
  }),
])
.and(z.object({
  id: z.string().uuid().optional(),
  username: z.string().optional(),
  AND: z.union([ z.lazy(() => AdminUserWhereInputSchema),z.lazy(() => AdminUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminUserWhereInputSchema),z.lazy(() => AdminUserWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const AdminUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.AdminUserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AdminUserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AdminUserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AdminUserMinOrderByAggregateInputSchema).optional()
}).strict();

export const AdminUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AdminUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema),z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema),z.lazy(() => AdminUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  username: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  password: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ArticleWhereInputSchema: z.ZodType<Prisma.ArticleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleWhereInputSchema),z.lazy(() => ArticleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleWhereInputSchema),z.lazy(() => ArticleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  articleDomainId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  articleDomain: z.union([ z.lazy(() => ArticleDomainScalarRelationFilterSchema),z.lazy(() => ArticleDomainWhereInputSchema) ]).optional(),
  articleCategory: z.lazy(() => ArticleCategoryListRelationFilterSchema).optional()
}).strict();

export const ArticleOrderByWithRelationInputSchema: z.ZodType<Prisma.ArticleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articleDomainId: z.lazy(() => SortOrderSchema).optional(),
  articleDomain: z.lazy(() => ArticleDomainOrderByWithRelationInputSchema).optional(),
  articleCategory: z.lazy(() => ArticleCategoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ArticleWhereUniqueInputSchema: z.ZodType<Prisma.ArticleWhereUniqueInput> = z.object({
  id: z.string().uuid()
})
.and(z.object({
  id: z.string().uuid().optional(),
  AND: z.union([ z.lazy(() => ArticleWhereInputSchema),z.lazy(() => ArticleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleWhereInputSchema),z.lazy(() => ArticleWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  articleDomainId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  articleDomain: z.union([ z.lazy(() => ArticleDomainScalarRelationFilterSchema),z.lazy(() => ArticleDomainWhereInputSchema) ]).optional(),
  articleCategory: z.lazy(() => ArticleCategoryListRelationFilterSchema).optional()
}).strict());

export const ArticleOrderByWithAggregationInputSchema: z.ZodType<Prisma.ArticleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articleDomainId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ArticleCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ArticleAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArticleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArticleMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ArticleSumOrderByAggregateInputSchema).optional()
}).strict();

export const ArticleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ArticleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  articleDomainId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ArticleDomainWhereInputSchema: z.ZodType<Prisma.ArticleDomainWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleDomainWhereInputSchema),z.lazy(() => ArticleDomainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleDomainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleDomainWhereInputSchema),z.lazy(() => ArticleDomainWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  article: z.lazy(() => ArticleListRelationFilterSchema).optional()
}).strict();

export const ArticleDomainOrderByWithRelationInputSchema: z.ZodType<Prisma.ArticleDomainOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  article: z.lazy(() => ArticleOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ArticleDomainWhereUniqueInputSchema: z.ZodType<Prisma.ArticleDomainWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => ArticleDomainWhereInputSchema),z.lazy(() => ArticleDomainWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleDomainWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleDomainWhereInputSchema),z.lazy(() => ArticleDomainWhereInputSchema).array() ]).optional(),
  article: z.lazy(() => ArticleListRelationFilterSchema).optional()
}).strict());

export const ArticleDomainOrderByWithAggregationInputSchema: z.ZodType<Prisma.ArticleDomainOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ArticleDomainCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ArticleDomainAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArticleDomainMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArticleDomainMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ArticleDomainSumOrderByAggregateInputSchema).optional()
}).strict();

export const ArticleDomainScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ArticleDomainScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleDomainScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleDomainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleDomainScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleDomainScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleDomainScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ArticleCategoryWhereInputSchema: z.ZodType<Prisma.ArticleCategoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleCategoryWhereInputSchema),z.lazy(() => ArticleCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleCategoryWhereInputSchema),z.lazy(() => ArticleCategoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  article: z.lazy(() => ArticleListRelationFilterSchema).optional()
}).strict();

export const ArticleCategoryOrderByWithRelationInputSchema: z.ZodType<Prisma.ArticleCategoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  article: z.lazy(() => ArticleOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ArticleCategoryWhereUniqueInputSchema: z.ZodType<Prisma.ArticleCategoryWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => ArticleCategoryWhereInputSchema),z.lazy(() => ArticleCategoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleCategoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleCategoryWhereInputSchema),z.lazy(() => ArticleCategoryWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  article: z.lazy(() => ArticleListRelationFilterSchema).optional()
}).strict());

export const ArticleCategoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.ArticleCategoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ArticleCategoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ArticleCategoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ArticleCategoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ArticleCategoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ArticleCategorySumOrderByAggregateInputSchema).optional()
}).strict();

export const ArticleCategoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ArticleCategoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleCategoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleCategoryScalarWhereWithAggregatesInputSchema),z.lazy(() => ArticleCategoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const AdminUserCreateInputSchema: z.ZodType<Prisma.AdminUserCreateInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string()
}).strict();

export const AdminUserUncheckedCreateInputSchema: z.ZodType<Prisma.AdminUserUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string()
}).strict();

export const AdminUserUpdateInputSchema: z.ZodType<Prisma.AdminUserUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminUserUncheckedUpdateInputSchema: z.ZodType<Prisma.AdminUserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminUserCreateManyInputSchema: z.ZodType<Prisma.AdminUserCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  username: z.string(),
  password: z.string()
}).strict();

export const AdminUserUpdateManyMutationInputSchema: z.ZodType<Prisma.AdminUserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AdminUserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AdminUserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  username: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  password: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleCreateInputSchema: z.ZodType<Prisma.ArticleCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleDomain: z.lazy(() => ArticleDomainCreateNestedOneWithoutArticleInputSchema),
  articleCategory: z.lazy(() => ArticleCategoryCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export const ArticleUncheckedCreateInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleDomainId: z.number().int(),
  articleCategory: z.lazy(() => ArticleCategoryUncheckedCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export const ArticleUpdateInputSchema: z.ZodType<Prisma.ArticleUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleDomain: z.lazy(() => ArticleDomainUpdateOneRequiredWithoutArticleNestedInputSchema).optional(),
  articleCategory: z.lazy(() => ArticleCategoryUpdateManyWithoutArticleNestedInputSchema).optional()
}).strict();

export const ArticleUncheckedUpdateInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleDomainId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  articleCategory: z.lazy(() => ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInputSchema).optional()
}).strict();

export const ArticleCreateManyInputSchema: z.ZodType<Prisma.ArticleCreateManyInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleDomainId: z.number().int()
}).strict();

export const ArticleUpdateManyMutationInputSchema: z.ZodType<Prisma.ArticleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleDomainId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleDomainCreateInputSchema: z.ZodType<Prisma.ArticleDomainCreateInput> = z.object({
  name: z.string(),
  article: z.lazy(() => ArticleCreateNestedManyWithoutArticleDomainInputSchema).optional()
}).strict();

export const ArticleDomainUncheckedCreateInputSchema: z.ZodType<Prisma.ArticleDomainUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  article: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutArticleDomainInputSchema).optional()
}).strict();

export const ArticleDomainUpdateInputSchema: z.ZodType<Prisma.ArticleDomainUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  article: z.lazy(() => ArticleUpdateManyWithoutArticleDomainNestedInputSchema).optional()
}).strict();

export const ArticleDomainUncheckedUpdateInputSchema: z.ZodType<Prisma.ArticleDomainUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  article: z.lazy(() => ArticleUncheckedUpdateManyWithoutArticleDomainNestedInputSchema).optional()
}).strict();

export const ArticleDomainCreateManyInputSchema: z.ZodType<Prisma.ArticleDomainCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const ArticleDomainUpdateManyMutationInputSchema: z.ZodType<Prisma.ArticleDomainUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleDomainUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ArticleDomainUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleCategoryCreateInputSchema: z.ZodType<Prisma.ArticleCategoryCreateInput> = z.object({
  name: z.string(),
  article: z.lazy(() => ArticleCreateNestedManyWithoutArticleCategoryInputSchema).optional()
}).strict();

export const ArticleCategoryUncheckedCreateInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  article: z.lazy(() => ArticleUncheckedCreateNestedManyWithoutArticleCategoryInputSchema).optional()
}).strict();

export const ArticleCategoryUpdateInputSchema: z.ZodType<Prisma.ArticleCategoryUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  article: z.lazy(() => ArticleUpdateManyWithoutArticleCategoryNestedInputSchema).optional()
}).strict();

export const ArticleCategoryUncheckedUpdateInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  article: z.lazy(() => ArticleUncheckedUpdateManyWithoutArticleCategoryNestedInputSchema).optional()
}).strict();

export const ArticleCategoryCreateManyInputSchema: z.ZodType<Prisma.ArticleCategoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const ArticleCategoryUpdateManyMutationInputSchema: z.ZodType<Prisma.ArticleCategoryUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleCategoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const AdminUserCountOrderByAggregateInputSchema: z.ZodType<Prisma.AdminUserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminUserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AdminUserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AdminUserMinOrderByAggregateInputSchema: z.ZodType<Prisma.AdminUserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  username: z.lazy(() => SortOrderSchema).optional(),
  password: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const ArticleDomainScalarRelationFilterSchema: z.ZodType<Prisma.ArticleDomainScalarRelationFilter> = z.object({
  is: z.lazy(() => ArticleDomainWhereInputSchema).optional(),
  isNot: z.lazy(() => ArticleDomainWhereInputSchema).optional()
}).strict();

export const ArticleCategoryListRelationFilterSchema: z.ZodType<Prisma.ArticleCategoryListRelationFilter> = z.object({
  every: z.lazy(() => ArticleCategoryWhereInputSchema).optional(),
  some: z.lazy(() => ArticleCategoryWhereInputSchema).optional(),
  none: z.lazy(() => ArticleCategoryWhereInputSchema).optional()
}).strict();

export const ArticleCategoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ArticleCategoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleCountOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articleDomainId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleAvgOrderByAggregateInput> = z.object({
  articleDomainId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articleDomainId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleMinOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  articleDomainId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleSumOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleSumOrderByAggregateInput> = z.object({
  articleDomainId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const ArticleListRelationFilterSchema: z.ZodType<Prisma.ArticleListRelationFilter> = z.object({
  every: z.lazy(() => ArticleWhereInputSchema).optional(),
  some: z.lazy(() => ArticleWhereInputSchema).optional(),
  none: z.lazy(() => ArticleWhereInputSchema).optional()
}).strict();

export const ArticleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ArticleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleDomainCountOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleDomainCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleDomainAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleDomainAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleDomainMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleDomainMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleDomainMinOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleDomainMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleDomainSumOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleDomainSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleCategoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleCategoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleCategoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleCategoryAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleCategoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleCategoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleCategoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleCategoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ArticleCategorySumOrderByAggregateInputSchema: z.ZodType<Prisma.ArticleCategorySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const ArticleDomainCreateNestedOneWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainCreateNestedOneWithoutArticleInput> = z.object({
  create: z.union([ z.lazy(() => ArticleDomainCreateWithoutArticleInputSchema),z.lazy(() => ArticleDomainUncheckedCreateWithoutArticleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleDomainCreateOrConnectWithoutArticleInputSchema).optional(),
  connect: z.lazy(() => ArticleDomainWhereUniqueInputSchema).optional()
}).strict();

export const ArticleCategoryCreateNestedManyWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryCreateNestedManyWithoutArticleInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ArticleCategoryUncheckedCreateNestedManyWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedCreateNestedManyWithoutArticleInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const ArticleDomainUpdateOneRequiredWithoutArticleNestedInputSchema: z.ZodType<Prisma.ArticleDomainUpdateOneRequiredWithoutArticleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleDomainCreateWithoutArticleInputSchema),z.lazy(() => ArticleDomainUncheckedCreateWithoutArticleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ArticleDomainCreateOrConnectWithoutArticleInputSchema).optional(),
  upsert: z.lazy(() => ArticleDomainUpsertWithoutArticleInputSchema).optional(),
  connect: z.lazy(() => ArticleDomainWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ArticleDomainUpdateToOneWithWhereWithoutArticleInputSchema),z.lazy(() => ArticleDomainUpdateWithoutArticleInputSchema),z.lazy(() => ArticleDomainUncheckedUpdateWithoutArticleInputSchema) ]).optional(),
}).strict();

export const ArticleCategoryUpdateManyWithoutArticleNestedInputSchema: z.ZodType<Prisma.ArticleCategoryUpdateManyWithoutArticleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleCategoryUpsertWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUpsertWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleCategoryUpdateWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUpdateWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleCategoryUpdateManyWithWhereWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUpdateManyWithWhereWithoutArticleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleCategoryScalarWhereInputSchema),z.lazy(() => ArticleCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema).array(),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema),z.lazy(() => ArticleCategoryCreateOrConnectWithoutArticleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleCategoryUpsertWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUpsertWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleCategoryWhereUniqueInputSchema),z.lazy(() => ArticleCategoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleCategoryUpdateWithWhereUniqueWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUpdateWithWhereUniqueWithoutArticleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleCategoryUpdateManyWithWhereWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUpdateManyWithWhereWithoutArticleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleCategoryScalarWhereInputSchema),z.lazy(() => ArticleCategoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ArticleCreateNestedManyWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleCreateNestedManyWithoutArticleDomainInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleCreateManyArticleDomainInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ArticleUncheckedCreateNestedManyWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateNestedManyWithoutArticleDomainInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleCreateManyArticleDomainInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ArticleUpdateManyWithoutArticleDomainNestedInputSchema: z.ZodType<Prisma.ArticleUpdateManyWithoutArticleDomainNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleDomainInputSchema),z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleDomainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleCreateManyArticleDomainInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleDomainInputSchema),z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleDomainInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleDomainInputSchema),z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleDomainInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleScalarWhereInputSchema),z.lazy(() => ArticleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ArticleUncheckedUpdateManyWithoutArticleDomainNestedInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateManyWithoutArticleDomainNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleDomainInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleDomainInputSchema),z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleDomainInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ArticleCreateManyArticleDomainInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleDomainInputSchema),z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleDomainInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleDomainInputSchema),z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleDomainInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleScalarWhereInputSchema),z.lazy(() => ArticleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ArticleCreateNestedManyWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleCreateNestedManyWithoutArticleCategoryInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ArticleUncheckedCreateNestedManyWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateNestedManyWithoutArticleCategoryInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ArticleUpdateManyWithoutArticleCategoryNestedInputSchema: z.ZodType<Prisma.ArticleUpdateManyWithoutArticleCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleCategoryInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleScalarWhereInputSchema),z.lazy(() => ArticleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ArticleUncheckedUpdateManyWithoutArticleCategoryNestedInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateManyWithoutArticleCategoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema).array(),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema),z.lazy(() => ArticleCreateOrConnectWithoutArticleCategoryInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUpsertWithWhereUniqueWithoutArticleCategoryInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ArticleWhereUniqueInputSchema),z.lazy(() => ArticleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUpdateWithWhereUniqueWithoutArticleCategoryInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUpdateManyWithWhereWithoutArticleCategoryInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ArticleScalarWhereInputSchema),z.lazy(() => ArticleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const ArticleDomainCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainCreateWithoutArticleInput> = z.object({
  name: z.string()
}).strict();

export const ArticleDomainUncheckedCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainUncheckedCreateWithoutArticleInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const ArticleDomainCreateOrConnectWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainCreateOrConnectWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleDomainWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleDomainCreateWithoutArticleInputSchema),z.lazy(() => ArticleDomainUncheckedCreateWithoutArticleInputSchema) ]),
}).strict();

export const ArticleCategoryCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryCreateWithoutArticleInput> = z.object({
  name: z.string()
}).strict();

export const ArticleCategoryUncheckedCreateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedCreateWithoutArticleInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const ArticleCategoryCreateOrConnectWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryCreateOrConnectWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleCategoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema) ]),
}).strict();

export const ArticleDomainUpsertWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainUpsertWithoutArticleInput> = z.object({
  update: z.union([ z.lazy(() => ArticleDomainUpdateWithoutArticleInputSchema),z.lazy(() => ArticleDomainUncheckedUpdateWithoutArticleInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleDomainCreateWithoutArticleInputSchema),z.lazy(() => ArticleDomainUncheckedCreateWithoutArticleInputSchema) ]),
  where: z.lazy(() => ArticleDomainWhereInputSchema).optional()
}).strict();

export const ArticleDomainUpdateToOneWithWhereWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainUpdateToOneWithWhereWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleDomainWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ArticleDomainUpdateWithoutArticleInputSchema),z.lazy(() => ArticleDomainUncheckedUpdateWithoutArticleInputSchema) ]),
}).strict();

export const ArticleDomainUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainUpdateWithoutArticleInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleDomainUncheckedUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleDomainUncheckedUpdateWithoutArticleInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleCategoryUpsertWithWhereUniqueWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUpsertWithWhereUniqueWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleCategoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleCategoryUpdateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedUpdateWithoutArticleInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleCategoryCreateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedCreateWithoutArticleInputSchema) ]),
}).strict();

export const ArticleCategoryUpdateWithWhereUniqueWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUpdateWithWhereUniqueWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleCategoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleCategoryUpdateWithoutArticleInputSchema),z.lazy(() => ArticleCategoryUncheckedUpdateWithoutArticleInputSchema) ]),
}).strict();

export const ArticleCategoryUpdateManyWithWhereWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUpdateManyWithWhereWithoutArticleInput> = z.object({
  where: z.lazy(() => ArticleCategoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleCategoryUpdateManyMutationInputSchema),z.lazy(() => ArticleCategoryUncheckedUpdateManyWithoutArticleInputSchema) ]),
}).strict();

export const ArticleCategoryScalarWhereInputSchema: z.ZodType<Prisma.ArticleCategoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleCategoryScalarWhereInputSchema),z.lazy(() => ArticleCategoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleCategoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleCategoryScalarWhereInputSchema),z.lazy(() => ArticleCategoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ArticleCreateWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleCreateWithoutArticleDomainInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleCategory: z.lazy(() => ArticleCategoryCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export const ArticleUncheckedCreateWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateWithoutArticleDomainInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleCategory: z.lazy(() => ArticleCategoryUncheckedCreateNestedManyWithoutArticleInputSchema).optional()
}).strict();

export const ArticleCreateOrConnectWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutArticleDomainInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema) ]),
}).strict();

export const ArticleCreateManyArticleDomainInputEnvelopeSchema: z.ZodType<Prisma.ArticleCreateManyArticleDomainInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ArticleCreateManyArticleDomainInputSchema),z.lazy(() => ArticleCreateManyArticleDomainInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ArticleUpsertWithWhereUniqueWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUpsertWithWhereUniqueWithoutArticleDomainInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleUpdateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleDomainInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleDomainInputSchema) ]),
}).strict();

export const ArticleUpdateWithWhereUniqueWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUpdateWithWhereUniqueWithoutArticleDomainInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleUpdateWithoutArticleDomainInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleDomainInputSchema) ]),
}).strict();

export const ArticleUpdateManyWithWhereWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUpdateManyWithWhereWithoutArticleDomainInput> = z.object({
  where: z.lazy(() => ArticleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleUpdateManyMutationInputSchema),z.lazy(() => ArticleUncheckedUpdateManyWithoutArticleDomainInputSchema) ]),
}).strict();

export const ArticleScalarWhereInputSchema: z.ZodType<Prisma.ArticleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ArticleScalarWhereInputSchema),z.lazy(() => ArticleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ArticleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ArticleScalarWhereInputSchema),z.lazy(() => ArticleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  articleDomainId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const ArticleCreateWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleCreateWithoutArticleCategoryInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleDomain: z.lazy(() => ArticleDomainCreateNestedOneWithoutArticleInputSchema)
}).strict();

export const ArticleUncheckedCreateWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUncheckedCreateWithoutArticleCategoryInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  articleDomainId: z.number().int()
}).strict();

export const ArticleCreateOrConnectWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleCreateOrConnectWithoutArticleCategoryInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema) ]),
}).strict();

export const ArticleUpsertWithWhereUniqueWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUpsertWithWhereUniqueWithoutArticleCategoryInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ArticleUpdateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleCategoryInputSchema) ]),
  create: z.union([ z.lazy(() => ArticleCreateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedCreateWithoutArticleCategoryInputSchema) ]),
}).strict();

export const ArticleUpdateWithWhereUniqueWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUpdateWithWhereUniqueWithoutArticleCategoryInput> = z.object({
  where: z.lazy(() => ArticleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ArticleUpdateWithoutArticleCategoryInputSchema),z.lazy(() => ArticleUncheckedUpdateWithoutArticleCategoryInputSchema) ]),
}).strict();

export const ArticleUpdateManyWithWhereWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUpdateManyWithWhereWithoutArticleCategoryInput> = z.object({
  where: z.lazy(() => ArticleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ArticleUpdateManyMutationInputSchema),z.lazy(() => ArticleUncheckedUpdateManyWithoutArticleCategoryInputSchema) ]),
}).strict();

export const ArticleCategoryUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUpdateWithoutArticleInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleCategoryUncheckedUpdateWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedUpdateWithoutArticleInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleCategoryUncheckedUpdateManyWithoutArticleInputSchema: z.ZodType<Prisma.ArticleCategoryUncheckedUpdateManyWithoutArticleInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleCreateManyArticleDomainInputSchema: z.ZodType<Prisma.ArticleCreateManyArticleDomainInput> = z.object({
  id: z.string().uuid().optional(),
  title: z.string(),
  text: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const ArticleUpdateWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUpdateWithoutArticleDomainInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleCategory: z.lazy(() => ArticleCategoryUpdateManyWithoutArticleNestedInputSchema).optional()
}).strict();

export const ArticleUncheckedUpdateWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateWithoutArticleDomainInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleCategory: z.lazy(() => ArticleCategoryUncheckedUpdateManyWithoutArticleNestedInputSchema).optional()
}).strict();

export const ArticleUncheckedUpdateManyWithoutArticleDomainInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateManyWithoutArticleDomainInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleUpdateWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUpdateWithoutArticleCategoryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleDomain: z.lazy(() => ArticleDomainUpdateOneRequiredWithoutArticleNestedInputSchema).optional()
}).strict();

export const ArticleUncheckedUpdateWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateWithoutArticleCategoryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleDomainId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ArticleUncheckedUpdateManyWithoutArticleCategoryInputSchema: z.ZodType<Prisma.ArticleUncheckedUpdateManyWithoutArticleCategoryInput> = z.object({
  id: z.union([ z.string().uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  text: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  articleDomainId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AdminUserFindFirstArgsSchema: z.ZodType<Prisma.AdminUserFindFirstArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([ AdminUserOrderByWithRelationInputSchema.array(),AdminUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdminUserScalarFieldEnumSchema,AdminUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdminUserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AdminUserFindFirstOrThrowArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([ AdminUserOrderByWithRelationInputSchema.array(),AdminUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdminUserScalarFieldEnumSchema,AdminUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdminUserFindManyArgsSchema: z.ZodType<Prisma.AdminUserFindManyArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([ AdminUserOrderByWithRelationInputSchema.array(),AdminUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AdminUserScalarFieldEnumSchema,AdminUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AdminUserAggregateArgsSchema: z.ZodType<Prisma.AdminUserAggregateArgs> = z.object({
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([ AdminUserOrderByWithRelationInputSchema.array(),AdminUserOrderByWithRelationInputSchema ]).optional(),
  cursor: AdminUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdminUserGroupByArgsSchema: z.ZodType<Prisma.AdminUserGroupByArgs> = z.object({
  where: AdminUserWhereInputSchema.optional(),
  orderBy: z.union([ AdminUserOrderByWithAggregationInputSchema.array(),AdminUserOrderByWithAggregationInputSchema ]).optional(),
  by: AdminUserScalarFieldEnumSchema.array(),
  having: AdminUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AdminUserFindUniqueArgsSchema: z.ZodType<Prisma.AdminUserFindUniqueArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
}).strict() ;

export const AdminUserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AdminUserFindUniqueOrThrowArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
}).strict() ;

export const ArticleFindFirstArgsSchema: z.ZodType<Prisma.ArticleFindFirstArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ ArticleOrderByWithRelationInputSchema.array(),ArticleOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleScalarFieldEnumSchema,ArticleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ArticleFindFirstOrThrowArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ ArticleOrderByWithRelationInputSchema.array(),ArticleOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleScalarFieldEnumSchema,ArticleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleFindManyArgsSchema: z.ZodType<Prisma.ArticleFindManyArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ ArticleOrderByWithRelationInputSchema.array(),ArticleOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleScalarFieldEnumSchema,ArticleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleAggregateArgsSchema: z.ZodType<Prisma.ArticleAggregateArgs> = z.object({
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ ArticleOrderByWithRelationInputSchema.array(),ArticleOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ArticleGroupByArgsSchema: z.ZodType<Prisma.ArticleGroupByArgs> = z.object({
  where: ArticleWhereInputSchema.optional(),
  orderBy: z.union([ ArticleOrderByWithAggregationInputSchema.array(),ArticleOrderByWithAggregationInputSchema ]).optional(),
  by: ArticleScalarFieldEnumSchema.array(),
  having: ArticleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ArticleFindUniqueArgsSchema: z.ZodType<Prisma.ArticleFindUniqueArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
}).strict() ;

export const ArticleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ArticleFindUniqueOrThrowArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
}).strict() ;

export const ArticleDomainFindFirstArgsSchema: z.ZodType<Prisma.ArticleDomainFindFirstArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  where: ArticleDomainWhereInputSchema.optional(),
  orderBy: z.union([ ArticleDomainOrderByWithRelationInputSchema.array(),ArticleDomainOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleDomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleDomainScalarFieldEnumSchema,ArticleDomainScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleDomainFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ArticleDomainFindFirstOrThrowArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  where: ArticleDomainWhereInputSchema.optional(),
  orderBy: z.union([ ArticleDomainOrderByWithRelationInputSchema.array(),ArticleDomainOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleDomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleDomainScalarFieldEnumSchema,ArticleDomainScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleDomainFindManyArgsSchema: z.ZodType<Prisma.ArticleDomainFindManyArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  where: ArticleDomainWhereInputSchema.optional(),
  orderBy: z.union([ ArticleDomainOrderByWithRelationInputSchema.array(),ArticleDomainOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleDomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleDomainScalarFieldEnumSchema,ArticleDomainScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleDomainAggregateArgsSchema: z.ZodType<Prisma.ArticleDomainAggregateArgs> = z.object({
  where: ArticleDomainWhereInputSchema.optional(),
  orderBy: z.union([ ArticleDomainOrderByWithRelationInputSchema.array(),ArticleDomainOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleDomainWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ArticleDomainGroupByArgsSchema: z.ZodType<Prisma.ArticleDomainGroupByArgs> = z.object({
  where: ArticleDomainWhereInputSchema.optional(),
  orderBy: z.union([ ArticleDomainOrderByWithAggregationInputSchema.array(),ArticleDomainOrderByWithAggregationInputSchema ]).optional(),
  by: ArticleDomainScalarFieldEnumSchema.array(),
  having: ArticleDomainScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ArticleDomainFindUniqueArgsSchema: z.ZodType<Prisma.ArticleDomainFindUniqueArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  where: ArticleDomainWhereUniqueInputSchema,
}).strict() ;

export const ArticleDomainFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ArticleDomainFindUniqueOrThrowArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  where: ArticleDomainWhereUniqueInputSchema,
}).strict() ;

export const ArticleCategoryFindFirstArgsSchema: z.ZodType<Prisma.ArticleCategoryFindFirstArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  where: ArticleCategoryWhereInputSchema.optional(),
  orderBy: z.union([ ArticleCategoryOrderByWithRelationInputSchema.array(),ArticleCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleCategoryScalarFieldEnumSchema,ArticleCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleCategoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ArticleCategoryFindFirstOrThrowArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  where: ArticleCategoryWhereInputSchema.optional(),
  orderBy: z.union([ ArticleCategoryOrderByWithRelationInputSchema.array(),ArticleCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleCategoryScalarFieldEnumSchema,ArticleCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleCategoryFindManyArgsSchema: z.ZodType<Prisma.ArticleCategoryFindManyArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  where: ArticleCategoryWhereInputSchema.optional(),
  orderBy: z.union([ ArticleCategoryOrderByWithRelationInputSchema.array(),ArticleCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ArticleCategoryScalarFieldEnumSchema,ArticleCategoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ArticleCategoryAggregateArgsSchema: z.ZodType<Prisma.ArticleCategoryAggregateArgs> = z.object({
  where: ArticleCategoryWhereInputSchema.optional(),
  orderBy: z.union([ ArticleCategoryOrderByWithRelationInputSchema.array(),ArticleCategoryOrderByWithRelationInputSchema ]).optional(),
  cursor: ArticleCategoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ArticleCategoryGroupByArgsSchema: z.ZodType<Prisma.ArticleCategoryGroupByArgs> = z.object({
  where: ArticleCategoryWhereInputSchema.optional(),
  orderBy: z.union([ ArticleCategoryOrderByWithAggregationInputSchema.array(),ArticleCategoryOrderByWithAggregationInputSchema ]).optional(),
  by: ArticleCategoryScalarFieldEnumSchema.array(),
  having: ArticleCategoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ArticleCategoryFindUniqueArgsSchema: z.ZodType<Prisma.ArticleCategoryFindUniqueArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  where: ArticleCategoryWhereUniqueInputSchema,
}).strict() ;

export const ArticleCategoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ArticleCategoryFindUniqueOrThrowArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  where: ArticleCategoryWhereUniqueInputSchema,
}).strict() ;

export const AdminUserCreateArgsSchema: z.ZodType<Prisma.AdminUserCreateArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  data: z.union([ AdminUserCreateInputSchema,AdminUserUncheckedCreateInputSchema ]),
}).strict() ;

export const AdminUserUpsertArgsSchema: z.ZodType<Prisma.AdminUserUpsertArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
  create: z.union([ AdminUserCreateInputSchema,AdminUserUncheckedCreateInputSchema ]),
  update: z.union([ AdminUserUpdateInputSchema,AdminUserUncheckedUpdateInputSchema ]),
}).strict() ;

export const AdminUserCreateManyArgsSchema: z.ZodType<Prisma.AdminUserCreateManyArgs> = z.object({
  data: z.union([ AdminUserCreateManyInputSchema,AdminUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AdminUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AdminUserCreateManyAndReturnArgs> = z.object({
  data: z.union([ AdminUserCreateManyInputSchema,AdminUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AdminUserDeleteArgsSchema: z.ZodType<Prisma.AdminUserDeleteArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  where: AdminUserWhereUniqueInputSchema,
}).strict() ;

export const AdminUserUpdateArgsSchema: z.ZodType<Prisma.AdminUserUpdateArgs> = z.object({
  select: AdminUserSelectSchema.optional(),
  data: z.union([ AdminUserUpdateInputSchema,AdminUserUncheckedUpdateInputSchema ]),
  where: AdminUserWhereUniqueInputSchema,
}).strict() ;

export const AdminUserUpdateManyArgsSchema: z.ZodType<Prisma.AdminUserUpdateManyArgs> = z.object({
  data: z.union([ AdminUserUpdateManyMutationInputSchema,AdminUserUncheckedUpdateManyInputSchema ]),
  where: AdminUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AdminUserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AdminUserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AdminUserUpdateManyMutationInputSchema,AdminUserUncheckedUpdateManyInputSchema ]),
  where: AdminUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const AdminUserDeleteManyArgsSchema: z.ZodType<Prisma.AdminUserDeleteManyArgs> = z.object({
  where: AdminUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleCreateArgsSchema: z.ZodType<Prisma.ArticleCreateArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  data: z.union([ ArticleCreateInputSchema,ArticleUncheckedCreateInputSchema ]),
}).strict() ;

export const ArticleUpsertArgsSchema: z.ZodType<Prisma.ArticleUpsertArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
  create: z.union([ ArticleCreateInputSchema,ArticleUncheckedCreateInputSchema ]),
  update: z.union([ ArticleUpdateInputSchema,ArticleUncheckedUpdateInputSchema ]),
}).strict() ;

export const ArticleCreateManyArgsSchema: z.ZodType<Prisma.ArticleCreateManyArgs> = z.object({
  data: z.union([ ArticleCreateManyInputSchema,ArticleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ArticleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleCreateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleCreateManyInputSchema,ArticleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ArticleDeleteArgsSchema: z.ZodType<Prisma.ArticleDeleteArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  where: ArticleWhereUniqueInputSchema,
}).strict() ;

export const ArticleUpdateArgsSchema: z.ZodType<Prisma.ArticleUpdateArgs> = z.object({
  select: ArticleSelectSchema.optional(),
  include: ArticleIncludeSchema.optional(),
  data: z.union([ ArticleUpdateInputSchema,ArticleUncheckedUpdateInputSchema ]),
  where: ArticleWhereUniqueInputSchema,
}).strict() ;

export const ArticleUpdateManyArgsSchema: z.ZodType<Prisma.ArticleUpdateManyArgs> = z.object({
  data: z.union([ ArticleUpdateManyMutationInputSchema,ArticleUncheckedUpdateManyInputSchema ]),
  where: ArticleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleUpdateManyMutationInputSchema,ArticleUncheckedUpdateManyInputSchema ]),
  where: ArticleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleDeleteManyArgsSchema: z.ZodType<Prisma.ArticleDeleteManyArgs> = z.object({
  where: ArticleWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleDomainCreateArgsSchema: z.ZodType<Prisma.ArticleDomainCreateArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  data: z.union([ ArticleDomainCreateInputSchema,ArticleDomainUncheckedCreateInputSchema ]),
}).strict() ;

export const ArticleDomainUpsertArgsSchema: z.ZodType<Prisma.ArticleDomainUpsertArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  where: ArticleDomainWhereUniqueInputSchema,
  create: z.union([ ArticleDomainCreateInputSchema,ArticleDomainUncheckedCreateInputSchema ]),
  update: z.union([ ArticleDomainUpdateInputSchema,ArticleDomainUncheckedUpdateInputSchema ]),
}).strict() ;

export const ArticleDomainCreateManyArgsSchema: z.ZodType<Prisma.ArticleDomainCreateManyArgs> = z.object({
  data: z.union([ ArticleDomainCreateManyInputSchema,ArticleDomainCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ArticleDomainCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleDomainCreateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleDomainCreateManyInputSchema,ArticleDomainCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ArticleDomainDeleteArgsSchema: z.ZodType<Prisma.ArticleDomainDeleteArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  where: ArticleDomainWhereUniqueInputSchema,
}).strict() ;

export const ArticleDomainUpdateArgsSchema: z.ZodType<Prisma.ArticleDomainUpdateArgs> = z.object({
  select: ArticleDomainSelectSchema.optional(),
  include: ArticleDomainIncludeSchema.optional(),
  data: z.union([ ArticleDomainUpdateInputSchema,ArticleDomainUncheckedUpdateInputSchema ]),
  where: ArticleDomainWhereUniqueInputSchema,
}).strict() ;

export const ArticleDomainUpdateManyArgsSchema: z.ZodType<Prisma.ArticleDomainUpdateManyArgs> = z.object({
  data: z.union([ ArticleDomainUpdateManyMutationInputSchema,ArticleDomainUncheckedUpdateManyInputSchema ]),
  where: ArticleDomainWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleDomainUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleDomainUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleDomainUpdateManyMutationInputSchema,ArticleDomainUncheckedUpdateManyInputSchema ]),
  where: ArticleDomainWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleDomainDeleteManyArgsSchema: z.ZodType<Prisma.ArticleDomainDeleteManyArgs> = z.object({
  where: ArticleDomainWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleCategoryCreateArgsSchema: z.ZodType<Prisma.ArticleCategoryCreateArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  data: z.union([ ArticleCategoryCreateInputSchema,ArticleCategoryUncheckedCreateInputSchema ]),
}).strict() ;

export const ArticleCategoryUpsertArgsSchema: z.ZodType<Prisma.ArticleCategoryUpsertArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  where: ArticleCategoryWhereUniqueInputSchema,
  create: z.union([ ArticleCategoryCreateInputSchema,ArticleCategoryUncheckedCreateInputSchema ]),
  update: z.union([ ArticleCategoryUpdateInputSchema,ArticleCategoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const ArticleCategoryCreateManyArgsSchema: z.ZodType<Prisma.ArticleCategoryCreateManyArgs> = z.object({
  data: z.union([ ArticleCategoryCreateManyInputSchema,ArticleCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ArticleCategoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleCategoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleCategoryCreateManyInputSchema,ArticleCategoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ArticleCategoryDeleteArgsSchema: z.ZodType<Prisma.ArticleCategoryDeleteArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  where: ArticleCategoryWhereUniqueInputSchema,
}).strict() ;

export const ArticleCategoryUpdateArgsSchema: z.ZodType<Prisma.ArticleCategoryUpdateArgs> = z.object({
  select: ArticleCategorySelectSchema.optional(),
  include: ArticleCategoryIncludeSchema.optional(),
  data: z.union([ ArticleCategoryUpdateInputSchema,ArticleCategoryUncheckedUpdateInputSchema ]),
  where: ArticleCategoryWhereUniqueInputSchema,
}).strict() ;

export const ArticleCategoryUpdateManyArgsSchema: z.ZodType<Prisma.ArticleCategoryUpdateManyArgs> = z.object({
  data: z.union([ ArticleCategoryUpdateManyMutationInputSchema,ArticleCategoryUncheckedUpdateManyInputSchema ]),
  where: ArticleCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleCategoryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ArticleCategoryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ArticleCategoryUpdateManyMutationInputSchema,ArticleCategoryUncheckedUpdateManyInputSchema ]),
  where: ArticleCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ArticleCategoryDeleteManyArgsSchema: z.ZodType<Prisma.ArticleCategoryDeleteManyArgs> = z.object({
  where: ArticleCategoryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;