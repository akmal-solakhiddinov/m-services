
import { useAuth } from "@/context/authContext";
import React from "react";

interface Props {
  room: any;
}

const UserItem: React.FC<Props> = ({ room }) => {
  const { user } = useAuth();
  
  return (
    <div className="flex items-center w-full">
      <div className="relative">
        <div className="h-10 w-10 rounded-full overflow-hidden flex items-center justify-center bg-gray-700 text-gray-100 border border-gray-600 shadow-sm">
          {room?.user?.image ? (
            <img
              src={room?.user.image}
              alt={room?.user?.fullName || "User"}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="font-medium">
              {room?.user?.fullName ? room?.user.fullName[0].toUpperCase() : "?"}
            </span>
          )}
        </div>
        <div
          className={`absolute -right-0.5 -bottom-0.5 w-3 h-3 rounded-full ring-2 ring-slate-800 ${
            room?.user?.status === "online"
              ? "bg-green-500"
              : room?.user?.status === "offline"
              ? "bg-yellow-500"
              : "bg-gray-500"
          }`}
          title={room?.user?.status || "unknown"}
          aria-label={`Status: ${room?.user?.status || "unknown"}`}
        />
      </div>

      <div className="flex-1 ml-3 truncate">
        <div className="font-medium text-sm">
          {room?.user?.fullName || "Unknown User"}
        </div>
        <div className="text-xs text-slate-400 truncate max-w-[180px]">
          {room?.lastMessage?.senderId === user?.id
            ? `You: ${room?.lastMessage?.content}`
            : room?.lastMessage?.content || "No messages yet"}
        </div>
      </div>

      {room?.unSeenMessageCount > 0 && (
        <div className="flex-shrink-0 ml-auto">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-600 text-white text-xs font-medium">
            {room.unSeenMessageCount}
          </span>
        </div>
      )}
    </div>
  );
};

export default UserItem;
