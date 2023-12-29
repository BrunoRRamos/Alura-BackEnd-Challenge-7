/*
  Warnings:

  - You are about to drop the `depoimentos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "depoimentos";

-- CreateTable
CREATE TABLE "Depoimentos" (
    "id" TEXT NOT NULL,
    "depoimento" TEXT NOT NULL,
    "nomePessoa" TEXT NOT NULL,

    CONSTRAINT "Depoimentos_pkey" PRIMARY KEY ("id")
);
