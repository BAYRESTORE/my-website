import Link from "next/link";
import CanvasEditor from "../components/CanvasEditor";

export default function Dashboard() {
  return (
    <div style={{display:'flex',flexDirection:'column',minHeight:'100vh',background:'#f9fafb'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px',background:'white',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
        <h1>Dashboard</h1>
        <Link href="/">
          <button style={{padding:'8px 16px',background:'#ef4444',color:'white',borderRadius:'8px'}}>Logout</button>
        </Link>
      </header>

      <main style={{flex:1,padding:'24px'}}>
        <CanvasEditor/>
        <div style={{marginTop:'16px'}}>
          <Link href="/">
            <button style={{padding:'8px 16px',background:'#6b7280',color:'white',borderRadius:'8px'}}>Back</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
