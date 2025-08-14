import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import rainAnimation from "../public/assets/rain.json";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  return (
    <div>
      <header className="header">
        <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <Image src="/logo.png" alt="Logo" width={40} height={40}/>
          <h1>DSRT</h1>
        </div>
        <Link href="/login">
          <button>Login</button>
        </Link>
      </header>

      <main className="main-container">
        <div className="main-grid">
          <div>
            <h2>DSRT</h2>
            <p>Digital Smart Revise Technology – demo canvas editor dengan animasi hujan</p>
            <Link href="/dashboard">
              <button className="cta-button">Mulai Sekarang</button>
            </Link>
          </div>
          <div>
            {mounted && <Lottie animationData={rainAnimation} loop={true} />}
          </div>
        </div>
      </main>

      <footer>
        © {new Date().getFullYear()} DSRT - All Rights Reserved
      </footer>
    </div>
  );
  }
