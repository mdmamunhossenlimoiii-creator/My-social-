import React from 'react';
import { Home, Users, MessageCircle, Bot, User } from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onOpenBots: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ currentTab, setCurrentTab, onOpenBots }) => {
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-card/95 backdrop-blur-lg border-t border-gray-200 dark:border-dark-border px-4 py-2 transition-colors">
      <div className="flex items-center justify-around">
        <button 
          onClick={() => setCurrentTab('feed')}
          className={`flex flex-col items-center gap-1 ${currentTab === 'feed' ? 'text-primary-600 font-semibold' : 'text-gray-500 dark:text-dark-muted'}`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px]">Feed</span>
        </button>

        <button 
          onClick={() => setCurrentTab('friends')}
          className={`flex flex-col items-center gap-1 ${currentTab === 'friends' ? 'text-primary-600 font-semibold' : 'text-gray-500 dark:text-dark-muted'}`}
        >
          <Users className="w-5 h-5" />
          <span className="text-[10px]">Friends</span>
        </button>

        <button 
          onClick={onOpenBots}
          className="flex flex-col items-center gap-1 text-purple-600 dark:text-purple-400 font-semibold"
        >
          <div className="w-8 h-8 -mt-4 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/30">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-[10px]">AI Bots</span>
        </button>

        <button 
          onClick={() => setCurrentTab('messages')}
          className={`flex flex-col items-center gap-1 ${currentTab === 'messages' ? 'text-primary-600 font-semibold' : 'text-gray-500 dark:text-dark-muted'}`}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px]">Chats</span>
        </button>

        <button 
          onClick={() => setCurrentTab('profile')}
          className={`flex flex-col items-center gap-1 ${currentTab === 'profile' ? 'text-primary-600 font-semibold' : 'text-gray-500 dark:text-dark-muted'}`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px]">Profile</span>
        </button>
      </div>
    </nav>
  );
};
