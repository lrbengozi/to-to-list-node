import { getCustomRepository } from "typeorm";
import { TaskRepository } from "../repositories/TasksRepositories";

export class ListTaskService {
  async execute() {
    const tasksRepository = getCustomRepository(TaskRepository);

    const tasks = tasksRepository.find();

    return tasks;
  }
}
