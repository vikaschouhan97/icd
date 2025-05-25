import Image from "next/image";
import React from "react";
import { SlideProps } from "./firstSection";
import PlayIcon from "@/app/assets/icons/playIcon";
import GenreIcon from "@/app/assets/icons/genreIcon";

const LastSection: React.FC<{ slide: SlideProps }> = ({ slide }) => {
  return (
    <div className="relative h-full mx-6 overflow-hidden">
      {/* Image */}
      <Image src={slide.image} alt="news" fill className="object-cover" />

      {/* Semi-transparent dark overlay (for text readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient from middle to black at bottom (optional) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0.9)_75%,_black_100%)]" />

      <div className="absolute inset-0 flex items-center justify-start z-10 p-4">
        <div className="text-white text-left">
          <h2 className="text-xl font-bold">ALSO VIEW</h2>
          {slide.alsoView?.map((item, index) => (
            <div className="flex mt-6 items-center" key={index}>
              <Image
                src={item?.image}
                alt="hook"
                className="w-60 h-16 object-cover"
                width={100}
                height={100}
              />
              <div className="w-[2px] h-8 bg-white mx-4" />
              <div>
                <p className="font-bold text-lg flex gap-2 items-center">
                  {item?.isGenre && <GenreIcon />}
                  {item?.title}
                </p>
                <p className="font-bold text-md leading-tight line-clamp-2">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 left-0 p-3 z-10 px-4">
        <div className="text-xs text-white font-semibold uppercase flex gap-2 items-center">
          <PlayIcon />
          {slide.section}
        </div>
        <div className="text-lg font-bold leading-tight mt-1 line-clamp-3 text-white">
          {slide.headline}
        </div>
      </div>
    </div>
  );
};

export default LastSection;
