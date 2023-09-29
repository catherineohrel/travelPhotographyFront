// import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../../assets/images/logo.png"

import "./Navbar.scss"
import "../../style.scss"

export default function Navbar () {
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
        </ul>
      </div>
    </div>
    </>
  )
}
