/*
  Warnings:

  - Added the required column `parkUuid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "parkUuid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Park" (
    "uuid" TEXT NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 30,
    "userUuid" TEXT NOT NULL,

    CONSTRAINT "Park_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_userUuid_fkey" FOREIGN KEY ("userUuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
