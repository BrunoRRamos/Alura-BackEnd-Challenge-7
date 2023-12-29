/*
  Warnings:

  - You are about to drop the `Depoimentos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Depoimentos";

-- CreateTable
CREATE TABLE "Depoimento" (
    "id" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "depoimento" TEXT NOT NULL,
    "nomePessoa" TEXT NOT NULL,

    CONSTRAINT "Depoimento_pkey" PRIMARY KEY ("id")
);
