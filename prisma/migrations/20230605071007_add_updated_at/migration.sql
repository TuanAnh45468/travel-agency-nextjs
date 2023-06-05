/*
  Warnings:

  - You are about to drop the column `nonStop` on the `Flight` table. All the data in the column will be lost.
  - Added the required column `isReturnTrip` to the `Flight` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flight" DROP COLUMN "nonStop",
ADD COLUMN     "isReturnTrip" BOOLEAN NOT NULL;
