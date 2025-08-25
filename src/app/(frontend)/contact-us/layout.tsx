import { Footer, Header } from '@/components/molecules'
import React from 'react'

export const metadata = {
  description: 'FOMO Tech - Contact Page',
  title: 'FOMO Tech - Contact Page',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
