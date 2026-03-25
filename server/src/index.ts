import categoriesRouter from "./router/categories.router";
import express from "express";
import foodsRouter from "./router/foods.router";
import ordersRouter from "./router/orders.router";
import usersRouter from "./router/users.router";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: true }));

app.use("/categories", categoriesRouter);
app.use("/foods", foodsRouter);
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
