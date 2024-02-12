import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const navStyle = ({ isActive }) => {
        return {
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal'
        }
    }
    return (
        <nav className='primary-nav'>
            <NavLink to='/' style={navStyle}>Home</NavLink>
            <NavLink to='/about' style={navStyle}>About</NavLink>
            <NavLink to='/products' style={navStyle} >Products</NavLink>
        </nav >
    )
}

export default Navbar
