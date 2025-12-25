'use client'

import Link from 'next/link'
import { LayoutDashboard, Upload, BarChart, Settings } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-900 text-neutral-200 flex flex-col">
      <div className="px-6 py-4 text-xl font-semibold">
        Artfolio
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800">
          <LayoutDashboard size={18} />
          Portfolio
        </Link>

        <Link href="/upload" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800">
          <Upload size={18} />
          Upload
        </Link>

        <Link href="/analytics" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-neutral-800">
          <BarChart size={18} />
          Analytics
        </Link>

        <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-800">
          <Settings size={18} />
          Settings
        </Link>
      </nav>
    </aside>
  )
}
