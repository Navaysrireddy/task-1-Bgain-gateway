
import React from 'react';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/90 backdrop-blur-md" onClick={onClose}>
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-scale-up border border-slate-700">
        <button 
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-white hover:text-navy text-white rounded-full flex items-center justify-center transition backdrop-blur-sm"
        >
          <i className="fas fa-times"></i>
        </button>
        <iframe 
          className="w-full h-full"
          src={videoUrl} 
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
