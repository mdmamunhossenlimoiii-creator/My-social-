import React, { useState } from 'react';
import { Post } from '../../types';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreHorizontal, 
  Bot, 
  CheckCircle2,
  Send
} from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 'c-1',
      author: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      text: 'Loving the clean design! So fast and responsive. 👏',
      time: '10m ago'
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const toggleLike = () => {
    if (isLiked) {
      setLikesCount(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount(prev => prev + 1);
      setIsLiked(true);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments(prev => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        author: 'Mamun Hossen Limon',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
        text: newComment,
        time: 'Just now'
      }
    ]);
    setNewComment('');
  };

  return (
    <article className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200/80 dark:border-dark-border shadow-sm overflow-hidden transition-colors">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={post.authorPhotoURL} 
            alt={post.authorName} 
            className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-500/20"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                {post.authorName}
              </h3>
              {post.authorIsBot ? (
                <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 text-[10px] font-bold border border-purple-500/20">
                  <Bot className="w-3 h-3" />
                  AI Bot
                </span>
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-primary-600 fill-primary-600 text-white" />
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-dark-muted">
              @{post.authorUsername} · 2h ago
            </p>
          </div>
        </div>

        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-dark-text p-1.5 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line leading-relaxed">
          {post.content}
        </p>
      </div>

      {/* Media Attachment */}
      {post.mediaURLs && post.mediaURLs.length > 0 && (
        <div className="w-full max-h-96 overflow-hidden bg-gray-100 dark:bg-dark-bg">
          <img 
            src={post.mediaURLs[0]} 
            alt="Post Attachment" 
            className="w-full h-auto object-cover max-h-96"
            loading="lazy"
          />
        </div>
      )}

      {/* Metrics Counter */}
      <div className="px-4 py-2 border-b border-gray-100 dark:border-dark-border flex items-center justify-between text-xs text-gray-500 dark:text-dark-muted">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center text-white">
            <Heart className="w-2.5 h-2.5 fill-current" />
          </div>
          <span>{likesCount} likes</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{comments.length} comments</span>
          <span>{post.sharesCount} shares</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-2 py-1 flex items-center justify-around border-b border-gray-100 dark:border-dark-border text-sm">
        <button 
          onClick={toggleLike}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl font-medium transition-colors ${isLiked ? 'text-rose-600 font-semibold' : 'text-gray-600 dark:text-dark-muted hover:bg-gray-100 dark:hover:bg-dark-bg'}`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-rose-600' : ''}`} />
          <span>Like</span>
        </button>

        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-gray-600 dark:text-dark-muted font-medium hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Comment</span>
        </button>

        <button className="flex items-center gap-2 px-3 py-2 rounded-xl text-gray-600 dark:text-dark-muted font-medium hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="p-4 bg-gray-50/50 dark:bg-dark-bg/50 space-y-3">
          <form onSubmit={handleAddComment} className="flex gap-2">
            <input 
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..." 
              className="flex-1 text-xs px-3 py-2 rounded-xl bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
            <button 
              type="submit" 
              className="p-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          <div className="space-y-2.5 pt-1">
            {comments.map((c) => (
              <div key={c.id} className="flex gap-2.5 text-xs">
                <img src={c.avatar} alt={c.author} className="w-7 h-7 rounded-full object-cover mt-0.5" />
                <div className="flex-1 bg-white dark:bg-dark-card p-2.5 rounded-xl border border-gray-200/60 dark:border-dark-border">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 dark:text-white">{c.author}</span>
                    <span className="text-[10px] text-gray-400">{c.time}</span>
                  </div>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};
