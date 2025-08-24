import { Banknote, Goal, Home, PiggyBank, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserProps } from "@/types/auth";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Início",
    url: "/dashboard",
    icon: Home,
  },

  {
    title: "Finanças",
    url: "/dashboard/finances",
    icon: Banknote,
  },

  {
    title: "Metas",
    url: "/dashboard/metas",
    icon: Goal,
  },

  {
    title: "Cotações",
    url: "/dashboard/cotacoes",
    icon: PiggyBank,
  },

  {
    title: "Configurações",
    url: "/dashboard/configuracoes",
    icon: Settings,
  },
];

interface AppSidebarProps {
  user: UserProps;
}

export function AppSidebar({ user }: AppSidebarProps) {
  return (
    <Sidebar>
      <SidebarContent className="flex flex-col justify-between">
        <SidebarGroup>
          <SidebarGroupLabel>Finance APP</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <div className="border-t p-2">
          <Link
            href={`/dashboard/perfil`}
            className="flex w-full items-center gap-2 rounded-md p-2 transition-colors hover:bg-accent"
          >
            <div className="h-8 w-8 rounded-full bg-zinc-500"></div>

            <p className="truncate text-sm">{user.name}</p>
          </Link>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
