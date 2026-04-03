"use client";

import { useContext, useState } from "react";
import { CircleMinus, CirclePlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CartContext } from "../_contexts/CartContext";
import { Food } from "@/lib/types/common";

type FoodCardProps = {
  food: Food;
};

export const FoodCard = (props: FoodCardProps) => {
  const { food } = props;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const minusQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  };

  const onAdd = () => {
    addToCart(food, quantity);
  };

  return (
    <div className="flex gap-2">
      {/* <h1>{food.name}</h1>
      <p>{food.price}</p> */}
      <Card className="w-75">
        <CardHeader>
          <CardTitle>{food.name}</CardTitle>
          <CardDescription>
            {Number(food.price).toLocaleString()}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex gap-2">
            <CircleMinus onClick={minusQuantity} />
            {quantity}
            <CirclePlus onClick={addQuantity} />
          </div>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button type="button" className="w-full" onClick={onAdd}>
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
