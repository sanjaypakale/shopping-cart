// CartContext.js
import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, { ...action.product, quantity: 1 }];
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
