import { redirect } from "next/navigation";
import { validateRequest } from "@/auth";

import { Signin } from "@/components/Signin";

export default async function page() {
  const { user } = await validateRequest();

  if (user) {
    return redirect("/dashboard");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Signin />
    </div>
  );
}
