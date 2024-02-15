"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface CartItem {
  productId: number;
  amount: number;
}

interface CartContextType {
  items: Array<CartItem>;
  addToCart: (productId: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<Array<CartItem>>([]);

  function addToCart(productId: number) {
    setCartItems((state) => {
      const productInCart = state.find((item) => item.productId == productId);

      if (productInCart) {
        return state.map((item) =>
          item.productId == productId
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }

      return [...state, { productId, amount: 1 }];
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
