import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
<<<<<<< HEAD
import { AppSidebar } from "./ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "./ui/site-header";
=======
>>>>>>> 6b6c64936a8dd454f2f0382f57c51e574560d11d

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

<<<<<<< HEAD
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 48)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
=======
  return <div className="layout">{children}</div>;
>>>>>>> 6b6c64936a8dd454f2f0382f57c51e574560d11d
};

export default DashboardLayout;
