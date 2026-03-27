import Image from "next/image";
import { Pencil } from "lucide-react";
import { FoodAddDialog } from "./AddFoodDialog";

const appetizers = [
  {
    id: 1,
    name: "Brie Crostini Appetizer",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    id: 2,
    name: "Brie Crostini Appetizer",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

const AppetizerArtwork = () => {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-[14px]">
      <Image
        src="/chad.jpg"
        alt="Appetizer"
        fill
        className="object-cover"
        sizes=" w-screen  320px"
      />
    </div>
  );
};

const FoodCard = ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) => {
  return (
    <div className="rounded-[18px]  bg-white p-2.5">
      <div className="relative overflow-hidden rounded-[14px]">
        <AppetizerArtwork />

        <button
          type="button"
          className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full bg-white transition hover:bg-[#FFF5F5]"
        >
          <Pencil className="size-3.5" strokeWidth={2.6} />
        </button>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="text-[16px] leading-5 font-medium text-[#EF4444]">
          {name}
        </h3>
        <span className="shrink-0 pt-0.5 text-[14px] font-medium text-[#3F3F46]">
          {price}
        </span>
      </div>

      <p className="mt-2 text-[13px] leading-5 text-[#52525B]">{description}</p>
    </div>
  );
};

export const AddFood = () => {
  return (
    <div className="mt-5 rounded-[18px] bg-white p-4 md:p-5">
      <div className="flex items-center gap-2">
        <h2 className="text-[24px] leading-8 font-semibold text-[#18181B]">
          Appetizers
        </h2>
        <span className="text-[24px] leading-8 font-semibold text-[#18181B]">
          ({appetizers.length})
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <FoodAddDialog />
        {appetizers.map((appetizer) => (
          <FoodCard
            key={appetizer.id}
            name={appetizer.name}
            description={appetizer.description}
            price={appetizer.price}
          />
        ))}
      </div>
    </div>
  );
};

export default AddFood;
