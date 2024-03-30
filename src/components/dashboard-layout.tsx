import { ReactNode } from "react";
import { SideBar } from "./ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const sidebar = ["Home", "Reports", "Users", "Settings"];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow flex-row">
        <SideBar sidebar={sidebar} />

        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
