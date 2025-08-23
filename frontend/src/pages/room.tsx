import FormMessage from "@/components/formMessage";
import RoomNavbar from "@/components/roomNavbar";
import Message from "@/components/shared/message";
import Spinner from "@/components/shared/Spinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuth } from "@/context/authContext";
import useFetchRoomMessages from "@/hooks/useFetchRoomMessages";
import useSocket from "@/hooks/useSocket";
import { MessageType } from "@/lib/type";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

interface MessageStatusProps {
  id: string;
  status: "unseen" | "seen";
  senderId: string;
  receiverId: string;
  roomId: string;
}
const Room = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { id } = useParams<string>();
  const { user } = useAuth();
  const { user: friend, messages, isLoading } = useFetchRoomMessages(id);
  const { socket } = useSocket();
  // useRealTimeMessages(id);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUpdateMessageStatus = (
    id: string,
    status: "unseen" | "seen",
    senderId: string,
    receiverId: string,
    roomId: string
  ) => {
    if (senderId !== user?.id && status === "unseen") {
      console.log("unseen!!!!");
      // Emit `messageSeen` event to the server
      console.log("unseen messages");

      socket?.emit("messageSeen", {
        senderId,
        receiverId,
        messageId: id,
        roomId,
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const dataStatus = entry.target.getAttribute("data-message-status");
            const dataID = entry.target.getAttribute("data-message-id");
            const senderId = entry.target.getAttribute("data-senderid");
            const receiverId = entry.target.getAttribute("data-receiverid");

            const validStatuses = ["unseen", "seen"] as const;

            if (
              !dataID ||
              !senderId ||
              !receiverId ||
              !dataStatus ||
              !validStatuses.includes(
                dataStatus as (typeof validStatuses)[number]
              )
            )
              return;
            // console.log(`Message in view with status: ${dataStatus}, ${dataID}`);
            handleUpdateMessageStatus(
              dataID,
              dataStatus as MessageStatusProps["status"],
              senderId,
              receiverId,
              id as string
            );
          }
        });
      },
      {
        root: document.getElementById("items-container"),
        threshold: 1,
      }
    );

    const elements = document.querySelectorAll(".item-message");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, [messages]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Room Navbar (Sticky) */}
      <div className="sticky top-0 z-10">
        <RoomNavbar friend={friend} roomId={id} />
      </div>

      {/* Message Scroll Area */}
      <div className="flex-grow">
        <ScrollArea
          id="items-container"
          className="px-6 my-4 scroll-p-14 h-[80vh] overflow-y-auto"
        >
          {isLoading ? (
            <Spinner />
          ) : (
            messages?.map((message: MessageType, index: number) => (
              <Message
                message={message}
                key={message.id}
                type={message.sender.id === user?.id ? "right" : "left"}
                reference={
                  messages?.length - 1 === index ? messagesEndRef : null
                }
              />
            ))
          )}
          {!messages?.length && (
            <div className="text-center text-white py-6">
              Room created, no messages yet.
            </div>
          )}
        </ScrollArea>
      </div>

      {/* Form Message (Sticky at the bottom) */}
      <div className="sticky bottom-0 bg-slate-700 p-3 px-6">
        <FormMessage receiverId={friend?.id} roomId={id} />
      </div>
    </div>
  );
};

export default Room;
