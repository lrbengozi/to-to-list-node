import { Request, Response } from "express";
import { ListTaskService } from "../services/ListTaskService";

export class ListTaskController {
  async handle(request: Request, response: Response) {
    const filter = request.query;

    const listTaskController = new ListTaskService();

    const tasks = await listTaskController.execute(filter);

    return response.json(tasks);
  }
}
