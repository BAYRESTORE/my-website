import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: '#f9fafb', display: 'flex', flexDirection: 'column'}}>
      
      {/* Header */}
      <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'16px', background:'white', boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <h1 style={{fontSize:'1.5rem', fontWeight:'bold'}}>DSRT</h1>
        </div>
        <Link href="/login">
          <button style={{padding:'8px 16px', background:'#3b82f6', color:'white', borderRadius:'8px'}}>Login</button>
        </Link>
      </header>

      {/* Main Content */}
      <main style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{textAlign:'center'}}>
          <h2 style={{fontSize:'3rem', fontWeight:'bold', marginBottom:'16px'}}>DSRT</h2>
          <p style={{fontSize:'1.25rem', color:'#4b5563', marginBottom:'24px'}}>
            Digital Smart Revise Technology – platform demo editor & animasi
          </p>
          <Link href="/dashboard">
            <button style={{padding:'12px 24px', background:'#22c55e', color:'white', fontWeight:'600', borderRadius:'8px'}}>
              Mulai Sekarang
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{padding:'16px', textAlign:'center', background:'white', color:'#6b7280'}}>
        © {new Date().getFullYear()} DSRT - All Rights Reserved
      </footer>
    </div>
  );
                   }
