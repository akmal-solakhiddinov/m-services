/*
  Warnings:

  - You are about to drop the column `created` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to drop the column `updated` on the `ChatRoom` table. All the data in the column will be lost.
  - You are about to alter the column `token` on the `Session` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "ChatRoom" DROP COLUMN "created",
DROP COLUMN "updated";

-- AlterTable
ALTER TABLE "Session" ALTER COLUMN "token" SET DATA TYPE VARCHAR(255);
