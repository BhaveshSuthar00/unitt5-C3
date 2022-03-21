import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <Link to='/'>Home</Link>
        <Link to={`/Section/${'History'}`}>History</Link>
        <Link to={`/Section/${'Technology'}`}>Technology</Link>
        <Link to={`/Section/${'Mythology'}`}>Mythology</Link>
        <Link to={`/Section/${'Mystery'}`}>Mystery</Link>
    </div>
  )
}

export default Navbar