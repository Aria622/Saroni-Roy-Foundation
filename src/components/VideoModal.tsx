import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl, title }) => {
  if (!isOpen) return null;

  // Convert Google Drive link to embed format
  const convertToEmbedUrl = (url: string): string => {
    // Extract file ID from Google Drive URL
    // Format: https://drive.google.com/file/d/{FILE_ID}/view?usp=drive_link
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const embedUrl = convertToEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-black rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {title && (
            <h2 className="text-xl font-bold text-white">{title}</h2>
          )}
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors ml-auto"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={title || 'Video player'}
          />
        </div>
      </div>
    </div>
  );
};

