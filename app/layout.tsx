import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import NavBar from './components/NavBar'

const inter = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
