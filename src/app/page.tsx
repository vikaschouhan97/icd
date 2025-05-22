import Header from'@/app/components/Header';
import { todaysNews } from './constant/constant';
import SmartVideo from './components/smartVideoPreview';

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <main className="py-2">
        <h1 className="text-2xl ml-6 font-bold mb-6">Today’s <span className="font-light">Newsreel</span></h1>
        <div className="flex w-full overflow-hidden overflow-x-scroll gap-6">
          <div className='w-6' />
          {todaysNews?.map((item, index) => (
            <SmartVideo key={index} src={item.videoSrc} poster={item.imageSrc} title={item.title} />
          ))}
        </div>
      </main>
    </div>
  );
}
