import { getCategories } from "@/lib/services/get-categories";
import { HeroSection } from "@/components/HeroSection";
import { FoodCategory } from "./_components/FoodCategory";
import { CartSheet } from "./_components/CartSheet";
import { FoodDetailDialog } from "./_components/FoodDetailDialog";

export default async function Home() {
  const { categories } = await getCategories();

  const filteredCategories = categories.filter(
    (category) => category.foods.length > 0
  );

  return (
    <>
      <HeroSection />

      <main
        id="food-menu"
        className="mx-auto flex w-full max-w-[1264px] scroll-mt-24 flex-col gap-[88px] px-4 py-[88px] sm:px-6 lg:px-[88px]"
      >
        {filteredCategories.map((category) => (
          <FoodCategory key={category.id} category={category} />
        ))}
      </main>

      <CartSheet />
      <FoodDetailDialog />
    </>
  );
}
