import { Category } from "@/lib/types/common";

const API_URL = process.env.API_URL ?? "http://localhost:8080";

export const getCategories = async (): Promise<{ categories: Category[] }> => {
  const response = await fetch(`${API_URL}/categories`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories = (await response.json()) as Category[];

  return { categories };
};
