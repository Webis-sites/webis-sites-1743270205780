import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'מכון-כושר-ביתא-1743270205780',
  description: 'A website generated with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he-IL" dir="rtl">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}