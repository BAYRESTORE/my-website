import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Lupa Password</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
          <button className="w-full bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600">
            Kirim Link Reset
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-blue-500 hover:underline">Kembali ke Login</Link>
        </div>
      </div>
    </div>
  );
}
