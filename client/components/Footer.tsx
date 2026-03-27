"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const promoItems = Array.from({ length: 5 }, () => "Fresh fast delivered");

const companyLinks = ["Home", "Contact us", "Delivery zone"];
const menuColumnOne = ["Appetizers", "Salads", "Pizzas", "Main dishes", "Desserts"];
const menuColumnTwo = ["Side dish", "Brunch", "Desserts", "Beverages", "Fish & Sea foods"];
const legalLinks = ["Privacy policy", "Terms and conditoin", "Cookie policy"];

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-50">
      <div className="overflow-hidden bg-red-500">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-10 px-6 py-7 sm:px-8 lg:px-[98px]">
          {promoItems.map((item, index) => (
            <p
              key={`${item}-${index}`}
              className="shrink-0 whitespace-nowrap text-3xl leading-9 font-semibold tracking-[-0.025em]"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-6 py-16 sm:px-8 lg:px-[88px] lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-fit flex-col items-start gap-3">
            <Image
              src="/foodorder.svg"
              alt="NomNom logo"
              width={46}
              height={38}
              className="h-[37px] w-[46px]"
            />
            <div className="flex flex-col">
              <span className="text-[20px] leading-7 font-semibold tracking-[-0.025em] text-zinc-50">
                Nom
                <span className="text-red-500">Nom</span>
              </span>
              <span className="text-xs leading-4 text-zinc-100">Swift delivery</span>
            </div>
          </div>

          <div className="grid flex-1 gap-10 md:grid-cols-2 xl:grid-cols-[122px_320px_122px] xl:justify-end xl:gap-28">
            <div className="flex flex-col gap-4">
              <h3 className="text-base leading-7 font-normal uppercase text-zinc-500">
                NomNom
              </h3>
              <div className="flex flex-col gap-4 text-[16px] leading-6 text-zinc-50">
                {companyLinks.map((link) => (
                  <Link key={link} href="#" className="transition-colors hover:text-red-400">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-base leading-7 font-normal uppercase text-zinc-500">
                Menu
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-14">
                <div className="flex flex-col gap-4 text-[16px] leading-6 text-zinc-50">
                  {menuColumnOne.map((link) => (
                    <Link key={link} href="#" className="transition-colors hover:text-red-400">
                      {link}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4 text-[16px] leading-6 text-zinc-50">
                  {menuColumnTwo.map((link) => (
                    <Link key={link} href="#" className="transition-colors hover:text-red-400">
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-base leading-7 font-normal uppercase text-zinc-500">
                Follow us
              </h3>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="text-zinc-50 transition-colors hover:text-red-400"
                >
                  <Facebook className="h-7 w-7" strokeWidth={2.25} />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="text-zinc-50 transition-colors hover:text-red-400"
                >
                  <Instagram className="h-7 w-7" strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-zinc-100/40 pt-8 text-sm leading-5 text-zinc-500 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex flex-wrap items-center gap-1">
            <span>Copy right 2024</span>
            <span>&copy;</span>
            <span>Nomnom LLC</span>
          </div>

          {legalLinks.map((link) => (
            <Link key={link} href="#" className="transition-colors hover:text-zinc-300">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
