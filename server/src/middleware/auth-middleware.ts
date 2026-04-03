import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type JWTPayload = {
  data: {
    userId: number;
    email: string;
    role: "USER" | "ADMIN" | "MODERATOR" | "GUEST" | "SUPERADMIN";
  };
};

export const authMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.headers.authorization;

 
  if (!authorization) {
    return res.status(400).send({ message: "invalid" });
  }

 
  const accessToken = authorization.split(" ")[1];
  console.log("TOKEN:", accessToken);

  try {
    
    const decoded = jwt.verify(
      accessToken,
      process.env.JWT_SECRET as string
    ) as JWTPayload;

    
    (req as any).user = decoded.data;

    next(); 
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};