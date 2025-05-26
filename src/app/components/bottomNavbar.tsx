"use client";

import { Home, Film, Radio, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

type NavItem = {
  label: string;
  icon: React.ReactNode;
};

const items: NavItem[] = [
  { label: "Home", icon: <Home size={20} /> },
  { label: "Newsreel", icon: <Film size={20} /> },
  { label: "Podcasts", icon: <Radio size={20} /> },
  { label: "Look Book", icon: <ShoppingBag size={20} /> },
  { label: "Menu", icon: <Menu size={20} /> },
];

export default function BottomNavBar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
      <div className="flex justify-around items-center py-2">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className="flex flex-col items-center text-xs"
          >
            <div
              className={clsx(
                "text-gray-600",
                active === item.label && "text-red-600"
              )}
            >
              {item.icon}
            </div>
            <span
              className={clsx(
                "text-[11px] mt-1",
                active === item.label
                  ? "text-red-600 font-semibold"
                  : "text-gray-600"
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
