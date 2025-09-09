'use client'
import { usePathname } from 'next/navigation'
import { SidebarMenuButton, SidebarMenuItem } from './sidebar'

interface SidebarItemProps {
  item: {
    title: string
    url: string
    icon: React.ElementType
  }
}

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname()
  const isActive = pathname === item.url

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton className={`${isActive && 'bg-muted'} transition-colors `} asChild>
        <a href={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
