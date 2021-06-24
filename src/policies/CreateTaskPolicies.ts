import { Request, Response, NextFunction } from "express";
import { validateEmail } from "../utils/ValidateEmail";

export async function createTaskPolicies(
  req: Request,
  resp: Response,
  next: NextFunction
) {
  const { email } = req.body;

  const data = await validateEmail(email);

  console.log("Data: " + data);
  next();
}
