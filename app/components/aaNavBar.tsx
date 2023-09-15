import Link from 'next/link'

export default function aaNavbar() {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="space-x-4">
        <Link
          href="/"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          Home
        </Link>
        <Link
          href="/add-construction-site"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          現場追加
        </Link>
        <Link
          href="/member-list"
          className="rounded bg-gray-700 px-3 py-2 text-white hover:bg-gray-500"
        >
          メンバーリスト
        </Link>
      </nav>
    </header>
  )
}
