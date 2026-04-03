export const addFood = async (name: string) => {
  await fetch(`${process.env.API_URL}/foods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
};
