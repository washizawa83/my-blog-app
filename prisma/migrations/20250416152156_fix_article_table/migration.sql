/*
  Warnings:

  - Added the required column `isPublic` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" ADD COLUMN     "isPublic" BOOLEAN NOT NULL;
