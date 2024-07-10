import { Link } from "react-router-dom";
import {auth} from "../config/frbsConfig"

export const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/login">Login</Link>

      <div>
        <p>{auth.currentUser.displayName}</p>
        <img src={auth.currentUser?.photoURL || ""} alt="" width="50px" />
      </div>
    </div>
  )
}