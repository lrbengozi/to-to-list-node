import { getCustomRepository } from "typeorm";
import { TaskRepository } from "../repositories/TasksRepositories";

interface IFilterTask {
  name?: string;
  email?: string;
  description?: string;
  pending?: boolean;
}
export class ListTaskService {
  async execute(filter: IFilterTask) {
    const tasksRepository = getCustomRepository(TaskRepository);

    const tasks = tasksRepository.find(filter);

    return tasks;
  }
}
