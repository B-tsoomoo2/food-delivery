import { Category } from "@/lib/types/common";
import { FoodCard } from "./FoodCard";

type FoodCategoryProps = {
  category: Category;
};

export const FoodCategory = (props: FoodCategoryProps) => {
  const { category } = props;

  return (
    <section className="flex w-full flex-col gap-9">
      <h2 className="text-[30px] font-semibold tracking-[-0.75px] text-white">
        {category.name}
      </h2>

      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-3">
        {category.foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
};
