import Image from "next/image";
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

const salads = [
  {
    id: 1,
    name: "Chicken Caesar Salad",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    id: 2,
    name: "Greek Garden Salad",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

const pizzas = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    id: 2,
    name: "Veggie Supreme Pizza",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

const lunchFavorites = [
  {
    id: 1,
    name: "Chicken Teriyaki Bowl",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
  {
    id: 2,
    name: "Beef Rice Plate",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
  },
];

const FoodArtwork = () => {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-[14px]">
      <Image
        src="/chad.jpg"
        alt="Food"
        fill
        className="object-cover"
        sizes=" w-screen  320px"
      />
    </div>
  );
};

const FoodCard = ({
  sectionName,
  name,
  description,
  price,
}: {
  sectionName: string;
  name: string;
  description: string;
  price: string;
}) => {
  return (
    <div className="rounded-[18px]  bg-white p-2.5">
      <div className="relative overflow-hidden rounded-[14px]">
        <FoodArtwork />

        <FoodAddDialog
          mode="edit"
          sectionName={sectionName}
          initialFood={{
            foodName: name,
            price: price.replace("$", ""),
            ingredients: description,
            category: sectionName,
          }}
        />
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

const FoodSection = ({
  title,
  foods,
}: {
  title: string;
  foods: {
    id: number;
    name: string;
    price: string;
    description: string;
  }[];
}) => {
  return (
    <div className="rounded-[18px] bg-white p-4 md:p-5">
      <div className="flex items-center gap-2">
        <h2 className="text-[24px] leading-8 font-semibold text-[#18181B]">
          {title}
        </h2>
        <span className="text-[24px] leading-8 font-semibold text-[#18181B]">
          ({foods.length})
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
        <FoodAddDialog sectionName={title} />
        {foods.map((food) => (
          <FoodCard
            key={food.id}
            sectionName={title}
            name={food.name}
            description={food.description}
            price={food.price}
          />
        ))}
      </div>
    </div>
  );
};

export const AddFood = () => {
  return (
    <div className="mt-5 space-y-5 ">
      <FoodSection title="Appetizers" foods={appetizers} />
      <FoodSection title="Salads" foods={salads} />
      <FoodSection title="Pizzas" foods={pizzas} />
      <FoodSection title="Lunch favorites" foods={lunchFavorites} />
    </div>
  );
};

export default AddFood;
