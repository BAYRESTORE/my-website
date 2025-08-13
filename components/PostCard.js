export default function PostCard({ username, image, caption }) {
  return (
    <div className="bg-white border rounded-md my-4">
      <div className="px-4 py-2 font-bold">{username}</div>
      <img src={image} alt="Post" className="w-full" />
      <div className="px-4 py-2">
        <p className="font-semibold">{username}</p>
        <p>{caption}</p>
      </div>
    </div>
  )
    }
