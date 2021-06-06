import React, { useContext } from 'react'
import { MdLocalGroceryStore } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import './Navbar.css'

function Navbar() {
    const { state } = useContext(CartContext);
    return (
        <nav className="navbar">
            <Link to="/" className="linksRouter"><h4 className="link">Tienda</h4></Link>
            <div><img className="navbar-logo" src="https://cdn.shopify.com/s/files/1/0025/1464/9124/files/CBS_Logo_340x.png?v=1527617306" /></div>
            <div className="cart-nav-icon">
                <Link to="/cart" className="linksRouter"><div className="icon"><MdLocalGroceryStore size={30} />
                </div></Link>
                <div className="badge-nav-icon">{state.length}</div>
            </div>
        </nav>
    )
}

export default Navbar
