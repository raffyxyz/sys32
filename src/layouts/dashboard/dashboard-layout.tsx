/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import { BarChartBig, Gauge, Settings, Rows2, UsersRound } from "lucide-react";
import { SideBar } from "../../components/Common/Sidebar";
import { Button } from "@/components/Common/Button";
import { Header } from "@/components/Common/Header";
import styles from "./index.module.css";
import { LogOut } from "lucide-react";
import { logout } from "@/actions/auth-actions";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const sidebar = [
    { label: "Dashboard", url: "/dashboard", icon: <Gauge size={18} /> },
    { label: "Services", url: "/services", icon: <Rows2 size={18} /> },
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
          <div className={styles.header}>
            <div>
              <h1>Welcome</h1>
            </div>
            <div>
              <form action={logout}>
                <Button className="p-0" size="sm">
                  <LogOut size={18} />
                </Button>
              </form>
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
