import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default async function Home() {
  const {isAuthenticated} = getKindeServerSession()

  const isAuthed = await isAuthenticated()
  if(isAuthed) {
    return redirect("/dashboard")
  }

  return (
    <div className="flex h-[90vh] items-center justify-center bg-background">
      <div
        className={`
          relative mx-auto w-full max-w-7xl items-center px-5 py-12

          lg:px-16

          md:px-12
        `}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div>
            <span className="w-auto rounded-full bg-secondary px-6 py-3">
              <span className="text-sm font-medium text-primary">Sort your notes easily</span>
            </span>

            <h1
              className={`
                mt-8 text-3xl font-extrabold tracking-tight

                lg:text-6xl
              `}
            >
              Create Notes with ease
            </h1>
            <p
              className={`
                mx-auto mt-8 max-w-xl text-base text-secondary-foreground

                lg:text-xl
              `}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rerum, exercitationem quae blanditiis
              commodi alias autem dolorum ipsam error
            </p>
          </div>

          <RegisterLink>
            <div className="mx-auto mt-10 flex max-w-sm justify-center">
              <Button size={'lg'} className="w-full">
                Sign Up for free
              </Button>
            </div>
          </RegisterLink>
        </div>
      </div>
    </div>
  )
}
