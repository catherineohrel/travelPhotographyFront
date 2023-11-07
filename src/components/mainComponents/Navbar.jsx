// import React from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import { useAuthContext } from "../../contexts/authContext"
import photoAPI from "../../services/photoApi"
import logo from "../../assets/images/logo.png"

import "./Navbar.scss"
import "../../style.scss"

export default function Navbar() {
const navigate = useNavigate()
const { user, setUser } = useAuthContext()

  const handleDisconnect = () => {
    photoAPI .get("./api/auth/logout").then(() => {
      localStorage.clear()
      setUser(null)
      navigate("/")
    })
  }

  return (
    <>
    <div className="navBarContainer">
      <Link to="/">
        <input className='navBarLogo' type="image" src={logo} alt='logo' />
      </Link>
      <div className='navBarLinks'>
        <ul className='navBarList'>
          <li>
            <Link to="/Gallery">
              <option value="">Gallery</option>
            </Link>
            </li>
          <li>
            <Link to="/Shop">
              <option value="">Shop</option>
            </Link></li>
          <li>
            <Link to="/Contact">
              <option value="">Contact</option>
            </Link></li>
            {user ? (
              <li>
                <button className='navLogoutBttn' onClick={handleDisconnect}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
              </>
            )}
        </ul>
      </div>
    </div>
    </>
  )
}
