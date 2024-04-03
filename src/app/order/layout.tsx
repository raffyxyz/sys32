import { ReactNode } from "react";
import DashboardLayout from "@/layouts/dashboard/dashboard-layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
