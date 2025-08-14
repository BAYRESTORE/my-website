import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../public/assets/animation.json";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 shadow-md bg-white">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">DSRT</h1>
        </div>
        <Link href="/login">
          <button className="header-button">Login</button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center p-6 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-4">DSRT</h2>
            <p className="text-xl text-gray-700 mb-6">
              Digital Smart Revise Technology – Semua tentang teknologi, edit, dan desain.
            </p>
            <Link href="/login">
              <button className="cta-button">Mulai Sekarang</button>
            </Link>
          </div>

          {/* Animasi */}
          <div className="max-w-md mx-auto">
            {isMounted && <Lottie animationData={animationData} loop={true} />}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-4 bg-white text-center text-gray-500">
        © {new Date().getFullYear()} DSRT - All Rights Reserved
      </footer>
    </div>
  );
}
