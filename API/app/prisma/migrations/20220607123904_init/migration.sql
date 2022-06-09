/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Equivalencias` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Equivalencias` table. All the data in the column will be lost.
  - Added the required column `actualizado` to the `Equivalencias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equivalencias" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "actualizado" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Retornos" (
    "id" BIGSERIAL NOT NULL,
    "creado" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizado" TIMESTAMP(3) NOT NULL,
    "id_asignaturas_matriculas" INTEGER NOT NULL,
    "equivalencias_id" INTEGER,

    CONSTRAINT "Retornos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Retornos" ADD CONSTRAINT "Retornos_equivalencias_id_fkey" FOREIGN KEY ("equivalencias_id") REFERENCES "Equivalencias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
