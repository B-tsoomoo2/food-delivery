"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useContext } from "react";
import { CartContext } from "../_contexts/CartContext";

export function CartSheet() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.food.price) * item.quantity,
    0
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Cart ({cart.length})</Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your cart</SheetTitle>
        </SheetHeader>

        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          {cart.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              Your cart is empty.
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.food.id}
                className="flex items-center justify-between gap-4 border-b pb-3"
              >
                <div>
                  <h2 className="font-medium">{item.food.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
                <p className="font-medium">
                  {(Number(item.food.price) * item.quantity).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>

        <SheetFooter>
          <Button type="button" className="w-full">
            Checkout {totalPrice > 0 ? `(${totalPrice.toLocaleString()})` : ""}
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
