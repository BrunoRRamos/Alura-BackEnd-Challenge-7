/*
  Warnings:

  - Added the required column `foto` to the `Depoimentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Depoimentos" ADD COLUMN     "foto" TEXT NOT NULL;
