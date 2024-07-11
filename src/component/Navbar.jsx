import { Link } from "react-router-dom";
import {auth} from "../config/frbsConfig"
import {useAuthState} from 'react-firebase-hooks/auth'
import './Navbar.css'
import { signOut } from "firebase/auth";

export const Navbar = () => {

  const [user]  = useAuthState(auth)

  const signUserOut = async () => {
    await signOut(auth) 
  }
  return (
      <div className="navbar">
           <h1>DAN</h1>

            <div className="btween">
              <div className="links">
                <Link className="link" to="/"> Home </Link>
                {!user && (
                <Link className="link" to="/login">Login</Link>
                )}
              </div>
                    
            <div className="user">
              {user && (
               <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} alt=""/>
                <button onClick={signUserOut} className="out">Log Out</button>
               </>
              )}
              </div>
          </div>
        </div>
  )
}