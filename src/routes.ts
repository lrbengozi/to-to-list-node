import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { ListTaskController } from "./controllers/ListTaskController";

const router = Router();

const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();

router.post("/api/v1/tasks", createTaskController.handle);
router.get("/api/v1/tasks", listTaskController.handle);

export { router };
