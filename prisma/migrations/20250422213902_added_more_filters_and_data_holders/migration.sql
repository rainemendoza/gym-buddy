/*
  Warnings:

  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "phone_number",
ADD COLUMN     "days" TEXT[],
ADD COLUMN     "experience" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "gender" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "instagram" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "linkedIn" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "twitter" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "types" TEXT[];
