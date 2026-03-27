export const addCategory = async (name: string) => {
  await fetch("http://localhost:3000/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
    }),
  });
};
