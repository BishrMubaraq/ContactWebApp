import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {
  return (
    <div className="navbar_container">
        <div className="navbar_wrapper">
            <div className="logo_sec">
                <h1>Contacts Web App</h1>
            </div>
            <div className="nav_sec">
                <ul>
                    <li><NavLink className={(navClass) => navClass.isActive ? "nav_active nav_link" : 'nav_link'} to={'/'}>Contacts</NavLink></li>
                    <li><NavLink className={(navClass) => navClass.isActive ? "nav_active nav_link" : 'nav_link'} to={'/messages'}>Messages</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar