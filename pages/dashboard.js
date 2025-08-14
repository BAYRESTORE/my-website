import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Import CanvasEditor secara dynamic supaya Next.js tidak error saat SSR
const CanvasEditor = dynamic(() => import("../components/CanvasEditor"), { ssr: false });

export default function Dashboard() {
  const [username] = useState("User"); // dummy user

  return (
    <div style={{minHeight:'100vh', background:'#f9fafb', display:'flex', flexDirection:'column'}}>
      
      {/* Header */}
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px', background:'white', boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
        <h2>Dashboard</h2>
        <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <span>Hai, {username}</span>
          <Link href="/">
            <button style={{padding:'8px 16px', background:'#ef4444', color:'white', borderRadius:'8px'}}>Logout</button>
          </Link>
        </div>
      </header>

      {/* Main Content: Canvas Editor */}
      <main style={{flex:1, padding:'24px'}}>
        <CanvasEditor />
      </main>

      {/* Footer */}
      <footer style={{padding:'16px', textAlign:'center', background:'white', color:'#6b7280'}}>
        © {new Date().getFullYear()} DSRT - All Rights Reserved
      </footer>
    </div>
  );
          }
