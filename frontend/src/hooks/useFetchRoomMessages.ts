import { useQuery, useQueryClient } from "@tanstack/react-query";
import $axios from "@/http/axios";
import useSocket from "@/hooks/useSocket";
import { useEffect, useCallback } from "react";
import { MessageType, UserType } from "@/lib/type";

interface RoomMessagesData {
  user: UserType;
  messages: MessageType[];
}

interface ChatData {
  id: string;
  user: UserType;
  messages: MessageType[];
}

const useFetchRoomMessages = (id: string | undefined) => {
  const queryClient = useQueryClient();
  const { isConnected, socket } = useSocket();

  const { data, isLoading, error } = useQuery<RoomMessagesData>({
    queryKey: ["messages", id],
    queryFn: async () => {
      if (!id) throw new Error("Room ID is required");
      const response = await $axios.get(`rooms/room-messages/${id}`, {
        params: { page: 1, pageSize: 10000 },
      });
      return response.data;
    },
  });

  const { user, messages } = data || { user: null, messages: [] };

  const handleNewMessage = useCallback(
    (newMessage: MessageType) => {
      queryClient.setQueryData(
        ["messages", id],
        (oldData: ChatData | undefined) => {
          if (!oldData) return;

          if (newMessage.chatId === id) {
            return {
              ...oldData,
              messages: [...(oldData.messages || []), newMessage],
            };
          }

          return oldData;
        }
      );
    },
    [queryClient, id]
  );

  const handleSeenMessage = useCallback(
    (messageIds: string[]) => {
      queryClient.setQueryData(["messages", id], (oldData: ChatData) => {
        if (!oldData || !oldData.messages) return oldData;

        const updatedMessages = oldData.messages.map((message) =>
          messageIds.includes(message.id)
            ? { ...message, status: "seen" }
            : message
        );

        return { ...oldData, messages: updatedMessages };
      });
    },
    [queryClient, id]
  );

  useEffect(() => {
    if (isConnected) {
      socket?.emit("joinRoom", id);
      socket?.on("message", handleNewMessage);
      socket?.on("messageSeenAck", (data) => {
        /* console.log(
          `m-ids ${data.messageIds}\nsender-id: ${data.senderId}\nreceiver-ids: ${data.receiverIds}`
        ); */
        if (Array.isArray(data.messageIds)) {
          handleSeenMessage(data.messageIds);
        }
      });

      return () => {
        socket?.off("message", handleNewMessage);
        socket?.off("messageSeenAck", handleNewMessage);
      };
    }
  }, [handleNewMessage, isConnected, socket, id]);

  return { data, user, messages, isLoading, error };
};

export default useFetchRoomMessages;
