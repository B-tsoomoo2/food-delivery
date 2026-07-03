"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { CartContext } from "../_contexts/CartContext";

const SHIPPING_FEE = 0.99;

type DrawerTab = "cart" | "order";

export function CartSheet() {
  const { cart, isCartOpen, setCartOpen, updateQuantity } =
    useContext(CartContext);
  const [activeTab, setActiveTab] = useState<DrawerTab>("cart");

  const itemsTotal = cart.reduce(
    (total, item) => total + Number(item.food.price) * item.quantity,
    0
  );
  const totalPrice = itemsTotal + SHIPPING_FEE;

  const browseFood = () => {
    setCartOpen(false);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-full gap-0 border-none bg-zinc-900 p-0 text-zinc-50 sm:max-w-[535px]"
      >
        <SheetTitle className="sr-only">Order detail</SheetTitle>

        <div className="flex items-center justify-between px-8 pb-4 pt-8">
          <div className="flex items-center gap-2">
            <ShoppingCart className="size-5 text-zinc-50" strokeWidth={1.75} />
            <h2 className="text-xl font-semibold tracking-[-0.5px] text-zinc-50">
              Order detail
            </h2>
          </div>

          <SheetClose asChild>
            <button
              type="button"
              aria-label="Close order detail"
              className="flex size-9 items-center justify-center rounded-full text-zinc-50 transition-colors hover:bg-zinc-800"
            >
              <X className="size-5" strokeWidth={1.75} />
            </button>
          </SheetClose>
        </div>

        <div className="px-8 pb-6">
          <div className="flex rounded-full bg-white p-1">
            <button
              type="button"
              onClick={() => setActiveTab("cart")}
              className={cn(
                "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeTab === "cart"
                  ? "bg-red-500 text-white"
                  : "text-zinc-900"
              )}
            >
              Cart
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("order")}
              className={cn(
                "flex-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeTab === "order"
                  ? "bg-red-500 text-white"
                  : "text-zinc-900"
              )}
            >
              Order
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-8 pb-8">
          {activeTab === "cart" ? (
            <>
              <section className="rounded-xl bg-white p-4 text-zinc-950">
                <h3 className="text-base font-semibold">My cart</h3>

                {cart.length === 0 ? (
                  <div className="flex min-h-[220px] flex-col items-center justify-center gap-6 py-8">
                    <p className="text-sm text-zinc-500">Your cart is empty</p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={browseFood}
                      className="h-9 rounded-full border-red-500 px-4 text-sm font-medium text-red-500 hover:bg-red-50"
                    >
                      Add food
                    </Button>
                  </div>
                ) : (
                  <div className="mt-4 flex flex-col gap-6">
                    {cart.map((item) => (
                      <div key={item.food.id} className="flex gap-4">
                        <div className="relative h-[120px] w-[124px] shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                          <Image
                            src="/food-card-placeholder.svg"
                            alt={item.food.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col justify-between py-1">
                          <div>
                            <h4 className="text-base font-semibold text-zinc-950">
                              {item.food.name}
                            </h4>
                            <p className="mt-1 line-clamp-2 text-sm text-zinc-500">
                              Fluffy pancakes stacked with fruits, cream, syrup,
                              and powdered sugar.
                            </p>
                          </div>

                          <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <button
                                type="button"
                                aria-label={`Decrease ${item.food.name} quantity`}
                                onClick={() =>
                                  updateQuantity(
                                    item.food.id,
                                    item.quantity - 1
                                  )
                                }
                                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50"
                              >
                                <Minus className="size-4" />
                              </button>
                              <span className="min-w-4 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                aria-label={`Increase ${item.food.name} quantity`}
                                onClick={() =>
                                  updateQuantity(
                                    item.food.id,
                                    item.quantity + 1
                                  )
                                }
                                className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-50"
                              >
                                <Plus className="size-4" />
                              </button>
                            </div>

                            <p className="text-base font-semibold text-zinc-950">
                              $
                              {(
                                Number(item.food.price) * item.quantity
                              ).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      type="button"
                      variant="outline"
                      onClick={browseFood}
                      className="h-9 w-full rounded-full border-red-500 text-sm font-medium text-red-500 hover:bg-red-50"
                    >
                      Add food
                    </Button>
                  </div>
                )}
              </section>

              <section className="rounded-xl bg-white p-4 text-zinc-950">
                <h3 className="text-base font-semibold">Payment info</h3>

                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>Items</span>
                    <span>${itemsTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-500">
                    <span>Shipping</span>
                    <span>{SHIPPING_FEE.toFixed(2)}$</span>
                  </div>
                </div>

                <div className="my-4 border-t border-dashed border-zinc-200" />

                <div className="mb-4 flex items-center justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <Button
                  type="button"
                  className="h-11 w-full rounded-full bg-red-500 text-base font-medium text-white hover:bg-red-600"
                >
                  Checkout
                </Button>
              </section>
            </>
          ) : (
            <section className="rounded-xl bg-white p-8 text-center text-zinc-950">
              <p className="text-sm text-zinc-500">No active orders yet.</p>
            </section>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
