/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `numeroEndereco` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `nascimento` on the `Cliente` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Cliente" DROP COLUMN "createdAt",
DROP COLUMN "numero",
ADD COLUMN     "numeroEndereco" TEXT NOT NULL,
DROP COLUMN "nascimento",
ADD COLUMN     "nascimento" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "descricao" DROP NOT NULL;
