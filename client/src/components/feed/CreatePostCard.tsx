import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Image, Video, Sparkles, Smile, Send } from 'lucide-react';

interface CreatePostCardProps {
  onPostCreated: (content: string, mediaURL?: string) => void;
}

export const CreatePostCard: React.FC<CreatePostCardProps> = ({ onPostCreated }) => {
  const { currentUser } = useAuth();
  const [content, setContent] = useState('');
  const [mediaURL, setMediaURL] = useState('');
  const [showMediaInput, setShowMediaInput] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !mediaURL.trim()) return;
    onPostCreated(content, mediaURL || undefined);
    setContent('');
    setMediaURL('');
    setShowMediaInput(false);
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-4 border border-gray-200/80 dark:border-dark-border shadow-sm transition-colors">
      <div className="flex gap-3">
        <img 
          src={currentUser?.photoURL} 
          alt={currentUser?.displayName} 
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-500/20"
        />
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={`What's on your mind, ${currentUser?.displayName?.split(' ')[0]}?`}
              rows={2}
              className="w-full resize-none bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all border border-gray-200/60 dark:border-dark-border placeholder-gray-400"
            />

            {showMediaInput && (
              <div className="mt-2 animate-fadeIn">
                <input 
                  type="url"
                  value={mediaURL}
                  onChange={(e) => setMediaURL(e.target.value)}
                  placeholder="Paste Image URL (e.g., https://...)" 
                  className="w-full text-xs px-3 py-2 bg-gray-100 dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
            )}

            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowMediaInput(!showMediaInput)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
                >
                  <Image className="w-4 h-4" />
                  <span className="hidden sm:inline">Photo</span>
                </button>

                <button 
                  type="button"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                >
                  <Video className="w-4 h-4" />
                  <span className="hidden sm:inline">Video</span>
                </button>

                <button 
                  type="button"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">AI Assist</span>
                </button>
              </div>

              <button 
                type="submit"
                disabled={!content.trim() && !mediaURL.trim()}
                className="flex items-center gap-1.5 px-4 py-1.5 bg-primary-600 hover:bg-primary-700 disabled:opacity-40 disabled:hover:bg-primary-600 text-white rounded-xl text-xs font-semibold shadow-sm shadow-primary-500/30 transition-all cursor-pointer"
              >
                <span>Post</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
