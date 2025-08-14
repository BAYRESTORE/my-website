import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
          <input type="password" placeholder="Password" className="w-full border p-3 rounded" />
          <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">Login</button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/forgot-password" className="text-blue-500 hover:underline">
            Lupa Password?
          </Link>
        </div>
        <div className="mt-2 text-center">
          Belum punya akun?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">Daftar</Link>
        </div>
      </div>
    </div>
  );
    }
