import Link from "next/link";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Nama" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-3 rounded" />
          <button className="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600">Daftar</button>
        </form>
        <div className="mt-4 text-center">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
        </div>
      </div>
    </div>
  );
}
