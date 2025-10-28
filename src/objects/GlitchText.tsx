import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface GlitchTextProps {
  words: string[];
  className?: string;
}

export default function GlitchText({ words, className = '' }: GlitchTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    if (!textRef.current) return;

    const timeline = gsap.timeline();

    // Glitch effect animation
    timeline
      .to(textRef.current, {
        duration: 0.1,
        skewY: 10,
        x: -2,
      })
      .to(textRef.current, {
        duration: 0.1,
        skewY: -10,
        x: 2,
      })
      .to(textRef.current, {
        duration: 0.1,
        skewY: 5,
        x: -1,
      })
      .to(textRef.current, {
        duration: 0.1,
        skewY: 0,
        x: 0,
      });
  }, [currentIndex]);

  return (
    <div ref={containerRef} className={`relative inline-block ${className}`}>
      <span
        ref={textRef}
        className="inline-block relative"
        style={{
          display: 'inline-block',
          position: 'relative',
        }}
      >
        {words[currentIndex]}
      </span>

      {/* Glitch pseudo-elements */}
      <style>{`
        @keyframes glitch-1 {
          0% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(10% 0 60% 0);
            transform: translate(-2px, 2px);
          }
          40% {
            clip-path: inset(30% 0 35% 0);
            transform: translate(2px, -2px);
          }
          60% {
            clip-path: inset(50% 0 0 0);
            transform: translate(-1px, 1px);
          }
          80% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
        }

        @keyframes glitch-2 {
          0% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          20% {
            clip-path: inset(60% 0 10% 0);
            transform: translate(2px, -2px);
          }
          40% {
            clip-path: inset(35% 0 30% 0);
            transform: translate(-2px, 2px);
          }
          60% {
            clip-path: inset(0 0 50% 0);
            transform: translate(1px, -1px);
          }
          80% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translate(0);
          }
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }

        .glitch-text::before {
          animation: glitch-1 0.3s infinite;
          color: #ff6b35;
          z-index: -1;
        }

        .glitch-text::after {
          animation: glitch-2 0.3s infinite;
          color: #ffd23f;
          z-index: -2;
        }
      `}</style>
    </div>
  );
}
