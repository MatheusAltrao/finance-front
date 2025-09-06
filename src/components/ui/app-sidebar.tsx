import { Banknote, CreditCard, Goal, Home, Landmark, PiggyBank, Settings } from 'lucide-react'
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import type { UserProps } from '@/types/auth'

// Menu items.
const items = [
  {
    title: 'Início',
    url: '/dashboard',
    icon: Home,
  },

  {
    title: 'Finanças',
    url: '/dashboard/finances',
    icon: Banknote,
  },

  {
    title: 'Bancos',
    url: '/dashboard/banks',
    icon: Landmark,
  },

  {
    title: 'Cartões',
    url: '/dashboard/cards',
    icon: CreditCard,
  },

  {
    title: 'Metas',
    url: '/dashboard/goals',
    icon: Goal,
  },

  {
    title: 'Cotações',
    url: '/dashboard/quotes',
    icon: PiggyBank,
  },

  {
    title: 'Configurações',
    url: '/dashboard/settings',
    icon: Settings,
  },
]

interface AppSidebarProps {
  user: UserProps
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
  )
}
