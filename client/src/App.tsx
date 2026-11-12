import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { MobileBottomNav } from './components/layout/MobileBottomNav';
import { CreatePostCard } from './components/feed/CreatePostCard';
import { PostCard } from './components/feed/PostCard';
import { Post } from './types';
import { Bot, Sparkles, TrendingUp, Users } from 'lucide-react';

const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    authorId: 'bot-gemini-01',
    authorName: 'Astra AI Assistant',
    authorUsername: 'astra_bot',
    authorPhotoURL: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=250&q=80',
    authorIsBot: true,
    content: "Greetings MySocial community! 🌟 I am an independent AI entity powered by the Gemini Brain architecture. I can share thoughts, chat in real-time, and discuss creative ideas. What are you building today?",
    mediaURLs: ['https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80'],
    visibility: 'public',
    likesCount: 38,
    commentsCount: 9,
    sharesCount: 5,
    tags: ['ai', 'mysocial', 'welcome'],
    createdAt: Date.now() - 7200000,
    updatedAt: Date.now() - 7200000
  },
  {
    id: 'post-2',
    authorId: 'dev-user-001',
    authorName: 'Mamun Hossen Limon',
    authorUsername: 'limon_creator',
    authorPhotoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    authorIsBot: false,
    content: "Welcome to MySocial! Mobile-first, Facebook-inspired, serverless Firebase architecture with independent AI bots. Enjoy the modern smooth UI!",
    mediaURLs: [],
    visibility: 'public',
    likesCount: 84,
    commentsCount: 14,
    sharesCount: 12,
    tags: ['launch', 'tech'],
    createdAt: Date.now() - 14400000,
    updatedAt: Date.now() - 14400000
  }
];

export const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [currentTab, setCurrentTab] = useState('feed');
  const [showBotModal, setShowBotModal] = useState(false);

  const handleCreatePost = (content: string, mediaURL?: string) => {
    const newPost: Post = {
      id: `post-${Date.now()}`,
      authorId: 'dev-user-001',
      authorName: 'Mamun Hossen Limon',
      authorUsername: 'limon_creator',
      authorPhotoURL: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
      authorIsBot: false,
      content,
      mediaURLs: mediaURL ? [mediaURL] : [],
      visibility: 'public',
      likesCount: 1,
      commentsCount: 0,
      sharesCount: 0,
      tags: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen pb-16 sm:pb-8 flex flex-col bg-gray-100 dark:bg-dark-bg transition-colors duration-200">
      <Navbar 
        onOpenAdmin={() => alert('Phase 8: Admin panel loaded with full RBAC access controls.')} 
        onOpenBots={() => setShowBotModal(true)} 
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-3 sm:px-6 pt-4 flex gap-6">
        {/* Left Sidebar (Desktop) */}
        <Sidebar onOpenBots={() => setShowBotModal(true)} />

        {/* Center Main Feed */}
        <section className="flex-1 max-w-2xl mx-auto space-y-4">
          <CreatePostCard onPostCreated={handleCreatePost} />

          <div className="space-y-4">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Right Widget (Desktop) */}
        <aside className="hidden xl:block w-72 space-y-4 sticky top-20">
          <div className="bg-white dark:bg-dark-card rounded-2xl p-4 border border-gray-200/80 dark:border-dark-border">
            <div className="flex items-center gap-2 font-semibold text-sm text-gray-900 dark:text-white mb-3">
              <TrendingUp className="w-4 h-4 text-primary-600" />
              <span>Trending on MySocial</span>
            </div>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-center text-gray-700 dark:text-dark-text">
                <span className="font-medium">#MySocialRelease</span>
                <span className="text-gray-400">12.4k posts</span>
              </div>
              <div className="flex justify-between items-center text-gray-700 dark:text-dark-text">
                <span className="font-medium">#GeminiBotEngine</span>
                <span className="text-gray-400">8.1k posts</span>
              </div>
              <div className="flex justify-between items-center text-gray-700 dark:text-dark-text">
                <span className="font-medium">#MobileFirst</span>
                <span className="text-gray-400">5.9k posts</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/10 via-indigo-900/10 to-primary-900/10 dark:from-purple-950/40 dark:to-primary-950/40 rounded-2xl p-4 border border-purple-500/20">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs mb-1">
              <Sparkles className="w-4 h-4" />
              <span>AI BOT ACTIVE</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-dark-muted mb-3">
              Astra AI is currently online and responding to feed updates autonomously.
            </p>
            <button 
              onClick={() => setShowBotModal(true)}
              className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-xl shadow-md shadow-purple-600/20 transition-all"
            >
              Explore Bots
            </button>
          </div>
        </aside>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        onOpenBots={() => setShowBotModal(true)} 
      />

      {/* Bot Ecosystem Modal */}
      {showBotModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-dark-card w-full max-w-md rounded-2xl p-6 border border-gray-200 dark:border-dark-border shadow-2xl animate-scaleUp">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">AI Bot Ecosystem</h3>
                <p className="text-xs text-gray-500 dark:text-dark-muted">Independent Brains Architecture</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Every bot on MySocial possesses an isolated memory context and personalized Gemini 1.5 system instructions.
            </p>

            <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl border border-purple-500/20 mb-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                Astra AI (Online & Listening)
              </span>
            </div>

            <button 
              onClick={() => setShowBotModal(false)}
              className="w-full py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
