// components/CategoryCards.tsx
import { cateoryCards } from "@/app/constant/constant";
import Image from "next/image";

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {cateoryCards?.map((category, index) => (
        <div className={`relative w-full h-16 md:h-40 overflow-hidden`} key={index}>
          <Image
            src={category?.image}
            alt="category"
            width={100}
            height={100}
            className="opacity-60 w-full h-full object-cover z-0"
          />
          <div
            className={`absolute inset-0 ${category?.overlay} opacity-50 z-10`}
          />
          <div
            className={`absolute inset-0 z-20 flex items-center justify-center`}
          >
            <h2 className="text-white text-xl font-bold">{category?.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;
