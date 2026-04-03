import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).send("API ажиллаж байна 🚀");
  } catch (error) {
    res.status(500).json({
      message: "Route crashed",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default app;