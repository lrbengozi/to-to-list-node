import { EntityRepository, Repository } from "typeorm";
import { Task } from "../Models/Task";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {}
