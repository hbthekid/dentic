import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import './ProductDetail.css'
import Navbar from '../../components/Navbar/Navbar'

function ProductDetail({ location: { state } }) {
    const { dispatch } = useContext(CartContext);
    useEffect(() => {
    })
    const handleClick = () => {
        dispatch({
            type: "ADD_CART",
            value: {
                name: state.name,
                store: state.store,
                price: state.price,
                id: state.id
            },
        })
    }
    return (
        <>
            <Navbar />
            <main className="main">
                <div className="content">
                    <div className="image">
                        <img className="imagen" src={state.image} />
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
