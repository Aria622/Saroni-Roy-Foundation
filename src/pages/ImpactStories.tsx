import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { VideoModal } from "@/components/VideoModal";
import { VideoContent } from "@/types/video";

const extractFileId = (url: string): string | null => {
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const generateThumbnailUrl = (videoUrl: string, width: number = 600, height: number = 400): string => {
  const fileId = extractFileId(videoUrl);
  if (fileId) {
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}-h${height}`;
  }
  return "https://picsum.photos/id/1025/600/400";
};

const IMPACT_VIDEOS: VideoContent[] = [
  {
    id: "1",
    title: "Maheene Ko Sehat Se Jodo: Can Tata Trusts Reframe Periods?",
    description: "Menstruation, even today, remains clouded by stigma and silence.",
    thumbnailUrl: generateThumbnailUrl("https://drive.google.com/file/d/14S96ZD6S24bgy_0kCNJGS298rmvpmviA/view?usp=drive_link"),
    videoDuration: "4:21",
    videoUrl: "https://drive.google.com/file/d/14S96ZD6S24bgy_0kCNJGS298rmvpmviA/view?usp=drive_link",
  },
  {
    id: "2",
    title: "Soch badalne ka maheena aa gaya",
    description: "For generations, the arrival of menstruation has been met with silence, shame, or worry.",
    thumbnailUrl: generateThumbnailUrl("https://drive.google.com/file/d/1iZmSrV5ZtZuEJ6pvUe8ebiuaS8ZkGAw9/view?usp=drive_link"),
    videoDuration: "3:45",
    videoUrl: "https://drive.google.com/file/d/1iZmSrV5ZtZuEJ6pvUe8ebiuaS8ZkGAw9/view?usp=drive_link",
  },
  {
    id: "3",
    title: "Breaking the Silence: Rural Perspectives",
    description: "Travel into the heart of rural India where community leaders are challenging age-old myths.",
    thumbnailUrl: generateThumbnailUrl("https://drive.google.com/file/d/1h2TCitcJUJqbaDELL6OFzvGm1w74p5Ne/view?usp=drive_link"),
    videoDuration: "5:10",
    videoUrl: "https://drive.google.com/file/d/1h2TCitcJUJqbaDELL6OFzvGm1w74p5Ne/view?usp=drive_link",
  },
  {
    id: "4",
    title: "Health is Empowerment",
    description: "When women prioritize their health, the entire community thrives.",
    thumbnailUrl: generateThumbnailUrl("https://drive.google.com/file/d/145d9qawFMxfjh-hK84uZrHQrQvAk70Gd/view?usp=drive_link"),
    videoDuration: "2:55",
    videoUrl: "https://drive.google.com/file/d/145d9qawFMxfjh-hK84uZrHQrQvAk70Gd/view?usp=drive_link",
  },
];

const ImpactStories: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoContent | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      <main className="flex-1 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page title */}
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight text-center">
            #SuperNaari
          </h1>
          <p className="text-xl md:text-2xl text-white/80 text-center mb-12">
            Impact Stories
          </p>

          {/* Period Poverty – A Global Women, Peace & Security Crisis */}
          <article className="prose prose-invert max-w-none">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12 border-b border-white/10 pb-3">
              Period Poverty – A Global Women, Peace & Security Crisis
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              Period poverty is a global health issue affecting women and girls in both rich and poor countries. What women and girls can use to manage their menstrual health and hygiene varies widely, based on their income and whether they live in urban or rural areas. Every month, more than two billion people around the world menstruate. Menstruation is a natural and healthy process, yet millions of women, girls, and gender-diverse menstruators cannot afford basic menstrual products or access safe water and sanitation. This disrupts their health, education, employment, freedom, and dignity.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              Period poverty refers to the lack of access to:
            </p>
            <ul className="list-disc list-inside text-white/80 text-base md:text-lg space-y-2 mb-6 ml-2">
              <li>menstrual products</li>
              <li>safe sanitation and hygiene facilities</li>
              <li>waste management</li>
              <li>menstrual health education and awareness</li>
            </ul>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              It is increasingly recognised not merely as a hygiene issue, but as a health, human rights, and gender equality issue.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 mt-10">
              The Global Reality
            </h3>
            <ul className="text-white/80 text-base md:text-lg space-y-3 mb-6">
              <li>An estimated <strong className="text-white">500 million women</strong> globally lack adequate access to menstrual products and facilities.</li>
              <li><strong className="text-white">1 in 4 teens</strong> and <strong className="text-white">1 in 3 adults</strong> in the US struggle to afford menstrual products.</li>
              <li><strong className="text-white">3 in 10 girls</strong> in the UK face similar barriers.</li>
              <li>In Gaza, more than <strong className="text-white">540,000 women and girls</strong> currently lack access to basic hygiene essentials.</li>
              <li>Today, <strong className="text-white">614 million women and girls</strong> live in conflict-affected areas — and menstruation does not stop during crisis. Women&apos;s and girls&apos; menstrual health and dignity remain drastically under-prioritised in humanitarian response.</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 mt-10">
              The Australian Context
            </h3>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-4">
              According to The Guardian (2024) and Share the Dignity&apos;s national survey:
            </p>
            <ul className="text-white/80 text-base md:text-lg space-y-3 mb-8">
              <li><strong className="text-white">Three in five</strong> people with periods in Australia have struggled to afford menstrual products.</li>
              <li><strong className="text-white">One in four</strong> have worn a pad or tampon longer than recommended due to cost.</li>
              <li>Period poverty disproportionately affects Indigenous communities, women with disabilities, and gender-diverse menstruators.</li>
              <li>The impact extends to girls&apos; and women&apos;s ability to study, work, participate in sport, and live free from stigma.</li>
            </ul>
          </article>

          {/* Videos */}
          <section className="mt-16 pt-12 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              #SuperNaari Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {IMPACT_VIDEOS.map((video) => (
                <div key={video.id} className="animate-fadeIn">
                  <VideoCard
                    video={video}
                    onClick={() => {
                      if (video.videoUrl) {
                        setSelectedVideo(video);
                        setIsVideoModalOpen(true);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>

      {selectedVideo && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => {
            setIsVideoModalOpen(false);
            setSelectedVideo(null);
          }}
          videoUrl={selectedVideo.videoUrl || ""}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
};

export default ImpactStories;
