import {
  LoginLink,
  RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'

import ThemeToggle from '@/components/ModeToggle'
import { Button } from '@/components/ui/button'
import UserNav from '@/components/UserNav'

const Navbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <div className="flex h-[10vh] items-center border-b bg-background">
      <div className="container flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-3xl font-extrabold">
            Dang<span className="text-primary">Saas</span>
          </h1>
        </Link>
        <div className="flex items-center gap-x-3">
          {(await isAuthenticated()) ?
            <UserNav
              avatar={user.picture ?? ''}
              email={user.email ?? ''}
              username={
                user.username ??
                `${user.given_name ?? ''} ${user.family_name ?? ''}`
              }
            />
          : <div className="flex items-center gap-x-3">
              <LoginLink>
                <Button>Sign In</Button>
              </LoginLink>
              <RegisterLink>
                <Button variant={'outline'}>Sign Up</Button>
              </RegisterLink>
            </div>
          }
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
