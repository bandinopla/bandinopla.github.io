import React, { useEffect, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*+<>_';

const GlitchLetter: React.FC<{ char: string }> = ({ char }) => {
  const [displayChar, setDisplayChar] = useState(char);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    if (char === ' ' || char === '\n') return;

    let timeoutId: NodeJS.Timeout;

    const glitch = () => {
      setIsGlitching(true);
      setDisplayChar(GLYPHS[Math.floor(Math.random() * GLYPHS.length)]);

      setTimeout(() => {
        setIsGlitching(false);
        setDisplayChar(char);
        scheduleNextGlitch();
      }, 50 + Math.random() * 80); // very short glitch
    };

    const scheduleNextGlitch = () => {
      timeoutId = setTimeout(glitch, Math.random() * 10000 + 1000); // 1 to 11s intervals
    };

    scheduleNextGlitch();

    return () => clearTimeout(timeoutId);
  }, [char]);

  return <span className={isGlitching ? "text-stone-300 transform scale-110 inline-block" : ""}>{displayChar}</span>;
}

export default function GlitchText({ text }: { text: string }) {
  return (
    <>
      {text.split('').map((char, index) => (
        <GlitchLetter key={index} char={char} />
      ))}
    </>
  );
}
