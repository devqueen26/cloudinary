import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return <div className="layout">{children}</div>;
};

export default DashboardLayout;
