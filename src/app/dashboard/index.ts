import { CreditCard, HomeIcon, Settings } from 'lucide-react'

const navItems = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings,
  },
  {
    name: 'Billing',
    href: '/dashboard/billing',
    icon: CreditCard,
  },
]

export default navItems