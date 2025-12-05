import { useEffect, useCallback } from "react";
import useSocket from "@/hooks/useSocket";
import { useQueryClient } from "@tanstack/react-query";
import { MessageType, UserType } from "@/lib/type";

interface ChatData {
  id: string;
  user: UserType;
  messages: MessageType[];
}

const useRealTimeMessages = (roomId: string | undefined) => {
  const queryClient = useQueryClient();
  const { socket, isConnected } = useSocket();

  const handleNewMessage = useCallback(
    (newMessage: MessageType) => {
      queryClient.setQueryData(["messages", roomId], (oldData: ChatData) => ({
        ...oldData,
        messages: [...(oldData?.messages || []), newMessage],
      }));
    },
    [queryClient, roomId]
  );

  const handleSeenMessage = useCallback((messageIds:string) => {
    console.log(messageIds);
    queryClient.setQueryData(["messages", roomId], (oldData:ChatData)=>{
        const updatedMessages = oldData.messages.map((message) =>
            messageIds.includes(message.id) ? { ...message, status: "seen" } : message
          );
  
          return { ...oldData, messages: updatedMessages };
    })
  }, [queryClient, roomId]);

  useEffect(() => {
    if (isConnected) {
      socket?.emit("joinRoom", roomId);
      socket?.on("message", handleNewMessage);
      socket?.on("messageSeenAck", (data)=>{
        console.log(data, '<--data')
        handleSeenMessage(data.messageIds)
      });

      return () => {
        socket?.off("message", handleNewMessage);
        // socket?.off("messageSeenAck", handleNewMessage);
      };
    }
  }, [handleNewMessage, isConnected, socket, roomId]);

  return null; // This hook doesn't need to return anything
};

export default useRealTimeMessages;
