import { useQueryClient } from "@tanstack/react-query";
import useSocket from "./useSocket";
import { useCallback, useEffect } from "react";
import { MessageType, UserType } from "@/lib/type";
import { useAuth } from "@/context/authContext";

interface RoomProps {
  id: string;
  user: UserType;
  lastMessage: MessageType;
  unSeenMessageCount: number;
}

const useRealTimeRooms = () => {
  const { isConnected, socket } = useSocket();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  // Handle user status updates
  const handleRealTimeRooms = useCallback(
    ({ userId }: { userId: string }) => {
      queryClient.setQueryData(
        ["rooms"],
        (oldRooms: RoomProps[] | undefined) => {
          if (!oldRooms) return oldRooms; // safety

          return oldRooms.map((room) =>
            room.user.id === userId
              ? { ...room, user: { ...room.user, status: "online" } }
              : room
          );
        }
      );
    },
    [queryClient]
  );

  // Handle message seen acknowledgment
  const handleUnseenMessageCount = useCallback(
    ({ roomIds }: { roomIds?: string[] }) => {
      if (!roomIds) return; // nothing to do

      queryClient.setQueryData(
        ["rooms"],
        (oldRooms: RoomProps[] | undefined) => {
          if (!oldRooms) return oldRooms;

          console.log(oldRooms.length, "length .............");
          return oldRooms.map((room) =>
            roomIds.includes(room.id)
              ? {
                  ...room,
                  unSeenMessageCount: Math.max(room.unSeenMessageCount - 1, 0),
                }
              : room
          );
        }
      );
    },
    [queryClient]
  );

  // Handle new messages
  const handleNewMessage = useCallback(
    (message: MessageType) => {
      const currentUserId = user?.id;

      queryClient.setQueryData(
        ["rooms"],
        (oldRooms: RoomProps[] | undefined) => {
          if (!oldRooms) return oldRooms;

          return oldRooms.map((room) =>
            room.id === message.chatId
              ? {
                  ...room,
                  lastMessage: message,
                  unSeenMessageCount:
                    message.senderId !== currentUserId
                      ? (room.unSeenMessageCount || 0) + 1
                      : room.unSeenMessageCount,
                }
              : room
          );
        }
      );
    },
    [queryClient]
  );

  useEffect(() => {
    if (!isConnected || !socket) return;

    socket.on("joined", handleRealTimeRooms);
    socket.on("messageSeenAck", handleUnseenMessageCount);
    socket.on("message", handleNewMessage);

    return () => {
      socket.off("joined", handleRealTimeRooms);
      socket.off("messageSeenAck", handleUnseenMessageCount);
      socket.off("message", handleNewMessage);
    };
  }, [
    isConnected,
    socket,
    handleRealTimeRooms,
    handleUnseenMessageCount,
    handleNewMessage,
  ]);

  return { isConnected, socket };
};

export default useRealTimeRooms;
