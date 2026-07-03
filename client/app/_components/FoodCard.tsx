"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { useContext } from "react";

import { CartContext } from "../_contexts/CartContext";
import { Food } from "@/lib/types/common";

type FoodCardProps = {
  food: Food;
};

const formatPrice = (price: number | string) => {
  const value = Number(price);

  if (Number.isNaN(value)) {
    return String(price);
  }

  return `$${value.toFixed(2)}`;
};

export const FoodCard = (props: FoodCardProps) => {
  const { food } = props;
  const { openFoodDetail } = useContext(CartContext);

  return (
    <article className="flex h-full flex-col gap-5 rounded-[20px] bg-white p-4">
      <div className="relative min-h-[180px] flex-1 overflow-hidden rounded-xl">
        <Image
          src="/food-card-placeholder.svg"
          alt={food.name}
          fill
          className="object-cover"
        />
        <button
          type="button"
          aria-label={`View ${food.name} details`}
          onClick={() => openFoodDetail(food)}
          className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-white text-red-500 shadow-sm transition-colors hover:bg-zinc-50"
        >
          <Plus className="size-4" strokeWidth={2.5} />
        </button>
      </div>

      <button
        type="button"
        onClick={() => openFoodDetail(food)}
        className="flex flex-col gap-2 text-left"
      >
        <div className="flex items-start justify-between gap-2.5">
          <h3 className="flex-1 text-2xl font-semibold tracking-[-0.6px] text-red-500">
            {food.name}
          </h3>
          <p className="shrink-0 text-lg font-semibold text-zinc-950">
            {formatPrice(food.price)}
          </p>
        </div>
        <p className="text-sm leading-5 text-zinc-950">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </button>
    </article>
  );
};
