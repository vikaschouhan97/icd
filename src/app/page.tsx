import Header from'@/app/components/Header';
import NewsCard from '@/app/components/NewsCard1';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="px-6 py-8">
        <h1 className="text-2xl font-bold mb-6">Today’s <span className="font-light">Newsreel</span></h1>
        <div className="flex w-full overflow-hidden overflow-x-scroll gap-6 border-2 border-red-600">
          <NewsCard
            imageSrc="/images/movie.jpg"
            title="“Days of America being ripped off are over”: White House on reciprocal tariffs"
          />
          <NewsCard
            imageSrc="/images/ambani.jpg"
            title="Gold hits record amid Trump tariff chaos"
            subtitle="So what’s behind the slump?"
          />
        </div>
      </main>
    </div>
  );
}
