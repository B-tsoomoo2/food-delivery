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
  updateQuantity: (foodId: number, quantity: number) => void;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  selectedFood: Food | null;
  isFoodDetailOpen: boolean;
  openFoodDetail: (food: Food) => void;
  closeFoodDetail: () => void;
};

export const CartContext = createContext({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({
  children,
}: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);
  const [isFoodDetailOpen, setFoodDetailOpen] = useState(false);

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

  const updateQuantity = (foodId: number, quantity: number) => {
    setCart((currentCart) => {
      if (quantity <= 0) {
        return currentCart.filter((item) => item.food.id !== foodId);
      }

      return currentCart.map((item) =>
        item.food.id === foodId ? { ...item, quantity } : item
      );
    });
  };

  const openFoodDetail = (food: Food) => {
    setSelectedFood(food);
    setFoodDetailOpen(true);
  };

  const closeFoodDetail = () => {
    setFoodDetailOpen(false);
    setSelectedFood(null);
  };

  const value = {
    cart,
    addToCart,
    updateQuantity,
    isCartOpen,
    setCartOpen,
    selectedFood,
    isFoodDetailOpen,
    openFoodDetail,
    closeFoodDetail,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
