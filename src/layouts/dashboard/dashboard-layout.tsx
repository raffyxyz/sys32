import { ReactNode } from "react";
import { BarChartBig, Gauge, Settings, Rows2, UsersRound } from "lucide-react";
import { SideBar } from "../../components/Common/Sidebar";
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
      <div className={styles.content}>
        <SideBar sidebar={sidebar} />

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
