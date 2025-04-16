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
// SELECT & INCLUDE
/////////////////////////////////////////

// ADMIN USER
//------------------------------------------------------

export const AdminUserSelectSchema: z.ZodType<Prisma.AdminUserSelect> = z.object({
  id: z.boolean().optional(),
  username: z.boolean().optional(),
  password: z.boolean().optional(),
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

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
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