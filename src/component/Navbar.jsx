import { Link } from "react-router-dom";
import {auth} from "../config/frbsConfig"
import {useAuthState} from 'react-firebase-hooks/auth'

export const Navbar = () => {

  const [user]  = useAuthState(auth)
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/login">Login</Link>

      <div>
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} alt="" width="50px" />
      </div>
    </div>
  )
}