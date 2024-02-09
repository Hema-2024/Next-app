/*
  Warnings:

  - Made the column `date` on table `dailydetails` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "dailydetails" ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;
