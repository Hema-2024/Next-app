-- CreateTable
CREATE TABLE "dailydetails" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50),
    "date" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "mrng" TEXT,
    "evng" TEXT,

    CONSTRAINT "dailydetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "name" VARCHAR(50),
    "date" DATE,
    "mrng" TEXT,
    "evng" TEXT
);
