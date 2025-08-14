import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh', background:'#f3f4f6'}}>
      <div style={{background:'white', padding:'32px', borderRadius:'12px', boxShadow:'0 2px 10px rgba(0,0,0,0.1)', width:'100%', maxWidth:'400px'}}>
        <h2 style={{textAlign:'center', marginBottom:'24px'}}>Forgot Password</h2>
        <form style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <input type="email" placeholder="Masukkan Email" style={{padding:'12px', borderRadius:'8px', border:'1px solid #d1d5db'}}/>
          <button style={{padding:'12px', backgroundColor:'#3b82f6', color:'white', borderRadius:'8px'}}>Kirim Link Reset</button>
        </form>
        <div style={{marginTop:'16px', textAlign:'center', fontSize:'0.9rem'}}>
          <Link href="/login">Kembali ke Login</Link>
        </div>
        <div style={{marginTop:'8px', textAlign:'center'}}>
          <Link href="/">Kembali ke Landing Page</Link>
        </div>
      </div>
    </div>
  );
}
