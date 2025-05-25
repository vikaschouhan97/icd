"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { numberMatters } from "@/app/constant/constant";
import LiveIcon from "@/app/assets/icons/liveIcon";
import Image from "next/image";
const NumberMatters = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1.25}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mt-4 "
    >
      {numberMatters?.map((item, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="w-auto h-60 flex flex-col items-start justify-center p-6 bg-[#e9fdf3]">
            <h2 className="text-xl font-bold flex w-full justify-between line-clamp-1">
              {item?.title} {item?.isLive && <LiveIcon />}
            </h2>
            <p>{item?.description}</p>
            <div className="mt-4 w-full grid grid-cols-6 items-center">
              <Image
                src={item?.firstTeam?.image}
                className="w-8 h-8 object-contain col-span-1"
                alt="news"
                width={100}
                height={100}
              />
              <p className="font-bold col-span-2">{item?.firstTeam?.name}</p>
              <p className="col-span-3">{item?.firstTeam?.date}</p>
            </div>
            <div className="mt-4 grid grid-cols-6 items-center w-full">
              <Image
                src={item?.secondTeam?.image}
                className="w-8 h-8 object-contain col-span-1"
                alt="news"
                width={100}
                height={100}
              />
              <p className="font-bold col-span-2 line-clamp-1">
                {item?.secondTeam?.name}
              </p>
              <p className="col-span-3">{item?.secondTeam?.date}</p>
            </div>
          </div>
          {index !== numberMatters?.length - 1 && (
            <div className="absolute right-0 top-6 w-[2px] h-[199px] border-2 border-[#17b26a]"></div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NumberMatters;
