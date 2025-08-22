import { redirect } from 'next/navigation'

import React, { ReactNode } from 'react'
import { getUser } from '../_actions/getUser'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
  const user = await getUser()
  if (!user) {
    redirect('/login')
    return null
  }
  return <>{children}</>
}

export default Layout;