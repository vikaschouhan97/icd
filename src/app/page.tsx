import Header from "@/app/components/Header";
import {
  carouselSlides1,
  carouselSlides10,
  carouselSlides11,
  carouselSlides12,
  carouselSlides13,
  carouselSlides14,
  carouselSlides15,
  carouselSlides2,
  carouselSlides3,
  carouselSlides4,
  carouselSlides5,
  carouselSlides6,
  carouselSlides7,
  carouselSlides8,
  carouselSlides9,
  sportsNews,
  todaysNews,
} from "./constant/constant";
import SmartVideo from "./components/smartVideoPreview";
import NewsCarousel from "./components/Carousel/swiperCarousel";
import NumberMatters from "./components/NumberMatter";
import Podcasts from "./components/Podcasts";
import CategoryCards from "./components/CategoryCard/CategoryCards";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-2">
        <h1 className="text-2xl ml-6 font-bold mb-6">
          Today`s <span className="font-light">Newsreel</span>
        </h1>
        <div className="flex w-full overflow-hidden overflow-x-scroll gap-6">
          <div className="w-6" />
          {todaysNews?.map((item, index) => (
            <SmartVideo
              key={index}
              src={item.videoSrc}
              poster={item.imageSrc}
              title={item.title}
            />
          ))}
        </div>
      </main>
      <div className="flex w-full mt-4 mb-2">
        <NewsCarousel slides={carouselSlides1} />
      </div>
      <div className="px-6 mb-16">
        <h1 className="text-[#099252] text-2xl font-bold">Numbers Matters</h1>
        <NumberMatters />
      </div>
      <div className="flex w-full mt-4 mb-2">
        <NewsCarousel slides={carouselSlides2} />
      </div>
      <div className="pl-8 mb-16 w-full">
        <h1 className="text-2xl font-bold mb-2">Trending Podcasts</h1>
        <Podcasts />
      </div>
      <div className="flex w-full mt-4 mb-2">
        <NewsCarousel slides={carouselSlides3} />
      </div>
      <div className="flex w-full mt-4 mb-2">
        <NewsCarousel slides={carouselSlides4} />
      </div>
      <div className="px-6 pr-8 mb-4">
        <h1 className="text-2xl font-bold">
          Which category are you hooked to?
        </h1>
        <CategoryCards />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides5} />
      </div>
      <div className="py-2 mb-4">
        <h1 className="text-2xl ml-6 font-bold mb-6">Sports Newsreel</h1>
        <div className="flex w-full overflow-hidden overflow-x-scroll gap-6">
          <div className="w-6" />
          {sportsNews?.map((item, index) => (
            <SmartVideo
              key={index}
              src={item.videoSrc}
              poster={item.imageSrc}
              title={item.title}
            />
          ))}
        </div>
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides6} />
      </div>
      <div className="pl-8 mb-16 w-full">
        <h1 className="text-2xl font-bold mb-2">Tech Podcasts</h1>
        <Podcasts />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides7} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides8} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides9} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides10} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides11} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides12} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides13} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides14} />
      </div>
      <div className="flex w-full mb-2">
        <NewsCarousel slides={carouselSlides15} />
      </div>
    </div>
  );
}
