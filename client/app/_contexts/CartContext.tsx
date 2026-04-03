"use client";

import { Food } from "@/lib/types/common";
import { createContext, ReactNode, useState } from "react";

export type CartItem = {
  food: Food;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (food: Food, quantity: number) => void;
};

export const CartContext = createContext({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({
  children,
}: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (food: Food, quantity: number) => {
    setCart((currentCart) => {
      const existingFood = currentCart.find((item) => item.food.id === food.id);

      if (existingFood) {
        return currentCart.map((item) =>
          item.food.id === food.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...currentCart, { food, quantity }];
    });
  };

  const value = {
    cart,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
