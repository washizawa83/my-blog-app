/*
  Warnings:

  - Changed the type of `name` on the `ArticleDomain` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Domain" AS ENUM ('FRONTEND', 'BACKEND', 'INFRA');

-- DropIndex
DROP INDEX "ArticleDomain_name_key";

-- AlterTable
ALTER TABLE "ArticleDomain" DROP COLUMN "name",
ADD COLUMN     "name" "Domain" NOT NULL;
