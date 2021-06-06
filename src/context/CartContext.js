import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
const initialCartState = [];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            {
                return [...state, { ...action.value }];
            }
        case "DELETE_ITEM": {
            let idx = state.findIndex(p => p.name === action.value.name);
            return state.splice(idx, 1)
        }
        case "DELETE_ALL": {

            return state.filter((e) => e.name !== action.value.name)
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

/*

            console.log(state)
            const index = state.findIndex(e => (e.name === action.value.name) && (e.store === action.value.store))
            if (index > -1) {
                state.splice(index, 1)
                return [...state]
            }
*/