import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import { type ReactNode } from 'react'

import DashboardNav from '@/app/dashboard/DashboardNav'
import prisma from '@/db/db'

type DashboardLayoutProps = {
  children: ReactNode
}

const getData = async ({
  email,
  name,
  id,
}: {
  email: string
  name: string
  avatar: string
  id: string
}) => {
  const user = await prisma.user.findFirst({
    where: {
      OR: [
        {
          email,
        },
        {
          id,
        },
      ],
    },
    select: {
      id: true,
      email: true,
      name: true,
      stripeCustomerId: true,
    },
  })

  if (!user) {
    await prisma.user.create({
      data: {
        id,
        email,
        name,
      },
    })
  }
}

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  if (!user) {
    return redirect('/')
  }

  await getData({
    id: user.id ?? '',
    name: user.username ?? `${user.given_name ?? ''} ${user.family_name ?? ''}`,
    email: user.email ?? '',
    avatar: user.picture ?? '',
  })

  return (
    <div className="mt-10 flex flex-col space-y-6">
      <div
        className={`
          container grid flex-1 gap-12

          md:grid-cols-[200px_1fr]
        `}
      >
        <DashboardNav />
        <aside
          className={`
            hidden w-[200px] flex-col

            md:flex
          `}
        >
          <h1>hello</h1>
        </aside>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout
