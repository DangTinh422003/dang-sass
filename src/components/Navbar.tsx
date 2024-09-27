import Link from 'next/link'
import ThemeToggle from './ModeToggle'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href={'/'}>
          <h1 className="text-3xl font-extrabold">DangSaas</h1>
        </Link>
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <Button>Sign In</Button>
            <Button variant={'outline'}>Sign Un</Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
