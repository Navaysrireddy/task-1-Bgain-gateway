import React from 'react';
import { ContentCard } from '../types';

interface ArticleModalProps {
  article: ContentCard;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-md" onClick={onClose}></div>

      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden relative z-10 animate-fade-in flex flex-col">
        {/* Header Image */}
        <div className="h-64 relative shrink-0">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-white hover:text-navy transition backdrop-blur-sm"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="absolute bottom-6 left-6 md:left-10 text-white">
            <span className="bg-gold text-brown text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2 inline-block">Article</span>
            <h2 className="text-3xl md:text-4xl font-black">{article.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
          <div className="prose prose-lg text-slate-600 max-w-none">
            {article.content?.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>
            ))}
            {!article.content && <p>No content available for this article.</p>}
          </div>
          
          <div className="mt-10 pt-10 border-t border-gray-100 flex justify-between items-center">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                   <div className="text-sm font-bold text-navy">Written by Collers Team</div>
                   <div className="text-xs text-slate-400">Published recently</div>
                </div>
             </div>
             <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-600 transition"><i className="fab fa-twitter"></i></button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-slate-500 hover:bg-blue-100 hover:text-blue-800 transition"><i className="fab fa-facebook-f"></i></button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleModal;