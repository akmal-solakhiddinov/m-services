export enum RequestStatus {
    Pending = 'pending',
    Approved = 'approved',
    Rejected = 'rejected',
  }
  
  export enum MessageFileType {
    Image = 'IMAGE',
    Video = 'VIDEO',
    File = 'FILE',
    Audio = 'AUDIO',
  }
  
  export enum FriendsRelationshipType {
    Friend = 'friend',
    Blocked = 'blocked',
  }
  
  export enum UserStatus {
    Online = 'online',
    Offline = 'offline',
  }
  
  export enum FriendsStatus {
    Active = 'active',
    Removed = 'removed',
  }
  
  export enum MessageStatus {
    Seen = 'seen',
    Unseen = 'unseen',
  }
  
  export enum UserAccount {
    Private = 'private',
    Public = 'public',
  }
  export interface User {
    id: string;
    email: string;
    username?: string | null; // <-- allow null
    fullName?: string | null; // <-- allow null
    status: UserStatus;
    lastLogin?: Date | null; // <-- allow null
    password: string;
    image?: string | null; // <-- allow null
    isActivated: boolean;
    created: Date;
    updated: Date;
    deleted: boolean;
    account: UserAccount;
    ChatRoom_ChatRoom_userOneIdToUser: ChatRoom[];
    ChatRoom_ChatRoom_userTwoIdToUser: ChatRoom[];
    Friends_Friends_relatedUserIdToUser: Friends[];
    Friends_Friends_userIdToUser: Friends[];
    Message_Message_receiverIdToUser: Message[];
    Message_Message_senderIdToUser: Message[];
    Request_Request_friendIdToUser: Request[];
    Request_Request_senderIdToUser: Request[];
    Session: Session[];
  }
  
  export interface ChatRoom {
    id: string;
    userOneId: string;
    userTwoId: string;
    lastMessageId?: string | null;
    created: Date;
    updated: Date;
    deleted: boolean;
    User_ChatRoom_userOneIdToUser: User;
    User_ChatRoom_userTwoIdToUser: User;
    Message_Message_chatIdToChatRoom: Message[];
    Message_ChatRoom_lastMessageIdToMessage?: Message | null;
    Friends_Friends_relatedUserIdToUser: Friends[];
    Friends_Friends_userIdToUser: Friends[];
    Request_Request_friendIdToUser: Request[];
    Request_Request_senderIdToUser: Request[];
  }
  
  export interface Friends {
    id: string;
    userId: string;
    relatedUserId: string;
    relationshipType: FriendsRelationshipType;
    status: FriendsStatus;
    created: Date;
    updated: Date;
    User_Friends_relatedUserIdToUser: User;
    User_Friends_userIdToUser: User;
  }
  
  export interface Message {
    id: string;
    content?: string | null;
    file?: string | null;
    fileType?: MessageFileType | null;
    senderId: string;
    receiverId: string;
    chatId: string;
    status: MessageStatus;
    created: Date;
    updated: Date;
    deleted: boolean;
    ChatRoom_ChatRoom_lastMessageIdToMessage?: ChatRoom | null;
    ChatRoom_Message_chatIdToChatRoom: ChatRoom;
    User_Message_receiverIdToUser: User;
    User_Message_senderIdToUser: User;
  }
  
  export interface Request {
    id: string;
    senderId: string;
    friendId: string;
    status: RequestStatus;
    created: Date;
    updated: Date;
    User_Request_friendIdToUser: User;
    User_Request_senderIdToUser: User;
  }
  
  export interface Session {
    id: string;
    userId: string;
    token: string;
    ip: string;
    device: string;
    userAgent: string;
    created: Date;
    updated: Date;
    expiresAt: Date;
    User: User;
  }
  