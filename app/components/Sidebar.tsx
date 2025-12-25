'use client'

import Link from 'next/link'
import {
  LayoutDashboard,
  Upload,
  BarChart,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + '/')

  return (
    <aside
      className={`h-screen bg-neutral-900 text-neutral-200 flex flex-col
      transition-all duration-300
      ${collapsed ? 'w-20' : 'w-64'}`}
    >
      
      <div className="flex items-center justify-between px-4 py-4">
        {!collapsed && (
          <span className="text-xl font-semibold">Artfolio</span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded-md hover:bg-neutral-800 transition"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-2">
        <ul className="space-y-15 mt-8">
          <SidebarItem
            href="/dashboard/portfolio"
            icon={<LayoutDashboard size={22} />}
            label="Portfolio"
            active={isActive('/dashboard/portfolio')}
            collapsed={collapsed}
          />

          <SidebarItem
            href="/dashboard/upload"
            icon={<Upload size={22} />}
            label="Upload"
            active={isActive('/dashboard/upload')}
            collapsed={collapsed}
          />

          <SidebarItem
            href="/dashboard/analytics"
            icon={<BarChart size={22} />}
            label="Analytics"
            active={isActive('/dashboard/analytics')}
            collapsed={collapsed}
          />

          <SidebarItem
            href="/dashboard/settings"
            icon={<Settings size={22} />}
            label="Settings"
            active={isActive('/dashboard/settings')}
            collapsed={collapsed}
          />
        </ul>
      </nav>
    </aside>
  )
}



function SidebarItem({
  href,
  icon,
  label,
  active,
  collapsed,
}: {
  href: string
  icon: React.ReactNode
  label: string
  active: boolean
  collapsed: boolean
}) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-20 px-3 py-2 rounded-lg
        transition-colors
        ${active ? 'bg-neutral-800' : 'hover:bg-neutral-800'}
        ${collapsed ? 'justify-center' : ''}`}
      >
        {icon}

        {!collapsed && (
          <span className="text-sm whitespace-nowrap">
            {label}
          </span>
        )}
      </Link>
    </li>
  )
}
