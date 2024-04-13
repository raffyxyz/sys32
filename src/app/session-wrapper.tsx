import React, { ReactNode } from "react";
import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import DashboardLayout from "@/layouts/dashboard/dashboard-layout";
import DashboardProvider from "@/layouts/dashboard-provider";
import DashboardClient from "@/layouts/dashboard-client";

const types = {
  admin: "",
  provider: "",
  client: "",
};

export default async function SessionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/signin");
  }

  if (user.type === "provider") {
    return <DashboardProvider>{children}</DashboardProvider>;
  }

  if (user.type === "client") {
    return <DashboardClient>{children}</DashboardClient>;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
