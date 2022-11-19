/*
  Warnings:

  - Added the required column `domainUuid` to the `Park` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Park` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Park" ADD COLUMN     "domainUuid" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Park" ADD CONSTRAINT "Park_domainUuid_fkey" FOREIGN KEY ("domainUuid") REFERENCES "Domain"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
