import { Request, Response } from "express";
import { ListTaskService } from "../services/ListTaskService";

export class ListTaskController {
  async handle(request: Request, response: Response) {
    const filter = request.query;

    const listTaskService = new ListTaskService();

    const tasks = await listTaskService.execute(filter);

    return response.json(tasks);
  }
}
