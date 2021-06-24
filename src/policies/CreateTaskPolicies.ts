import { Request, Response, NextFunction } from "express";
import { validateEmail } from "../utils/ValidateEmail";

export async function createTaskPolicies(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const { email } = req.body;

  await validateEmail(email);

  next();
}
