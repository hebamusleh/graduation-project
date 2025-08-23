import React from 'react'
import './styles.css'

export const metadata = {
  description: 'FOMO ',
  title: 'FOMO',
   icons: {
    icon: '/fomo-logo.svg', 
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" sizes="32x32" href="/fomo-logo.svg" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
