import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";

export class CreateTaskController {
  async handle(request: Request, response: Response) {
    const { name, email, description } = request.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute({ name, email, description });

    return response.json(task);
  }
}
