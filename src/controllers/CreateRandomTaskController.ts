import { Request, Response } from "express";
import { CreateTaskService } from "../services/CreateTaskService";
import Chance from "chance";

export class CreateRandomTaskController {
  async handle(request: Request, response: Response) {
    const chance = new Chance();
    const tasks = [];

    const { name, email } = request.body;

    const createTaskService = new CreateTaskService();

    while (tasks.length <= 2) {
      const description = `Talk with ${chance.name()}`;

      const task = await createTaskService.execute({
        name,
        email,
        description,
      });

      tasks.push(task);
    }

    return response.json(tasks);
  }
}
