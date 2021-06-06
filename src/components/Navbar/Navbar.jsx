import React from 'react'
import { MdLocalGroceryStore } from 'react-icons/md'
import {Link} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/"><h4>Tienda</h4></Link>
            <div><img className="navbar-logo" src="https://cdn.shopify.com/s/files/1/0025/1464/9124/files/CBS_Logo_340x.png?v=1527617306" /></div>
            <Link to="/cart"><MdLocalGroceryStore size={30}/></Link>
        </nav>
    )
}

export default Navbar
