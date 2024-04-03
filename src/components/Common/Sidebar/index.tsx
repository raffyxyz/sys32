"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SidebarHeader from "./sidebar-header";
import { cn } from "@/util/class";
import { isActive } from "@/util/sidebar";
import { APP_NAME } from "@/const/app";
import styles from "./index.module.css";

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

  // TODO: This component need more work for optimization.
  return (
    <aside className={styles.wrapper}>
      <SidebarHeader text={APP_NAME} />
      <nav>
        <ul>
          {sidebar?.map((items: SideBarTypes) => (
            <li
              key={items.label}
              className={cn(
                isActive(pathname, items.url)
                  ? "bg-base-content"
                  : "hover:bg-base-300",
                styles.linkWrapper
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
