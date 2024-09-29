'use client'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import navItems from '@/app/dashboard/index'

const dashboardNavVarians = cva(
  `
    group flex items-center rounded-md px-3 py-2 text-sm font-medium

    hover:bg-accent hover:text-accent-foreground
  `,
  {
    variants: {
      state: {
        active: 'bg-accent text-accent-foreground',
        inactive: '',
      },
    },
    defaultVariants: {
      state: 'inactive',
    },
  },
)

const DashboardNav = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col items-start gap-2">
      {navItems.map((item) => (
        <Link href={item.href} key={item.name} className="w-full">
          <span
            className={dashboardNavVarians({
              state: pathname === item.href ? 'active' : 'inactive',
            })}
          >
            <item.icon className="mr-2 size-4" />
            <span>{item.name}</span>
          </span>
        </Link>
      ))}
    </div>
  )
}

export default DashboardNav
