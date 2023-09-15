import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import Navbar from './components/Navbar'
// import Sidebar from './components/Navbar'

const inter = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
}

const menuList = [
  { name: 'Home', link: '/' },
  { name: '現場一覧', link: '/' },
  { name: 'メンバー一覧', link: '/member-list' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Sidebar /> */}
        <Navbar menu={menuList} />
        {children}
      </body>
    </html>
  )
}
