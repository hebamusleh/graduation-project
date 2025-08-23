import { Footer, Header } from '@/components/molecules'
import { QueryProvider } from '@/components/molecules/QueryProvider'
import React from 'react'

export const metadata = {
  description: 'FOMO Tech - Profile Page',
  title: 'FOMO Tech - Profile Page',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
