export interface Category {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
}

export interface Food {
  id: number;
  name: string;
  price: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
}

export const getCategories = async (): Promise<Category[]> => {
  const data = await fetch("http://localhost:8080/categories");
  const categories = await data.json();

  return categories;
};
