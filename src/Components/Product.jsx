import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Product() {
    return (
        <div>
            <input type="search" placeholder='Search here' />
            <nav>
                <Link to='feature'>Featured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Product
