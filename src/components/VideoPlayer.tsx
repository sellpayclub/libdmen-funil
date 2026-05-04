import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  playerId: string;
  smartPlayerId: string;
  scriptSrc: string;
  aspectRatioPadding?: string;
  className?: string;
}

export function VideoPlayer({ 
  playerId, 
  smartPlayerId, 
  scriptSrc, 
  aspectRatioPadding = "100%", 
  className = "" 
}: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only add script if it doesn't exist
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.head.appendChild(script);
    }
  }, [scriptSrc]);

  return (
    <div id={`ifr_${playerId}_wrapper`} className={`mx-auto w-full max-w-4xl ${className}`}>
      <div 
        style={{ position: 'relative', padding: `${aspectRatioPadding} 0 0 0` }} 
        id={`ifr_${playerId}_aspect`}
        ref={containerRef}
      >
        <iframe 
          frameBorder="0" 
          allowFullScreen 
          src={`https://scripts.converteai.net/${smartPlayerId}/players/${playerId}/v4/embed.html?vl=${encodeURIComponent(window.location.href)}`} 
          id={`ifr_${playerId}`} 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
          referrerPolicy="origin"
        />
      </div>
    </div>
  );
}
