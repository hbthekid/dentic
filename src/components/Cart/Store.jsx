import React, { useState, useEffect, useContext } from 'react'
import _ from 'underscore'
import Product from './Product'
import '../../pages/Cart/Cart'

function Store({ store, items }) {
    const products = _.groupBy(items, (e) => e.name);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(items.length * items[0].price)
    }, [])

    return (
        <div className="store-container">
            <div className="badge-store-cart">{store}</div>
            {
                Object.keys(products).map((e) => (<Product name={e} store={store} items={items} />))
            }
            <h4 className="final-store">Total en esta tienda : ${total}</h4>
        </div>
    )
}

export default Store
