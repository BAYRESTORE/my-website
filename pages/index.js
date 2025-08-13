import Navbar from '../components/Navbar'
import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="flex justify-center max-w-5xl mx-auto mt-4">
        <div className="w-full lg:w-2/3 px-4">
          <PostCard username="andi" image="/logo.png" caption="Posting pertama!" />
          <PostCard username="budi" image="/logo.png" caption="Halo semua!" />
        </div>
        <Sidebar />
      </main>
    </div>
  )
}
