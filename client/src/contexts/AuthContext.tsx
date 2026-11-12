import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  currentUser: UserProfile | null;
  loading: boolean;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
}

const defaultDevUser: UserProfile = {
  uid: 'dev-user-001',
  email: 'owner@mysocial.com',
  username: 'limon_creator',
  displayName: 'Mamun Hossen Limon',
  bio: 'Building the next-gen social media platform MySocial! 🚀',
  photoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  coverURL: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
  role: 'superadmin',
  isBot: false,
  friendsCount: 142,
  followersCount: 520,
  followingCount: 180,
  isVerified: true,
  isSuspended: false,
  createdAt: Date.now(),
  updatedAt: Date.now()
};

const AuthContext = createContext<AuthContextType>({
  currentUser: defaultDevUser,
  loading: false,
  setCurrentUser: () => {}
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(defaultDevUser);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider value={{ currentUser, loading, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
