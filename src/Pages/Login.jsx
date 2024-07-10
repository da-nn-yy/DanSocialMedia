import {auth,provider} from "../config/frbsConfig";
import { signInWithPopup } from "firebase/auth";

export const Login = () => {

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }
  return (
    <div>
      <p>Sign in with Google to continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}
