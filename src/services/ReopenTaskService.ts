import { getCustomRepository } from "typeorm";
import { TaskRepository } from "../repositories/TasksRepositories";

export class ReopenTaskService {
  async execute(id) {
    const tasksRepository = getCustomRepository(TaskRepository);

    const task: any = await tasksRepository.findOne(id);

    if (!task) {
      throw new Error("This task was not found");
    }

    if (task.pending === true) {
      throw new Error("This task is already open");
    }

    if (task.reopen_count >= 2) {
      throw new Error("This task reached the maximum number of reopens");
    }

    await tasksRepository.update(id, {
      pending: true,
      reopen_count: task.reopen_count + 1,
    });

    return {
      message: "Task reopened successfully",
    };
  }
}
