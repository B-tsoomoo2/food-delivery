export const addCategory = async (name: string) => {
  await fetch(`${process.env.API_URL}/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
};
