import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { VideoCard } from '../components/VideoCard';
import { VideoContent } from '../types/video';

const MOCK_VIDEOS: VideoContent[] = [
  {
    id: '1',
    title: 'Maheene Ko Sehat Se Jodo: Can Tata Trusts Reframe Periods?',
    description: 'Menstruation, even today, remains clouded by stigma and silence. Journalist Anuradha SenGupta speaks with Tata Trusts\' Divyang Waghela and Deepshikha Surendran about the insights behind the social behaviour change campaign aimed at reframing conversations.',
    thumbnailUrl: 'https://picsum.photos/id/1025/600/400',
    videoDuration: '4:21'
  },
  {
    id: '2',
    title: 'Soch badalne ka maheena aa gaya',
    description: 'For generations, the arrival of menstruation has been met with silence, shame, or worry. But what if we saw it for what it truly is—a natural symbol of good health? The film "Soch badalne ka maheena aa gaya" attempts to bring this shift in perspective.',
    thumbnailUrl: 'https://picsum.photos/id/1012/600/400',
    videoDuration: '3:45'
  },
  {
    id: '3',
    title: 'Breaking the Silence: Rural Perspectives',
    description: 'Travel into the heart of rural India where community leaders are challenging age-old myths. This documentary style short captures the raw emotion and the gradual acceptance of new health norms within traditional family structures.',
    thumbnailUrl: 'https://picsum.photos/id/1027/600/400',
    videoDuration: '5:10'
  },
  {
    id: '4',
    title: 'Health is Empowerment',
    description: 'When women prioritize their health, the entire community thrives. Watch inspiring stories of young girls who have become health advocates in their villages, driving change one conversation at a time.',
    thumbnailUrl: 'https://picsum.photos/id/342/600/400',
    videoDuration: '2:55'
  }
];

export const VideoPage: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(MOCK_VIDEOS.length / itemsPerPage);
  const currentPage = Math.floor(startIndex / itemsPerPage);

  const nextSlide = () => {
    if (startIndex + itemsPerPage < MOCK_VIDEOS.length) {
      setStartIndex(prev => prev + 1);
    } else {
      // Loop back to start for infinite feel or stop? The image suggests a linear flow. 
      // Let's stop at the end to match standard carousel behavior unless it's infinite.
      // But for better UX, let's loop if at the very end.
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(prev => prev - 1);
    } else {
      setStartIndex(MOCK_VIDEOS.length - itemsPerPage);
    }
  };

  const goToPage = (pageIndex: number) => {
    setStartIndex(pageIndex * itemsPerPage);
  };

  const visibleVideos = MOCK_VIDEOS.slice(startIndex, startIndex + itemsPerPage);

  // Fix: If we are at the end and resize from mobile (1 item) to desktop (2 items), 
  // we might show fewer items than intended.
  // This simple slice logic works for linear scrolling.

  return (
    <div className="min-h-screen bg-[#fcfbf7] py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      
      {/* Header */}
      <div className="mb-12 text-center transform hover:scale-105 transition-transform duration-500 cursor-default">
        <h1 className="text-5xl md:text-6xl font-script text-brand-red mb-2 drop-shadow-sm">
          #Maheene Ko Sehat Se Jodo
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="max-w-6xl w-full relative">
        
        {/* Main Content Area */}
        <div className="flex items-center justify-center gap-4">
          
          {/* Previous Button (Hide on mobile if space is tight, usually consistent UI is better) */}
          <button 
            onClick={prevSlide}
            className={`p-2 rounded-full hover:bg-gray-100 text-brand-red transition-opacity duration-300 ${startIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
            disabled={startIndex === 0}
            aria-label="Previous video"
          >
            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          {/* Cards Grid/Flex */}
          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 min-h-[500px]">
              {visibleVideos.map((video) => (
                <div key={video.id} className="animate-fadeIn">
                  <VideoCard 
                    video={video} 
                    onClick={() => console.log(`Play video ${video.id}`)} 
                  />
                </div>
              ))}
              
              {/* 
                Edge case handling: If logic results in 1 item on a 2-col grid 
                (e.g. if we scrolled to the very last odd item).
                The grid handles this naturally by leaving space empty.
              */}
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className={`p-2 rounded-full hover:bg-gray-100 text-brand-red transition-opacity duration-300 ${startIndex >= MOCK_VIDEOS.length - itemsPerPage ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
            disabled={startIndex >= MOCK_VIDEOS.length - itemsPerPage}
            aria-label="Next video"
          >
            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center gap-3 mt-8">
          {/* 
            The image shows dots corresponding to pages or items? 
            Usually 4 dots for 4 items, or dots for pages. 
            Let's show dots for every possible starting position to act as a progress indicator.
            Or simpler: Total items / Items per page = Pages.
          */}
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`transition-all duration-300 rounded-full ${
                currentPage === idx 
                  ? 'bg-brand-red w-8 h-2' 
                  : 'bg-gray-300 w-2 h-2 hover:bg-brand-red/50'
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};