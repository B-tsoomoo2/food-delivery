import { Category } from "@/lib/types/common";

const API_URL = process.env.API_URL ?? "http://localhost:8080";

export const getCategories = async (): Promise<{ categories: Category[] }> => {
  try {
    const response = await fetch(`${API_URL}/categories`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return { categories: [] };
    }

    const categories = (await response.json()) as Category[];

    return { categories };
  } catch {
    return { categories: [] };
  }
};
