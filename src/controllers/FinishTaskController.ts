import { Request, Response } from "express";
import { FinishTaskService } from "../services/FinishTaskService";

export class FinishTaskController {
  async handle(request: Request, response: Response) {
    const params = request.params;

    const finishTaskService = new FinishTaskService();

    const resp = await finishTaskService.execute(params);

    return response.json(resp);
  }
}
