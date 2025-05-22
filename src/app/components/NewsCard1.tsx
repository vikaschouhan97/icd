interface NewsCardProps {
  imageSrc: string;
  title: string;
  subtitle?: string;
}

export default function NewsCard({ imageSrc, title, subtitle }: NewsCardProps) {
  return (
    <div className="relative w-full min-w-[300px] max-w-[300px] shadow-md overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-96 object-cover" />
      <div className="absolute top-2 left-2">
        <img src="/images/hook-logo.png" alt="logo" className="w-6 h-6" />
      </div>
      <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
        <h2 className="text-sm font-bold">{title}</h2>
        {subtitle && <p className="text-xs mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}
