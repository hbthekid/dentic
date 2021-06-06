import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Store from '../../components/Cart/Store'
import _ from 'underscore'
import { CartContext } from '../../context/CartContext'
import './Cart.css'

function Cart() {
    const { state, dispatch } = useContext(CartContext)
    const group = _.groupBy(state.products, (e) => e.store)
    const stores = Object.keys(group)

    return (
        <div>
            <Navbar />
            <section className="container">
                <h1 className="title-cart">Tu Carrito</h1>
                {stores.map((e) => (
                    <Store store={e} items={group[e]} />
                ))}
                <div className="cart-footer">
                    <h1>Total a Pagar</h1>
                    <h1>${state.total}</h1>
                    <div className="pay-button">Pagar</div>
                </div>
            </section>
        </div>
    )
}

export default Cart
