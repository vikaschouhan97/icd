export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="text-red-600 font-bold text-2xl">Hook</div>
        <div className="text-xl">🔍</div>
      </header>
      <nav className="flex gap-6 text-sm font-semibold text-gray-600">
        <span className="text-red-600 border-b-2 border-red-600 pb-1">
          TODAY
        </span>
        <span>GEOPOLITICS</span>
        <span>ASTROLOGY</span>
        <span>ENTERTAINMENT</span>
      </nav>
    </>
  );
}
