import { FoodCategory } from "./_components/FoodCategory";
import { getCategories } from "@/lib/services/get-categories";
import AddFood from "./_components/AddFood";

const FoodsPage = async () => {
  const categories = await getCategories();

  return (
    <div>
      <section className="mt-8 border-radius: 28px; border border-white bg-white px-9 py-10 shadow-sm">
        <h1 className="text-[24px] font-semibold  text-black">
          Dishes category
        </h1>

        <div className="mt-8 flex w-full flex-wrap gap-4">
          {categories.map((category) => (
            <FoodCategory
              key={category.id}
              name={category.name}
              count={category.foods.length}
            />
          ))}

          <FoodCategory name="Add" count={0} isAddButton />
        </div>
      </section>
      <AddFood />
    </div>
  );
};

export default FoodsPage;
