import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import { 
  Search, 
  Sun, 
  Moon, 
  Bell, 
  MessageCircle, 
  Bot, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  onOpenAdmin: () => void;
  onOpenBots: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmin, onOpenBots }) => {
  const { theme, toggleTheme } = useTheme();
  const { currentUser } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-dark-card/90 backdrop-blur-md border-b border-gray-200 dark:border-dark-border px-4 py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Search */}
        <div className="flex items-center gap-3 flex-1 max-w-xs md:max-w-md">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary-500/20">
              M
            </div>
            <span className="hidden sm:inline font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              My<span className="text-primary-600">Social</span>
            </span>
          </div>

          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search posts, friends, bots..." 
              className="w-full pl-9 pr-4 py-2 bg-gray-100 dark:bg-dark-bg text-sm rounded-full border-none focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
        </div>

        {/* Center / Action Badges */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {currentUser?.role === 'superadmin' && (
            <button 
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold rounded-full hover:bg-amber-500/20 transition-all border border-amber-500/20"
              title="Admin Dashboard"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="hidden md:inline">Admin Panel</span>
            </button>
          )}

          <button 
            onClick={onOpenBots}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-semibold rounded-full hover:bg-purple-500/20 transition-all border border-purple-500/20"
            title="AI Bot Ecosystem"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden md:inline">AI Bots</span>
          </button>
        </div>

        {/* Right Tools & User Profile */}
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-bg text-gray-600 dark:text-dark-muted transition-colors"
            title={theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>

          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-bg text-gray-600 dark:text-dark-muted transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-600 rounded-full ring-2 ring-white dark:ring-dark-card"></span>
          </button>

          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-bg text-gray-600 dark:text-dark-muted transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-dark-card"></span>
          </button>

          <div className="flex items-center gap-2 pl-1 border-l border-gray-200 dark:border-dark-border">
            <img 
              src={currentUser?.photoURL} 
              alt={currentUser?.displayName} 
              className="w-8 h-8 rounded-full object-cover ring-2 ring-primary-500/30 cursor-pointer"
            />
          </div>
        </div>

      </div>
    </header>
  );
};
