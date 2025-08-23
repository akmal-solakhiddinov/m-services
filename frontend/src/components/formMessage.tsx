import { File, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import $axios from "@/http/axios";
import { determineFileType } from "@/lib/helper";
import useSocket from "@/hooks/useSocket";
import { useAuth } from "@/context/authContext";
import { useState, useEffect, useRef } from "react";

// Maximum file size (5MB)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

// Supported file types
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

// Zod validation schema with improved file validation
const messageSchema = z
  .object({
    content: z.string().optional(),
    file: z
      .any()
      .optional()
      .refine((files) => {
        if (!files || files.length === 0) return true;
        return files[0]?.size <= MAX_FILE_SIZE;
      }, `File size should be less than 5MB`)
      .refine((files) => {
        if (!files || files.length === 0) return true;
        return ACCEPTED_FILE_TYPES.includes(files[0]?.type);
      }, "Uploaded file has an unsupported format."),
  })
  .refine((data) => data.content || (data.file && data.file.length > 0), {
    message: "Please enter a message or upload a file",
    path: ["content"],
  });

type FormMessageProps = {
  receiverId: string | undefined;
  roomId: string | undefined;
  onMessageSent?: () => void;
};

type MessageSchema = z.infer<typeof messageSchema>;

const FormMessage: React.FC<FormMessageProps> = ({
  receiverId,
  roomId,
  onMessageSent,
}) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    handleSubmit,
    reset,
    register,
    formState: { isSubmitting, errors },
    watch,
    setValue,
  } = useForm<MessageSchema>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      content: "",
      file: undefined,
    },
  });

  const { socket, isConnected } = useSocket();
  const { user } = useAuth();

  const watchFile = watch("file");

  // Handle file preview
  useEffect(() => {
    if (watchFile && watchFile instanceof FileList && watchFile.length > 0) {
      const file = watchFile[0];
      setFileName(file.name);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        // For non-image files, clear image preview but keep filename
        setFilePreview(null);
      }
    } else {
      setFilePreview(null);
      setFileName(null);
    }
  }, [watchFile]);

  // Clean up typing timeout on unmount
  useEffect(() => {
    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  const onSubmit = async (data: MessageSchema) => {
    if (!receiverId || !roomId) {
      console.error("Missing receiverId or roomId");
      return;
    }

    try {
      const formData = new FormData();

      if (data.content?.trim()) {
        formData.append("content", data.content.trim());
      }

      if (data.file && data.file instanceof FileList && data.file.length > 0) {
        const file = data.file[0];
        formData.append("file", file);
        formData.append("fileType", determineFileType(file.name));
      }

      // Send message via API
      const res = await $axios.post(
        `/messages/send/${roomId}/${receiverId}`,
        formData
      );

      console.log(res.data);
      console.log(isConnected);

      // If successful and socket is connected, emit socket event
      if (res.data && isConnected) {
        const socketMessage = {
          ...res.data,
          sender: { id: user?.id },
          timestamp: new Date().toISOString(),
        };
        console.log("Message sent!1!!!!!!!");

        socket?.emit("sendMessage", roomId, socketMessage);

        // Stop typing indicator when sending message
        if (isTyping) {
          setIsTyping(false);
          socket?.emit("userStoppedTyping", { roomId });
        }
      }

      // Notify parent component if callback provided
      if (onMessageSent) {
        onMessageSent();
      }

      // Reset form
      reset();
      setFilePreview(null);
      setFileName(null);
    } catch (error) {
      console.error("Error sending message:", error);
      // Could add toast notification here
    }
  };

  const handleTyping = () => {
    // Only emit typing event if not already typing
    if (!isTyping && roomId) {
      setIsTyping(true);
      socket?.emit("userTyping", { roomId });
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      if (!roomId) return;
      socket?.emit("userStoppedTyping", { roomId });
    }, 2000);
  };

  const handleClearFile = () => {
    setValue("file", undefined);
    setFilePreview(null);
    setFileName(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Submit on Enter without Shift key
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="flex flex-col w-full gap-2">
      {/* File preview area */}
      {(filePreview || fileName) && (
        <div className="bg-slate-800 p-2 rounded-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            {filePreview ? (
              <img
                src={filePreview}
                alt="Preview"
                className="h-10 w-10 object-cover rounded"
              />
            ) : (
              <File className="h-10 w-10 p-2 bg-slate-700 rounded" />
            )}
            <span className="text-white truncate max-w-xs">{fileName}</span>
          </div>
          <Button
            onClick={handleClearFile}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            ✕
          </Button>
        </div>
      )}

      {/* Form error message */}
      {errors.content && (
        <span className="text-red-500 text-sm px-2">
          {errors.content.message}
        </span>
      )}
      {errors.file && (
        <span className="text-red-500 text-sm px-2">
          {errors.file.message?.toString()}
        </span>
      )}

      {/* Message input form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row w-full items-center justify-between gap-2"
      >
        <label
          htmlFor="input-file"
          className="text-white text-center rounded-full w-10 h-10 p-2 cursor-pointer hover:bg-slate-600 transition"
        >
          <File />
        </label>
        <input
          hidden
          type="file"
          id="input-file"
          {...register("file")}
          ref={fileInputRef}
        />

        <input
          type="text"
          {...register("content")}
          className="bg-slate-700 border-none flex-grow outline-none text-white p-3 rounded-lg"
          placeholder="Type your message..."
          onKeyDown={handleKeyDown}
          onChange={() => handleTyping()}
          disabled={isSubmitting}
        />

        <Button
          type="submit"
          className="text-white text-center rounded-full w-10 h-10 p-2 hover:bg-blue-600 transition"
          size="icon"
          disabled={isSubmitting}
        >
          <Send />
        </Button>
      </form>
    </div>
  );
};

export default FormMessage;
