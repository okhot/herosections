import React from 'react'
import NavStyle from '../navbar/Navbar.module.css'

export default function NavBar() {
  return (
    <div className={NavStyle.NavBar}>
      <div><h1>KBLE.</h1></div>
      <div className={NavStyle.Navlinks}>
        <p>Home</p>
        <p>Shop</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
    </div>
  )
}
