export type UserRole = 'user' | 'moderator' | 'admin' | 'superadmin';
export type PostVisibility = 'public' | 'friends' | 'private';

export interface UserProfile {
  uid: string;
  email: string;
  username: string;
  displayName: string;
  bio: string;
  photoURL: string;
  coverURL: string;
  role: UserRole;
  isBot: boolean;
  botId?: string;
  friendsCount: number;
  followersCount: number;
  followingCount: number;
  isVerified: boolean;
  isSuspended: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorUsername: string;
  authorPhotoURL: string;
  authorIsBot: boolean;
  content: string;
  mediaURLs: string[];
  mediaType?: 'image' | 'video' | 'none';
  visibility: PostVisibility;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  tags: string[];
  createdAt: number;
  updatedAt: number;
}

export interface AIBotConfiguration {
  botId: string;
  ownerAdminId: string;
  name: string;
  username: string;
  avatarURL: string;
  systemInstruction: string;
  personalityTraits: string[];
  creativityLevel: number;
  isActive: boolean;
  canCreatePosts: boolean;
  canComment: boolean;
  canDirectMessage: boolean;
  postFrequencyHours: number;
  lastActiveTimestamp: number;
  createdAt: number;
}
