import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='nav'>
        <Link to="/contact">Contact Info</Link>
        <Link to="/availability">Availability</Link>
        <Link to="/admin">Admin</Link>
    </nav>
  )
}

export default Header