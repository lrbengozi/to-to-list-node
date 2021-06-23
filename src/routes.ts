import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";

const router = Router();

const createTaskController = new CreateTaskController();

router.post("/api/v1/tasks", createTaskController.handle);

export { router };
