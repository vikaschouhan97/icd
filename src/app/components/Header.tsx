'use client'

import { useEffect, useRef, useState } from "react";
import HookIcon from "../assets/icons/hookIcon";
import { navBarOptions } from "../constant/constant";
import Link from "next/link";
import { Search } from 'lucide-react'; // or use any icon lib

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="text-red-600 font-bold text-2xl"><HookIcon /></div>
        <div className="text-xl"><SearchToggle /></div>
      </header>
      <nav className="flex gap-6 text-sm font-semibold text-gray-600 p-4 overflow-scroll">
        {navBarOptions?.map((item) => (
          <Link href={`/${item.toLowerCase()}`}
          key={item}
            className={`${
              item === "TODAY"
                ? "text-red-600 border-b-2 border-red-600 pb-1 cursor-pointer italic"
                : "cursor-pointer"
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>
    </>
  );
}

export function SearchToggle() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  return (
    <div className="relative">
      {showInput ? (
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-2 py-1 w-48 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onBlur={() => setShowInput(false)} // hide on blur
        />
      ) : (
        <button
          onClick={() => setShowInput(true)}
          className="p-2 text-gray-600 hover:text-black"
        >
          <Search size={20} />
        </button>
      )}
    </div>
  );
}
