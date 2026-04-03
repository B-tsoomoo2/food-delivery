export type Food = {
  id: number;
  name: string;
  price: number | string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
};

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  foods: Food[];
};
