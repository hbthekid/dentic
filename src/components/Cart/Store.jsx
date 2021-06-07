import React, { useState, useEffect, useContext } from 'react'
import _ from 'underscore'
import Product from './Product'
import '../../pages/Cart/Cart'

function Store({ store, items }) {
    const products = _.groupBy(items, (e) => e.name);
    return (
        <div className="store-container">
            <div className="badge-store-cart">{store}</div>
            {
                Object.keys(products).map((e) => (<Product name={e} store={store} items={items} />))
            }
            <h4 className="final-store">Total en esta tienda : ${0}</h4>
        </div>
    )
}

export default Store
