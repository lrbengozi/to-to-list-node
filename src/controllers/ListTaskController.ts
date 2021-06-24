import { Request, Response } from "express";
import { ListTaskService } from "../services/ListTaskService";

export class ListTaskController {
  async handle(request: Request, response: Response) {
    const { name, email, description } = request.body;

    const listTaskController = new ListTaskService();

    const tasks = await listTaskController.execute();

    return response.json(tasks);
  }
}
