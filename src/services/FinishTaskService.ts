import { getCustomRepository } from "typeorm";
import { TaskRepository } from "../repositories/TasksRepositories";

export class FinishTaskService {
  async execute(id) {
    const tasksRepository = getCustomRepository(TaskRepository);

    const task: any = await tasksRepository.findOne(id);

    if (!task) {
      throw new Error("This task was not found");
    }

    if (task.pending === false) {
      throw new Error("This task is already closed");
    }

    await tasksRepository.update(id, { pending: false });

    return {
      message: "Task completed successfully",
    };
  }
}
