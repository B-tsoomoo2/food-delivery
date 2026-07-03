"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CartContext } from "../_contexts/CartContext";

export const FoodDetailDialog = () => {
  const {
    selectedFood,
    isFoodDetailOpen,
    closeFoodDetail,
    addToCart,
    setCartOpen,
  } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (isFoodDetailOpen) {
      setQuantity(1);
    }
  }, [isFoodDetailOpen, selectedFood?.id]);

  if (!isFoodDetailOpen || !selectedFood) {
    return null;
  }

  const unitPrice = Number(selectedFood.price);
  const totalPrice = Number.isNaN(unitPrice) ? 0 : unitPrice * quantity;

  const onAddToCart = () => {
    addToCart(selectedFood, quantity);
    closeFoodDetail();
    setCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close food detail"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeFoodDetail}
      />

      <div className="relative flex w-full max-w-[826px] flex-col gap-6 overflow-hidden rounded-[20px] bg-white p-6 shadow-xl sm:flex-row">
        <button
          type="button"
          aria-label="Close"
          onClick={closeFoodDetail}
          className="absolute right-6 top-6 z-10 flex size-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 sm:left-auto"
        >
          <X className="size-4" />
        </button>

        <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-xl sm:h-[364px] sm:w-[48%]">
          <Image
            src="/food-card-placeholder.svg"
            alt={selectedFood.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 pt-2 sm:min-h-[364px] sm:pt-0">
          <div className="space-y-3 pr-10 sm:pr-12">
            <h2 className="text-[30px] font-semibold leading-9 tracking-[-0.75px] text-red-500">
              {selectedFood.name}
            </h2>
            <p className="text-base leading-6 text-zinc-950">
              Fluffy pancakes stacked with fruits, cream, syrup, and powdered
              sugar.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-base text-zinc-950">Total price</p>
                <p className="text-2xl font-semibold tracking-[-0.6px] text-zinc-950">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="flex size-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-900"
                >
                  <Minus className="size-4" />
                </button>
                <span className="min-w-5 text-center text-lg font-semibold">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="flex size-11 items-center justify-center rounded-full border border-zinc-900 text-zinc-900"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            <Button
              type="button"
              onClick={onAddToCart}
              className="h-11 w-full rounded-full bg-zinc-900 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
