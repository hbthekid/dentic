import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initialCartState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            {
                return [...state, action.value];
            }
        case "DELETE_ITEM": {
            return []
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