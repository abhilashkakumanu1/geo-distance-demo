-- CreateTable
CREATE TABLE "Places" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "latitude" DECIMAL(10,6) NOT NULL,
    "longitude" DECIMAL(10,6) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Places_pkey" PRIMARY KEY ("id")
);
