import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";
import Chance from "chance";

export class CreateRandomTaskController {
  async handle(request: Request, response: Response) {
    const chance = new Chance();
    const description = `Talk with ${chance.name()}`;

    const { name, email } = request.body;

    const createTaskService = new CreateTaskService();

    const task = await createTaskService.execute({ name, email, description });

    return response.json(task);
  }
}
