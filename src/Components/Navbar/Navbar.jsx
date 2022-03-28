import React from 'react'
import {Link} from 'react-router-dom'
// import './navbar.css'
import styled from 'styled-components'
const Navbar = () => {
  const Nav = styled.div`
    display: flex;
    padding: 1% 0 1% 0;
    background-color: rgb(161, 255, 161);
    justify-content: space-evenly;
    font-weight:  bolder;
    & a {
      color:  black;
      list-style: none;
      text-decoration: none;
    }
    & a:hover {
    text-decoration: underline;
    }
  `
  return (
    <Nav className="navbar">
        <Link to='/'>Home</Link>
        <Link to={`/section/${'history'}`}>History</Link>
        <Link to={`/section/${'technology'}`}>Technology</Link>
        <Link to={`/section/${'mythology'}`}>Mythology</Link>
        <Link to={`/section/${'mystery'}`}>Mystery</Link>
    </Nav>
  )
}

export default Navbar