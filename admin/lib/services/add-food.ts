export const addFood = async (name: string) => {
  await fetch("http://localhost:3000/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
};
