import { FC } from "react";
import Link from "next/link";

interface SideBarProps {
  sidebar: any;
}

const SideBar: FC<SideBarProps> = ({ sidebar }) => {
  return (
    <aside className="w-64 border-r p-4 border-gray-300">
      <nav>
        <ul>
          {sidebar?.map((items: any) => (
            <li
              key={items}
              className=" w-full hover:bg-gray-300 p-2 rounded-md"
            >
              <Link href="#" className="text-gray-700 hover:text-gray-900 ml-1">
                {items}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export { SideBar };
