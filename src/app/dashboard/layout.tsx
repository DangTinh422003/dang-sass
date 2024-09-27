import { type ReactNode } from 'react'

import DashboardNav from './DashboardNav'

type DashboardLayoutProps = {
  children: ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
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
