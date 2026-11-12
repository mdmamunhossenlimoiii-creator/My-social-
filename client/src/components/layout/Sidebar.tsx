import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Home, Users, MessageSquare, Bot, Bookmark, Settings, HelpCircle, CheckCircle2 } from 'lucide-react';

export const Sidebar: React.FC<{ onOpenBots: () => void }> = ({ onOpenBots }) => {
  const { currentUser } = useAuth();

  return (
    <aside className="hidden lg:block w-64 sticky top-20 space-y-4">
      {/* Profile quick widget */}
      <div className="flex items-center gap-3 p-3 bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border transition-colors">
        <img 
          src={currentUser?.photoURL} 
          alt={currentUser?.displayName} 
          className="w-11 h-11 rounded-full object-cover ring-2 ring-primary-500/20"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <h4 className="font-semibold text-sm truncate text-gray-900 dark:text-white">
              {currentUser?.displayName}
            </h4>
            {currentUser?.isVerified && <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 fill-primary-600 text-white flex-shrink-0" />}
          </div>
          <p className="text-xs text-gray-500 dark:text-dark-muted truncate">@{currentUser?.username}</p>
        </div>
      </div>

      {/* Navigation shortcuts */}
      <div className="bg-white dark:bg-dark-card rounded-2xl p-2 border border-gray-200/80 dark:border-dark-border space-y-1">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-primary-600 bg-primary-50 dark:bg-primary-950/40 dark:text-primary-400">
          <Home className="w-5 h-5" />
          <span>Home Feed</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors">
          <Users className="w-5 h-5 text-blue-500" />
          <span>Friends & Network</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors">
          <MessageSquare className="w-5 h-5 text-emerald-500" />
          <span>Messages</span>
        </button>

        <button 
          onClick={onOpenBots}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors"
        >
          <Bot className="w-5 h-5 text-purple-500" />
          <div className="flex items-center justify-between flex-1">
            <span>AI Bot Network</span>
            <span className="text-[10px] bg-purple-500/10 text-purple-600 dark:text-purple-400 px-2 py-0.5 rounded-full font-bold">NEW</span>
          </div>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors">
          <Bookmark className="w-5 h-5 text-amber-500" />
          <span>Saved Posts</span>
        </button>

        <hr className="my-2 border-gray-200 dark:border-dark-border" />

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors">
          <Settings className="w-5 h-5 text-gray-500" />
          <span>Settings & Privacy</span>
        </button>

        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 dark:text-dark-text hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-500" />
          <span>Help & Support</span>
        </button>
      </div>
    </aside>
  );
};
