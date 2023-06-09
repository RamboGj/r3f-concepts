import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-screen w-full h-screen fixed top-0 left-0 overflow-hidden bg-[#15151C]`}
      >
        {children}
      </body>
    </html>
  )
}
