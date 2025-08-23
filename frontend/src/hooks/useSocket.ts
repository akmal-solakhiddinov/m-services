import { io, Socket } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import useRoomFetch from "./useRoomFetch";

// Create socket instance outside the component to prevent recreation
let socketInstance: Socket | null = null;

const useSocket = () => {
  const { isAuth, user, isActivated } = useAuth();
  const { toast } = useToast();
  const [isConnected, setIsConnected] = useState(false);
  const { pathname } = useLocation();
  const { rooms } = useRoomFetch();

  const roomsRef = useRef(rooms);
  const pathnameRef = useRef(pathname);

  useEffect(() => {
    roomsRef.current = rooms;
  }, [rooms]);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if (!isAuth || !isActivated || !user?.id) {
      return;
    }

    if (socketInstance?.connected) {
      setIsConnected(true);
      return;
    }

    const socketUrl = import.meta.env.VITE_BASE_URL;
    const accessToken = localStorage.getItem("accessToken");
    console.log("Creating new socket connection to:", socketUrl);

    socketInstance = io(socketUrl, {
      query: { userId: user.id },
      auth:{accessToken},
      withCredentials: true,
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
    });

    const setupSocketEvents = () => {
      if (!socketInstance) return;

      socketInstance.on("connect", () => {
        console.log("Socket connected:", socketInstance?.id);

        const allRooms = roomsRef.current.map((r) => r.id);
        socketInstance?.emit("joinRoom", [user.id, ...allRooms]);

        setIsConnected(true);
      });

      socketInstance.on("notification", (notification) => {
        const parsedNotification = JSON.parse(notification);
        console.log("Parsed notification:", parsedNotification);
      });

      socketInstance.on("userTyping", () => {
        console.log("typing....");
      });

      socketInstance.on("joined", ({ userId }) => {
        console.log(userId, "-----user joined-----");
      });

      socketInstance.on("message", (message) => {
        const roomId = pathnameRef.current.split("/")[2];

        if (roomId === message.chatId) {
          return;
        } else {
          toast({
            title: "New Message",
            description: message.content || "No content",
          });
        }
      });

      socketInstance.on("candidate", (message) => {
        console.log("ICE candidate received: ", message);
      });

      socketInstance.on("connect_error", (error) => {
        console.error("Connection error:", error.message);
        setIsConnected(false);
      });

      socketInstance.on("reconnect_attempt", (attemptNumber) => {
        console.log(`Reconnection attempt #${attemptNumber}`);
      });

      socketInstance.on("reconnect", () => {
        console.log("Successfully reconnected to server");
        setIsConnected(true);
      });

      socketInstance.on("reconnect_error", (error) => {
        console.error("Failed to reconnect:", error.message);
      });

      socketInstance.on("reconnect_failed", () => {
        console.error("Failed to reconnect after all attempts");
        setIsConnected(false);
      });

      socketInstance.on("disconnect", (reason) => {
        console.log(`Socket disconnected due to: ${reason}`);
        setIsConnected(false);

        if (reason === "io server disconnect") {
          console.log(
            "Server disconnected the socket, manual reconnection needed"
          );
          // Try to reconnect if server disconnected
          socketInstance?.connect();
        }
      });
    };

    setupSocketEvents();

    // Join/leave rooms when room list changes
    const handleRoomChange = () => {
      if (socketInstance?.connected && user?.id) {
        const allRooms = roomsRef.current.map((r) => r.id);
        socketInstance.emit("joinRoom", [user.id, ...allRooms]);
      }
    };

    // Setup a listener for room changes
    const roomChangeInterval = setInterval(handleRoomChange, 10000);

    // Clean up function
    return () => {
      clearInterval(roomChangeInterval);

      // Don't disconnect on component unmount - this is key to maintaining connection
      // Only disconnect when user logs out or app is closed
      // socketInstance?.disconnect();

      // Instead, just remove the listeners to prevent memory leaks
      if (socketInstance) {
        socketInstance.removeAllListeners();
      }
    };
  }, [isAuth, isActivated, user?.id, toast]); // Minimal dependency array

  // Method to manually disconnect (use when logging out)
  const disconnect = () => {
    if (socketInstance) {
      socketInstance.disconnect();
      socketInstance = null;
      setIsConnected(false);
    }
  };

  return { socket: socketInstance, isConnected, disconnect };
};

export default useSocket;
