import Link from 'next/link'
import ThemeToggle from './ModeToggle'
import { Button } from './ui/button'
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession()

  return (
    <div className="flex h-[10vh] items-center border-b bg-background">
      <div className="container flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-3xl font-extrabold">DangSaas</h1>
        </Link>
        <div className="flex items-center gap-x-3">
          {(await isAuthenticated()) ?
            <LogoutLink>
              <Button>Log out</Button>
            </LogoutLink>
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
