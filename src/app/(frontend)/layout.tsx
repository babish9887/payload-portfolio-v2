import React from 'react'
import './styles.css'
import { Toaster } from 'react-hot-toast'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <title>Babish's Portfolio</title>
      </head>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
