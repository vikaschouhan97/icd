import Image from "next/image";
import { SlideProps } from "./firstSection";
import SoundIcon from "@/app/assets/icons/soundIcon";
import ShareIcon from "@/app/assets/icons/shareIcon";
import WhatsAppIcon from "@/app/assets/icons/whatsAppIcon";

const MidSection: React.FC<{ slide: SlideProps }> = ({ slide }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden w-full px-6 relative">
      <Image
        src={slide.video}
        alt="today-reel-image"
        width={100}
        height={100}
        className="w-full h-[500px] object-stretch"
      />
      <Image
        src="/assets/hookSymbol.png"
        alt="hook"
        width={100}
        height={100}
        className="absolute top-3 left-8 w-8 h-8"
      />
      <div className="absolute right-8 top-[35%]">
        <div className="cursor-pointer">
          <SoundIcon />
        </div>
        <div className="cursor-pointer mt-4">
          <ShareIcon />
        </div>
        <div className="cursor-pointer mt-4">
          <WhatsAppIcon />
        </div>
      </div>
      <h3 className="bottom-2 px-5 absolute text-white text-2xl font-bold">
        {slide.headline}
      </h3>
    </div>
  );
};

export default MidSection;
