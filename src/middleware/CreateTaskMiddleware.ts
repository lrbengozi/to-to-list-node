import { Request, Response, NextFunction } from "express";

export function createTaskMiddleware(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const { name, email, description } = req.body;

  if (!description) {
    throw new Error("Please insert a description");
  }

  if (!name) {
    throw new Error("Please insert a name");
  }

  if (!email) {
    throw new Error("Please insert a email");
  }

  next();
}
