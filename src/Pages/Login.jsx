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
    <div>
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}
