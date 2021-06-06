import React, { useContext, useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md'
import '../../pages/Cart/Cart'
import { CartContext } from '../../context/CartContext'

function Product({ name, items, store }) {
    const { state, dispatch } = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const totalProduct = state.products.filter((e) => { return e.name === name })

    useEffect(() => {
        setTotal(totalProduct.length * items[0].price)
    }, [])

    const handleClick = (e) => {
        dispatch({
            type: 'DELETE_ITEM',
            value: {
                name: name,
            }
        })
    }
    const deleteAll = () => {
        dispatch({
            type: 'DELETE_ALL',
            value: {
                name: name,
            }
        })
    }
    return (
        <div className="product">
            <h4 className="name">{name}</h4>
            <div className="actions-container">
                <div className="quantity-container">
                <div className="less" onClick={handleClick}>-</div>
                    <div className="badge-number">{totalProduct.length}</div>
                    <div className="plus">+</div>
                </div>
                <div className="delete-btn" onClick={deleteAll}>
                    <MdDelete className="delete-btn" size={20} />
                </div>
                <div className="total-price-store">${total}</div>
            </div>
        </div>
    )
}

export default Product
