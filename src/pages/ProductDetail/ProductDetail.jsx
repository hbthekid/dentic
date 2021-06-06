import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import './ProductDetail.css'
import Navbar from '../../components/Navbar/Navbar'

function ProductDetail({ location: { state } }) {
    const { dispatch } = useContext(CartContext);
    useEffect(() => {
        console.log(state)
    })
    const handleClick = () => {
        dispatch({
            type: "ADD_CART",
            value: 'ooooooo',
        })
    }
    return (
        <>
            <Navbar />
            <main className="main">
                <div className="content">
                    <div className="image">
                        <img className="imagen" src="https://s3-sa-east-1.amazonaws.com/buze-backoffice-product-images/1b3f784c-6541-4806-972e-de6ee7c8293d-lg.jpg" />
                    </div>
                    <div className="product-details">
                        <div className="product-details-top">
                            <div className="details-top">
                                <h1 className="title-item">{state.name}</h1>
                                <div className="badge-store">{state.store}</div>
                            </div>
                            <div className="details-bottom">
                                <p className="details-display">{state['units-in-pack']}</p>
                                <div className="details-price-container">
                                    <h4 className="details-price">${state.price}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="product-details-bottom">
                            <button className="button-add" onClick={handleClick}>Agregar al carro</button>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <div className="description-title">Descripción</div>
                    <div className="description-content"><p>{state.description}</p></div>
                </div>
            </main>
        </>
    )
}

export default ProductDetail
