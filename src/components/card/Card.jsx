import React from 'react'
import './Card.css'
import { MdLocalGroceryStore } from 'react-icons/md'
import { useHistory } from 'react-router-dom';

function Card({ item }) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/product/id`);
    };

    return (
        <div className="card" onClick={handleClick}>
            <div className="card-add">
                <MdLocalGroceryStore size={20} color="white" />
            </div>
            <div className="card-header">
                <img className="card-image" src="https://s3-sa-east-1.amazonaws.com/buze-backoffice-product-images/1b3f784c-6541-4806-972e-de6ee7c8293d-lg.jpg" />
            </div>
            <div className="card-content">
                <h2 className="card-content-title">{item.name}</h2>
                <p>{item['units-in-pack']}</p>
                <p>${item.price}</p>
            </div>
            {
                item['fast-shipping'] ? <div className="card-shipping">
                    Envio rapido
            </div> :
                    null
            }
        </div>
    )
}

export default Card
