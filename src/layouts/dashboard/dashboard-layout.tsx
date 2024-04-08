/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import { BarChartBig, Gauge, Settings, Rows2, UsersRound } from "lucide-react";
import { SideBar } from "../../components/Common/Sidebar";
import { Header } from "@/components/Common/Header";
import styles from "./index.module.css";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const sidebar = [
    { label: "Dashboard", url: "/dashboard", icon: <Gauge size={18} /> },
    { label: "Order Queue", url: "/order", icon: <Rows2 size={18} /> },
    { label: "Clients", url: "/clients", icon: <UsersRound size={18} /> },
    { label: "Reports", url: "/reports", icon: <BarChartBig size={18} /> },
    { label: "Settings", url: "/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <SideBar sidebar={sidebar} />

        <main className={styles.main}>
          {/* <div className="flex justify-between items-center mb-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold">Welcome, Bruce Wayne</h1>
              <h4>Here&apos;s what happened while your away.</h4>
            </div>
            <div className="flex items-center space-x-6">
              <div className="avatar">
                <div className="w-14 rounded-full">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/1/19/Bruce_Wayne_%28The_Dark_Knight_Trilogy%29.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
              {/* <div>
                <h1 className="text-xl font-semibold">Bruce Wayne</h1>
                <h4>Super Admin</h4>
              </div> 
            </div>
          </div> */}

          {children}
        </main>
      </div>
    </div>
  );
}
