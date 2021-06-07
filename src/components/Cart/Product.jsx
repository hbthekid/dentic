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
                price: items[0].price
            }
        })
    }
    const addProduct = () => {
        dispatch({
            type: "ADD_CART",
            value: {
                name: items[0].name,
                store: items[0].store,
                price: items[0].price,
                id: items[0].id
            },
        })
    }
    const deleteAll = () => {
        dispatch({
            type: 'DELETE_ALL',
            value: {
                name: name,
                price: items[0].price,
                number: items.length
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
                    <div className="plus" onClick={addProduct}>+</div>
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
