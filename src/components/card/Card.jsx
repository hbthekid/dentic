import React from 'react'
import './Card.css'
import { MdLocalGroceryStore } from 'react-icons/md'
import { useHistory } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'


function Card({ item }) {
    const history = useHistory();
    const { dispatch } = useContext(CartContext);

    const handleClick = () => {
        history.push({
            pathname: `/product/${item.id}`,
            state: item
        });
    };
    const handleAdd = () => {
        dispatch({
            type: "ADD_CART",
            value: {
                name: item.name,
                store: item.store,
                price: item.price,
                id: item.id
            },
        })
    }

    return (
        <div className="card" onClick={handleClick}>
            <div className="card-add" onClick={handleAdd}>
                <MdLocalGroceryStore size={20} color="white" />
            </div>
            <div className="card-header">
                <img className="card-image" src={item.image} />
            </div>
            <div className="card-content">
                <h2 className="card-content-title">{item.name}</h2>
                <p>{item['units-in-pack']}</p>
                <p>${item.price}</p>
            </div>
            {
                item.fastShipping ? <div className="card-shipping">
                    Envio rapido
            </div> :
                    null
            }
        </div>
    )
}

export default Card
