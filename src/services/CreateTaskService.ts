import { getCustomRepository } from "typeorm";
import { TaskRepository } from "../repositories/TasksRepositories";

interface ITaskRequest {
  name: string;
  email: string;
  description: string;
}

export class CreateTaskService {
  async execute({ name, email, description }: ITaskRequest) {
    const tasksRepository = getCustomRepository(TaskRepository);

    if (!description) {
      throw new Error("Please insert a description");
    }

    if (!name) {
      throw new Error("Please insert a name");
    }

    if (!email) {
      throw new Error("Please insert a email");
    }

    const descriptionAlreadyExists = await tasksRepository.findOne({
      description,
    });

    if (descriptionAlreadyExists) {
      throw new Error("Task already exists");
    }

    const task = tasksRepository.create({
      name,
      email,
      description,
    });

    await tasksRepository.save(task);

    return task;
  }
}
