import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { MdDelete } from 'react-icons/md'
import './Cart.css'

function Cart() {
    return (
        <div>
            <Navbar />
            <section className="container">
                <h1 className="title-cart">Tu Carrito</h1>
                {[0, 1].map(() => (
                    <div>
                        <div className="store-container">
                            <div className="badge-store-cart">El Curao Lapio</div>
                            {
                                [0, 2].map(() => (
                                    <div className="product">
                                        <h4>Baltica Dry</h4>
                                        <div className="quantity-container">
                                            <div className="plus">+</div>
                                            <div className="badge-number">4</div>
                                            <div className="less">-</div>
                                        </div>
                                        <MdDelete size={20} />
                                        <div className="total-price-store">$45.000</div>
                                    </div>
                                ))
                            }
                        </div>   
                        <h4 className="final-store">Total en esta tienda : $45.000</h4>                     
                    </div>

                ))}
                <div className="cart-footer">
                    <h1>Total a Pagar</h1>
                    <h1>$67.900</h1>
                    <div className="pay-button">Pagar</div>
                </div>
            </section>
        </div>
    )
}

export default Cart
