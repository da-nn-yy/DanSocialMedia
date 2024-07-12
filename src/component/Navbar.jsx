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
                <Link to="/"> Home </Link>
                {!user ? 
                <Link to="/login">Login</Link> :
                <Link to="/createpost">Create Post</Link>
                }
                <Link to="/createpost">Create Post</Link>
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