import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 border-b bg-white sticky top-0 z-50">
      <div className="font-bold text-xl">
        <Link href="/">MyGram</Link>
      </div>
      <div className="flex space-x-4 text-2xl">
        <Link href="/">🏠</Link>
        <Link href="/camera">📷</Link>
        <span>❤️</span>
        <span>👤</span>
      </div>
    </nav>
  )
}
