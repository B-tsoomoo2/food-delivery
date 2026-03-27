import { Card } from "@/components/Card";
// import { HeroSection } from "@/components/HeroSection";

type FetchCategoriesResponse = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: {
    id: number;
    name: string;
    price: string;
    foodCategoryId: number;
    createdAt: string;
    updatedAt: string;
  }[];
}[];

export const dynamic = "force-dynamic";

const fetchCategories = async (): Promise<FetchCategoriesResponse> => {
  const apiBaseUrl = process.env.API_BASE_URL ?? "http://127.0.0.1:3000";

  try {
    const response = await fetch(`${apiBaseUrl}/categories`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }

    const data = (await response.json()) as FetchCategoriesResponse;
    return data;
  } catch (error) {
    console.error("Unable to load categories", error);
    return [];
  }
};

const Home = async () => {
  const categories = await fetchCategories();

  return (
    <main className="flex-1 bg-zinc-50 px-4 py-8 text-zinc-950 sm:px-6 lg:px-[88px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
        <div className="lg:-mx-[88px]">{/* <HeroSection /> */}</div>

        {categories.length === 0 && (
          <section className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
            <h1 className="text-2xl font-semibold tracking-[-0.025em] text-zinc-950">
              Menu is unavailable right now
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
              The app could not reach the backend service at{" "}
              <span className="font-medium text-zinc-700">
                {process.env.API_BASE_URL ?? "http://127.0.0.1:3000"}
              </span>
              . Start the server and refresh the page.
            </p>
          </section>
        )}

        {categories.map((category) => (
          <section
            key={category.id}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h1 className="text-2xl font-semibold tracking-[-0.025em]">
              {category.name}
            </h1>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {category.foods.map((food) => {
                return (
                  <Card
                    key={food.id}
                    name={food.name}
                    price={food.price}
                    description={`Freshly prepared ${food.name.toLowerCase()} made for quick delivery and full flavor.`}
                  />
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Home;
