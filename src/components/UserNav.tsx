import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

import navItems from '@/app/dashboard'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface UserNavProps {
  username: string
  email: string
  avatar: string
}

const UserNav = ({ avatar, email, username }: UserNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none">
        <Avatar className="relative size-10 rounded-full">
          <AvatarImage src={avatar || 'https://github.com/shadcn.png'} alt="" />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{username}</p>
            <p className="text-xs font-medium leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item) => (
            <DropdownMenuItem key={item.name} asChild>
              <Link
                href={item.href}
                className="flex w-full cursor-pointer items-center gap-3"
              >
                <item.icon className="size-4" />
                <span>{item.name}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <LogoutLink>
          <DropdownMenuItem>
            <Button
              className="flex w-full items-center justify-center gap-2"
              variant={'destructive'}
            >
              <span>Logout</span>
              <LogOut size={15} />
            </Button>
          </DropdownMenuItem>
        </LogoutLink>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav
