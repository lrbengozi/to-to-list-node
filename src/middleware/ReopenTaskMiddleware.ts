import { Request, Response, NextFunction } from "express";

export function reopenTaskMiddleware(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const { auth } = req.headers;

  if (!auth) {
    throw new Error("header auth is not informed");
  }

  if (auth !== "TrabalheNaSaipos") {
    throw new Error("Invalid Password");
  }

  next();
}
