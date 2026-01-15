
import React, { useMemo } from 'react';

interface DotProps {
  count?: number;
  theme: 'dark' | 'light';
}

export const BackgroundDots: React.FC<DotProps> = ({ count = 250, theme }) => {
  const dots = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`, 
      opacity: Math.random() * 0.4 + 0.1, 
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 4 + 3}s`,
    }));
  }, [count]);

  const dotColor = theme === 'dark' ? 'bg-indigo-50' : 'bg-indigo-400';
  const shadowColor = theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(99,102,241,0.2)';

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { 
              opacity: 0.1; 
              transform: scale(1);
            }
            50% { 
              opacity: 0.7; 
              transform: scale(1.3);
            }
          }
          @keyframes backgroundDrift {
            from { transform: translateY(0); }
            to { transform: translateY(-50%); }
          }
          .shiny-dot {
            animation: twinkle var(--duration) ease-in-out infinite;
            animation-delay: var(--delay);
            will-change: transform, opacity;
          }
          .dots-container {
            animation: backgroundDrift 60s linear infinite;
            height: 200%; /* Double height for seamless loop */
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        `}
      </style>
      <div className="dots-container">
        {/* First Set */}
        <div className="relative w-full h-1/2">
          {dots.map((dot) => (
            <div
              key={`set1-${dot.id}`}
              className={`shiny-dot absolute rounded-full ${dotColor}`}
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                boxShadow: `0 0 8px ${shadowColor}`,
                opacity: theme === 'dark' ? dot.opacity : dot.opacity * 0.4,
                '--delay': dot.delay,
                '--duration': dot.duration,
              } as React.CSSProperties}
            />
          ))}
        </div>
        {/* Second Set (for loop) */}
        <div className="relative w-full h-1/2">
          {dots.map((dot) => (
            <div
              key={`set2-${dot.id}`}
              className={`shiny-dot absolute rounded-full ${dotColor}`}
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                boxShadow: `0 0 8px ${shadowColor}`,
                opacity: theme === 'dark' ? dot.opacity : dot.opacity * 0.4,
                '--delay': dot.delay,
                '--duration': dot.duration,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
