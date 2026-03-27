import Image from "next/image";
import { Plus } from "lucide-react";

type CardProps = {
  name: string;
  price: string;
  description?: string;
};

export const Card = ({ name, price, description }: CardProps) => {
  return (
   
    <article className="flex h-full flex-col gap-5 rounded-[20px] bg-white p-4 shadow-[0_10px_30px_rgba(24,24,27,0.08)]">
        
      <div className="relative min-h-[210px] overflow-hidden rounded-xl">
        <Image
          src="/food-card-placeholder.svg"
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />

        <button
          type="button"
          aria-label={`Add ${name}`}
          className="absolute right-5 bottom-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-red-500 shadow-[0_10px_25px_rgba(24,24,27,0.14)] transition-transform hover:scale-105"
        >
          <Plus className="h-4 w-4" strokeWidth={2.25} />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-[24px] leading-8 font-semibold tracking-[-0.025em] text-red-500">
            {name}
          </h3>
          <p className="shrink-0 text-[18px] leading-7 font-semibold text-zinc-950">
            ${price}
          </p>
        </div>

        <p className="text-sm leading-5 text-zinc-950">
          {description ??
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."}
        </p>
      </div>
    </article>
  );
};
