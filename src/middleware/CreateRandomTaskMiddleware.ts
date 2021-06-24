import { Request, Response, NextFunction } from "express";

export function createRandomTaskMiddleware(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const { name, email } = req.body;

  if (!name) {
    throw new Error("Please insert a name");
  }

  if (!email) {
    throw new Error("Please insert a email");
  }

  next();
}
