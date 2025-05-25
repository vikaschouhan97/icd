"use client";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

interface SmartVideoProps {
  src: string | null;
  poster: string; // Thumbnail image path
  title: string;
}

const SmartVideo: React.FC<SmartVideoProps> = ({ src, poster, title }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const tryToPlay = () => {
      video.play().catch((err) => {
        console.warn('Autoplay prevented:', err);
        // If autoplay is blocked, you can show a play button fallback here.
      });
    };

    const onCanPlay = () => {
      setIsLoaded(true);
      tryToPlay();
    };

    video.addEventListener('canplaythrough', onCanPlay);
    video.load(); // Ensure video reloads if remounted

    return () => {
      video.removeEventListener('canplaythrough', onCanPlay);
    };
  }, [src]);

  return (  
    <div className="relative w-full pb-12 bg-black min-w-[220px] max-w-[220px] shadow-md overflow-hidden">
      {!isLoaded && (
        <Image
          src={poster}
          alt="today-reel-image"
          width={100}
          height={100}
          className="w-full h-96 object-cover"
        />
      )}
      <Image src="/assets/hookSymbol.png" alt="hook" width={100} height={100} className="absolute top-2 left-2 w-8 h-8" />
      <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <video
        ref={videoRef}
        src={src || ""}
        className="max-h-[400px] w-full object-cover"
        style={{
          display: isLoaded ? "block" : "none",
        }}
        preload="auto"
        muted
        loop={true}
        controls={false}
        playsInline
        autoPlay
      />
    </div>
  );
};

export default SmartVideo;
