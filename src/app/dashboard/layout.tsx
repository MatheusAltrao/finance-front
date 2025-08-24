import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*  const user = await getSession();

  if (!user) {
    redirect("/auth/sign-in");
  } */

  const user = {
    type: "teste",
    value: "teste",
    id: 1,
    name: "teste",
    email: "teste",
  };

  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <main className="w-full p-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
