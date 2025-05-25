import ShareIcon from "@/app/assets/icons/shareIcon";
import { podcastsData1 } from "@/app/constant/constant";
import Image from "next/image";
import React from "react";

const Podcasts = () => {
  return (
    <div className="flex w-full overflow-x-scroll gap-6">
      {podcastsData1?.map((item, index) => (
        <div
          className="min-w-[300px] max-w-[300px] h-full relative"
          key={index}
        >
          <Image
            src={item?.image}
            className="w-[300px] h-[200px] object-cover"
            alt="news"
            width={100}
            height={100}
          />
          <Image
            src="/assets/hookSymbol.png"
            alt="hook"
            width={100}
            height={100}
            className="absolute top-3 left-4 w-8 h-8"
          />
          <div className="cursor-pointer absolute top-3 right-3">
            <ShareIcon />
          </div>
          <div>
            <p className="line-clamp-4 bg-[#3FFFAF] p-2 w-full font-bold text-xl">
              {item?.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Podcasts;
