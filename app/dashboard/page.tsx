import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  const role = user.publicMetadata.role;

  if (!role) redirect("/onboarding");

  if (role === "student") {
    redirect("/dashboard/student");
  }

  if (role === "teacher") {
    redirect("/dashboard/teacher");
  }

  return null;
}
