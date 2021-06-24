import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { FinishTaskController } from "./controllers/FinishTaskController";
import { ListTaskController } from "./controllers/ListTaskController";

const router = Router();

const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();
const finishTaskController = new FinishTaskController();

router.post("/api/v1/tasks", createTaskController.handle);
router.get("/api/v1/tasks", listTaskController.handle);
router.post("/api/v1/tasks/finish/:id", finishTaskController.handle);

export { router };
