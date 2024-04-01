"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn, isActive } from "@/lib/utils";

interface SideBarProps {
  sidebar: SideBarTypes[];
}

type SideBarTypes = {
  label: string;
  url: string;
  icon: JSX.Element;
};

const SideBar: FC<SideBarProps> = ({ sidebar }) => {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r p-4 border-gray-300">
      <h1 className="mb-8 text-2xl font-semibold">OrderUp</h1>
      <nav>
        <ul>
          {sidebar?.map((items: SideBarTypes) => (
            <li
              key={items.label}
              className={cn(
                isActive(pathname, items.url)
                  ? "bg-base-content"
                  : "hover:bg-base-300",
                "w-full p-2 rounded-md mb-2"
              )}
            >
              <Link
                href={items.url}
                className={cn(
                  isActive(pathname, items.url) && "text-gray-700",
                  "ml-1 flex items-center"
                )}
              >
                <span
                  className={cn(
                    isActive(pathname, items.url) && "text-base-100"
                  )}
                >
                  {items.icon}
                </span>
                <span
                  className={cn(
                    isActive(pathname, items.url) && "text-base-100",
                    "ml-3 text-sm"
                  )}
                >
                  {items.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export { SideBar };
