import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
  return (
    <div className="header container">
      <img className="logo" src={logo} alt="" />
      <nav>
        <NavLink className="navlink" to="/shop">
          Shop
        </NavLink>
        <NavLink className="navlink" to="/review">
          Order Review
        </NavLink>
        <NavLink className="navlink" to="/inventory">
          Manage Inventory
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
