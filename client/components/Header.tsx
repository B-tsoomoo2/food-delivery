"use client";

import Image from "next/image";
import { ChevronRight, MapPin, ShoppingCart, UserRound } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-zinc-900">
      <div className="mx-auto flex min-h-[68px] w-full max-w-[1440px] items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-[88px]">
        <div className="flex items-center gap-3">
          <Image
            src="/foodorder.svg"
            alt="NomNom logo"
            width={46}
            height={38}
            className="h-[37px] w-[46px] shrink-0"
            priority
          />

          <div className="flex flex-col">
            <span className="text-[20px] leading-7 font-semibold tracking-[-0.025em] text-zinc-50">
              Nom
              <span className="text-red-500">Nom</span>
            </span>
            <span className="text-xs leading-4 text-zinc-100">Swift delivery</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-9 items-center gap-1 rounded-full bg-white px-3 text-left shadow-[0_1px_2px_rgba(0,0,0,0.08)] md:flex"
          >
            <MapPin className="h-5 w-5 text-red-500" strokeWidth={1.75} />
            <span className="text-xs leading-4 font-normal text-red-500">
              Delivery address:
            </span>
            <span className="text-xs leading-4 font-normal text-zinc-500">
              Add Location
            </span>
            <ChevronRight className="h-5 w-5 text-zinc-500/70" strokeWidth={1.75} />
          </button>

          <button
            type="button"
            aria-label="Shopping cart"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            <ShoppingCart className="h-4 w-4" strokeWidth={1.9} />
          </button>

          <div className="relative">
            <button
              type="button"
              aria-label="User profile"
              aria-expanded={isProfileOpen}
              onClick={() => setIsProfileOpen((current) => !current)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-zinc-50 transition-colors hover:bg-red-600"
            >
              <UserRound className="h-4 w-4" strokeWidth={1.9} />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 top-14 flex w-[188px] flex-col items-center justify-center gap-2 rounded-xl bg-white p-4 shadow-[0_18px_50px_rgba(24,24,27,0.18)]">
                <p className="text-center text-[20px] leading-7 font-semibold tracking-[-0.025em] text-zinc-950">
                  test@gmail.com
                </p>
                <button
                  type="button"
                  className="rounded-full bg-zinc-100 px-3 py-2 text-sm leading-5 font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
                >
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <button
          type="button"
          className="mx-auto flex h-9 w-full max-w-md items-center gap-1 rounded-full bg-white px-3 text-left shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
        >
          <MapPin className="h-5 w-5 text-red-500" strokeWidth={1.75} />
          <span className="text-xs leading-4 font-normal text-red-500">
            Delivery address:
          </span>
          <span className="text-xs leading-4 font-normal text-zinc-500">
            Add Location
          </span>
          <ChevronRight className="ml-auto h-5 w-5 text-zinc-500/70" strokeWidth={1.75} />
        </button>
      </div>
    </header>
  );
};
