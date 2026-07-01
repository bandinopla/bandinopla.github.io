import React from 'react';
import { Play, Info } from 'lucide-react';
import type { MediaItem } from '../types';

interface HeroProps {
  item: MediaItem | null;
  onMoreInfo: (item: MediaItem) => void;
}

export const Hero: React.FC<HeroProps> = ({ item, onMoreInfo }) => {
  if (!item) return null;

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = item.youtubeVideoUrl ? getYoutubeId(item.youtubeVideoUrl) : null;
  const launchLink = item.links.find(l => l.launch)?.url;

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] text-white overflow-hidden">
      {/* Background Image / Video */}
      <div className="absolute top-0 left-0 w-full h-full">
        {youtubeId ? (
          <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeId}&modestbranding=1&showinfo=0&vq=hd1080`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        ) : (
          <img 
            src={item.heroCoverUrl || item.thumbnailUrl} 
            alt={item.title} 
            className="w-full h-full object-cover"
          />
        )}
        {/* Gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-12 w-full max-w-[1920px] mx-auto z-10 pt-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
            {item.title}
          </h1>
          <p className="text-sm md:text-lg text-zinc-200 mb-6 drop-shadow-md line-clamp-3">
            {item.shortDescription}
          </p>
          
          <div className="flex items-center space-x-3">

			{launchLink && (
				<a href={launchLink} target="_blank" rel="noreferrer">
					<button className="flex items-center bg-white text-black px-6 py-2 md:py-3 rounded hover:bg-zinc-300 transition font-semibold text-lg">
						<Play className="w-6 h-6 mr-2 fill-black" />
						Launch
					</button>
				</a>
			)}
			 {item.youtubeVideoUrl && (
              <a 
                href={item.youtubeVideoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center bg-zinc-800/80 text-white px-6 py-2 md:py-3 rounded hover:bg-zinc-700 transition font-semibold text-lg backdrop-blur-sm"
              >
                <Play className="w-6 h-6 mr-2" />
                Watch on YouTube
              </a>
            )}
			
            <button 
              onClick={() => onMoreInfo(item)}
              className="flex items-center bg-zinc-500/70 text-white px-6 py-2 md:py-3 rounded hover:bg-zinc-500/90 transition font-semibold text-lg backdrop-blur-sm"
            >
              <Info className="w-6 h-6 mr-2" />
              More info
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};
