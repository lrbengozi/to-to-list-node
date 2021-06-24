import { Request, Response } from "express";
import { ReopenTaskService } from "../services/ReopenTaskService";

export class ReopenTaskController {
  async handle(request: Request, response: Response) {
    const params = request.params;

    const reopenTaskService = new ReopenTaskService();

    const resp = await reopenTaskService.execute(params);

    return response.json(resp);
  }
}
