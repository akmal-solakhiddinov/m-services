import { FaFile } from "react-icons/fa";
import React from "react";
import { MessageType } from "@/lib/type";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import ModalFormEditMessage from "./modalFormEditMessage";
import ModalDeleteItem from "./modalDeleteItem";
import { useAuth } from "@/context/authContext";
import { CiMenuKebab } from "react-icons/ci";

const formatTime = (timestamp: string) => {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${period}`;
};

interface MessageProps {
  message: MessageType;
  type: "left" | "right";
  reference: React.RefObject<HTMLDivElement> | null;
}

const Message: React.FC<MessageProps> = ({ message, type, reference }) => {
  const { user } = useAuth();

  const renderFileContent = () => {
    if (!message.file || !message.fileType) return null;

    const sharedClassNames = "w-full h-auto object-cover rounded-lg";
    switch (message.fileType) {
      case "IMAGE":
        return (
          <img
            src={message.file}
            alt="Message attachment"
            className={sharedClassNames}
            onError={(e) => (e.currentTarget.src = "/fallback-image.png")}
          />
        );
      case "VIDEO":
        return (
          <video
            src={message.file}
            controls
            className={`${sharedClassNames} aspect-video`}
          />
        );
      case "AUDIO":
        return <audio src={message.file} controls />;
      case "FILE":
        return (
          <a
            href={message.file}
            download
            className="flex items-center gap-2 text-blue-500 hover:underline"
          >
            <FaFile /> Download File
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div
      data-message-status={message.status}
      data-message-id={message.id}
      data-senderid={message.senderId}
      data-receiverid={message.receiverId}

      className={`item-message flex ${
        type === "right" ? "justify-end" : "justify-start"
      } mb-4`}
      ref={reference}
    >
      <div
        className={`max-w-60 shadow-xl overflow-hidden w-max p-[3px] min-w-20 rounded-lg ${
          type === "right"
            ? "bg-slate-800 text-white"
            : "bg-slate-900 text-slate-50"
        }`}
      >
        {message.file && renderFileContent()}
        {message.content && (
          <p className="p-2 break-words">{message.content}</p>
        )}

        <div className="flex items-center justify-between gap-4 mt-2">
          <span className="text-xs opacity-75">
            {formatTime(message.created)}
          </span>
          <span>{user?.id === message.senderId && message.status}</span>
          {user?.id === message.sender.id && (
            <Popover>
              <PopoverTrigger aria-label="Message options">
                <CiMenuKebab size={16} />
              </PopoverTrigger>
              <PopoverContent className="max-w-min flex flex-col gap-3">
                <ModalFormEditMessage message={message} />
                <ModalDeleteItem
                  text="Do you really want to delete this message?"
                  itemLink={`messages/delete/${message.id}`}
                />
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
