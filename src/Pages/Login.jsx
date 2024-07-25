import {auth,provider} from "../config/frbsConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


export const Login = () => {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    navigate("/");
  }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingTop:"4rem"}}>
      <p style={{paddingBottom:"1rem",fontWeight:"bold",fontSize:"1.3rem"}}>Sign in with Google to continue</p>
      <button className="btn" onClick={signInWithGoogle} style={{padding:"0.9rem",border:"none",borderRadius:"10px",backgroundColor:"#170877",color:"white", width:"10rem"}}>Sign in with Google</button>
    </div>
  )
}
