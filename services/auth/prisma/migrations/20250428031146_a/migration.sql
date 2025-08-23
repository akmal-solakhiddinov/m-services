-- DropIndex
DROP INDEX "idx_id";

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_id_fkey" FOREIGN KEY ("id") REFERENCES "ChatRoom"("lastMessageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "Request_friendId_fkeyidx" RENAME TO "idx_friendId";
