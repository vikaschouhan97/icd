import LiveIcon from "@/app/assets/icons/liveIcon";
import PlayIcon from "@/app/assets/icons/playIcon";
import ShareIcon from "@/app/assets/icons/shareIcon";
import Image from "next/image";

interface AlsoView {
  image: string;
  title: string;
  isGenre: boolean;
  description: string;
}
export interface SlideProps {
  image: string;
  video: string;
  type: string;
  section: string;
  headline: string;
  alsoView?: AlsoView[];
  starRatings?: string;
  isLive?: boolean;
  isPlayable?: boolean;
}
const FirstSection: React.FC<{ slide: SlideProps }> = ({ slide }) => {
  const getRecommendationQuote = (star: string) => {
    switch (star.length) {
      case 1:
        return "Disappointing";
      case 2:
        return "Below Average";
      case 3:
        return "Average";
      case 4:
        return "Impressive";
      case 5:
        return "Highly Recommended";
    }
    return "";
  };
  return (
    <div className="bg-white rounded-md overflow-hidden pb-8 px-6">
      <div className="relative h-92 w-full">
        <Image src={slide.image} alt="news" fill className="object-cover" />
        <Image
          src="/assets/hookSymbol.png"
          alt="hook"
          width={100}
          height={100}
          className="absolute top-3 left-4 w-8 h-8"
        />
        <div className="absolute top-3 right-4">
          <ShareIcon />
        </div>
        {slide?.starRatings ? (
          <div className="absolute bottom-0 w-full bg-black px-2 py-1 flex justify-between">
            <p>{slide?.starRatings}</p>
            <p className="text-white">
              {getRecommendationQuote(slide?.starRatings)}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="p-3">
        <div className="text-xs text-gray-500 font-semibold uppercase flex gap-2 items-center">
          {slide?.isPlayable && <PlayIcon />}
          {slide?.isLive && <LiveIcon />}
          {slide.section}
        </div>
        <div className="text-lg font-bold leading-tight mt-1 line-clamp-2">
          {slide.headline}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
