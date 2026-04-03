declare global {
  namespace Express {
    export interface Request {
      user?: { userId: number; email: string; role: "USER" | "ADMIN" };
    }
  }
}

export {};
