import { Link } from "react-router-dom";
import {auth} from "../config/frbsConfig"
import {useAuthState} from 'react-firebase-hooks/auth'
import './Navbar.css'

export const Navbar = () => {

  const [user]  = useAuthState(auth)
  return (
    <div className="nav">
        <h1>DAN</h1>
        
        <div className="log">
          <div className="link">
            <Link to="/"> Home </Link>
            <Link to="/login">Login</Link>
          </div>
                
        <div className="ggl">
          <p>{user?.displayName}</p>
          <img src={user?.photoURL || ""} alt="" width="50px" />
        </div>
      </div>
    </div>
  )
}