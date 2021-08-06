import React, { createContext, useReducer, useState } from 'react';
import shirt1 from '../img/shirt1.jpg';
import AppReducer from './AppReducer.js';
//*Define Intial State
const intialState = {
  cart: [],
  product: {},
};
//*Creating the GlobalContext
export const GlobalContext = createContext(intialState);

//*Provider function to gives access to all the component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  function deleteCart(item) {
    dispatch({
      type: 'DEL_CART',
      payload: item,
    });
  }

  function displayProduct(data) {
    dispatch({
      type: 'PRODUCT_DISPLAY',
      payload: data,
    });
  }

  function addToCart(data) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: data,
    });
  }

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART',
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        cart: state.cart,
        product: state.product,
        addToCart,
        deleteCart,
        displayProduct,
        clearCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
