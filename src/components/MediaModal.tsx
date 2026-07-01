import React, { useEffect, useState } from 'react';
import { X, Play, ExternalLink } from 'lucide-react';
import type { MediaItem } from '../types';
import { GallerySlideshow } from './GallerySlideshow';

interface MediaModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

export const MediaModal: React.FC<MediaModalProps> = ({ item, onClose }) => {
  const [slideshowIndex, setSlideshowIndex] = useState<number | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = item.youtubeVideoUrl ? getYoutubeId(item.youtubeVideoUrl) : null;
  const launchLink = item.links.find(l => l.launch)?.url;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-zinc-900 rounded-lg overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-zinc-900/60 rounded-full flex items-center justify-center text-white hover:bg-zinc-800 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header / Cover */}
        <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden bg-black">
          {youtubeId ? (
            <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
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
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">{item.title}</h2>
            <div className="flex items-center space-x-3">

				{launchLink && (
					<a href={launchLink} target="_blank" rel="noreferrer">
						<button className="flex items-center bg-white text-black px-6 py-2 rounded hover:bg-zinc-300 transition font-semibold">
							<Play className="w-5 h-5 mr-2 fill-black" />
							Launch
						</button>
					</a>
				)}
              {item.youtubeVideoUrl && (
                <a 
                  href={item.youtubeVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center bg-zinc-800/80 text-white px-6 py-2 rounded hover:bg-zinc-700 transition font-semibold backdrop-blur-sm"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch on YouTube
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Body Details */}
        <div className="p-8 overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-grow">
              <div className="flex items-center space-x-3 text-sm text-zinc-400 mb-4">
                <span className="text-green-500 font-semibold">98% Match</span>
                <span>2026</span>
                <span className="border border-zinc-600 px-1 text-xs">HD</span>
                <span>{item.category}</span>
              </div>
              
              <p className="text-white text-lg font-medium mb-2">{item.shortDescription}</p>
              <p className="text-zinc-300 leading-relaxed mb-6">
                {item.longDescription}
              </p>

              {/* Gallery */}
              {item.gallery && item.gallery.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Gallery</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {item.gallery.map((galleryItem, idx) => (
                      <div 
                        key={idx} 
                        className="aspect-video bg-zinc-800 rounded overflow-hidden cursor-pointer group"
                        onClick={() => setSlideshowIndex(idx)}
                      >
                        <img 
                          src={galleryItem.url} 
                          alt={galleryItem.caption || `${item.title} gallery ${idx + 1}`} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                          loading="lazy" 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar info */}
            <div className="md:w-1/3 flex-shrink-0 space-y-4">
              <div>
                <span className="text-zinc-500 text-sm">Category: </span>
                <span className="text-zinc-200 text-sm">{item.category}</span>
              </div>
              
              {item.links && item.links.length > 0 && (
                <div>
                  <span className="text-zinc-500 text-sm block mb-2">Related Links:</span>
                  <ul className="space-y-3">
                    {item.links.map((link, idx) => (
                      <li key={idx}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group flex flex-col p-3 rounded bg-zinc-800/50 hover:bg-zinc-800 transition"
                        >
                          <div className="flex items-center justify-between text-white text-sm font-medium">
                            {link.caption}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          {link.description && (
                            <span className="text-xs text-zinc-400 mt-1">{link.description}</span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {slideshowIndex !== null && item.gallery && (
        <GallerySlideshow 
          images={item.gallery}
          initialIndex={slideshowIndex}
          onClose={() => setSlideshowIndex(null)}
        />
      )}
    </div>
  );
};
