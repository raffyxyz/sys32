import { ReactNode } from "react";
import { BarChartBig, Gauge, Settings, Rows2, UsersRound } from "lucide-react";
import { SideBar } from "./ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const sidebar = [
    { label: "Dashboard", url: "/", icon: <Gauge size={18} /> },
    { label: "Order Queue", url: "/order", icon: <Rows2 size={18} /> },
    { label: "Clients", url: "/clients", icon: <UsersRound size={18} /> },
    { label: "Reports", url: "/reports", icon: <BarChartBig size={18} /> },
    { label: "Settings", url: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow flex-row">
        <SideBar sidebar={sidebar} />

        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
