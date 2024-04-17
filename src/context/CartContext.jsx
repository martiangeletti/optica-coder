import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isItemInCart(item.id)) {
      const updatedCart = cart.map((cartItem) => {
        if (cartItem.item.id === item.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity
          };
        } else {
          return cartItem;
        }
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { item, quantity }]);
    }
  };

  const removeItemFromCart = (itemId, quantityToRemove) => {
    const updatedCart = cart
      .map((cartItem) => {
        if (cartItem.item.id === itemId) {
          const newQuantity = cartItem.quantity - quantityToRemove;
          return { ...cartItem, quantity: newQuantity };
        } else {
          return cartItem;
        }
      })
      .filter((cartItem) => cartItem.quantity > 0);

    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isItemInCart = (id) => {
    return cart.some((itemCart) => itemCart.item.id === id);
  };

  const totalPrice = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.quantity, 0);
  };

  const totalQuantity = () => {
    return cart.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItemFromCart,
        clearCart,
        totalPrice,
        totalQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};