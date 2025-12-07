import React from 'react';
import { Play } from 'lucide-react';
import { VideoContent } from '../types/video';

interface VideoCardProps {
  video: VideoContent;
  onClick: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer group">
      {/* Thumbnail Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
        <img 
          src={video.thumbnailUrl} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={onClick}
            className="w-16 h-16 rounded-2xl border-2 border-white/80 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all hover:scale-110"
          >
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </button>
        </div>

        {/* Duration Badge */}
        {/* <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.videoDuration}
        </div> */}
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
          {video.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
          {video.description}
        </p>
        
        <div className="mt-auto pt-4">
          <span className="text-brand-red text-sm font-semibold group-hover:underline">
            Watch the film &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};