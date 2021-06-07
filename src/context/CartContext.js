import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
const initialCartState = {
    total: 0,
    totalByStore:{},
    products: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART": {
            return { total: state.total + action.value.price, products: [...state.products, { ...action.value }] }
        }
        case "DELETE_ITEM": {
            let idx = state.products.findIndex(p => p.name === action.value.name);
            return { total: state.total - action.value.price, products: state.products.splice(idx, 0) }
        }
        case "DELETE_ALL": {
            return { total: state.total - (action.value.price * action.value.number), products: state.products.filter((e) => e.name !== action.value.name) }
        }
        default:
            return state;
    }
};

export const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialCartState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};