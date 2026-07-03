import React, { useState, useEffect } from "react";
import { Shield, X, ExternalLink, Star } from "lucide-react";
import { MOCK_DATA } from "../data";

export const AwardBadge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Find the first featured item
  const featuredItem = MOCK_DATA.find((item) => item.featured !== undefined);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  window.openAwardBadge = () => setIsOpen(true);

  if (!featuredItem || !featuredItem.featured) {
    return null;
  }

  const { featured } = featuredItem;

  return (
    <>
      {/* Floating Badge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-12 right-12 z-40 group flex items-center space-x-3 bg-zinc-900/90 border-8 border-yellow-600/50 hover:border-yellow-500 hover:bg-zinc-800 p-3 pr-5 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.85)] hover:shadow-[0_0_25px_rgba(202,138,4,0.3)] transition-all duration-300 backdrop-blur-md"
      >
        <div className="relative group-hover:scale-110 transition-transform duration-300">
          {/* Ribbon tails */}
          <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-10 h-7 flex justify-between z-0 pointer-events-none">
            <svg
              className="text-yellow-700 w-4 h-full rotate-[15deg] translate-x-0.5"
              viewBox="0 0 12 24"
              fill="currentColor"
            >
              <path d="M0 0 L12 0 L12 24 L6 19 L0 24 Z" />
            </svg>
            <svg
              className="text-yellow-700 w-4 h-full -rotate-[15deg] -translate-x-0.5"
              viewBox="0 0 12 24"
              fill="currentColor"
            >
              <path d="M0 0 L12 0 L12 24 L6 19 L0 24 Z" />
            </svg>
          </div>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 shadow-inner z-10">
            <Star className="w-5 h-5 text-zinc-950 fill-yellow-200" />
            <div className="absolute inset-0 rounded-full border border-yellow-200/50 mix-blend-overlay"></div>
          </div>
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] uppercase tracking-widest text-yellow-500/80 font-bold leading-none mb-1">
            {featured.verb}
          </span>
          <span className="text-sm font-medium text-yellow-100 whitespace-nowrap leading-none">
            {featured.what}
          </span>
        </div>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center px-4 sm:px-6">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Image side */}
              <div className="w-full md:w-3/5 bg-black relative">
                <div className="aspect-video md:aspect-auto md:h-full relative overflow-hidden">
                  <img
                    src={featured.screenshotUrl}
                    alt="Featured Showcase Screenshot"
                    className="w-full h-full object-contain object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-zinc-900"></div>
                </div>
              </div>

              {/* Content side */}
              <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
                <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{featured.when}</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {featured.verb} on <br />
                  <span className="text-yellow-500">
                    {featured.what.replace(/.* at |.* on /i, "")}
                  </span>
                </h3>

                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {featured.comments}
                </p>

                <div className="flex flex-col space-y-3">
                  <a
                    href={featured.whereUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative overflow-hidden flex items-center justify-center w-full bg-yellow-600 hover:bg-yellow-500 text-zinc-950 font-bold py-3 px-6 rounded transition-colors group/btn"
                  >
                    {/* Shiny hover effect */}
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded">
                      <div className="absolute top-0 bottom-0 -left-1/2 w-[30%] bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] -translate-x-[150%] group-hover/btn:translate-x-[400%] transition-transform duration-700 ease-in-out"></div>
                    </div>

                    <span className="relative z-10">Visit Showcase</span>
                    <ExternalLink className="w-5 h-5 ml-2 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>

                  <a
                    href={featured.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 px-6 rounded transition-colors"
                  >
                    <span>View {featuredItem.title}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
