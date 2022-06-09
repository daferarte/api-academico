-- CreateTable
CREATE TABLE "Equivalencias" (
    "id" SERIAL NOT NULL,
    "id_asignaturas_plan_estudios" JSONB NOT NULL,
    "semestres" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Equivalencias_pkey" PRIMARY KEY ("id")
);
