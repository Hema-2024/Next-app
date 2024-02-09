-- AlterTable
ALTER TABLE "dailydetails" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "dailydetails_pkey" PRIMARY KEY ("id");
