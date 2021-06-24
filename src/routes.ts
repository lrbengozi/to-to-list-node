import { Router } from "express";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { FinishTaskController } from "./controllers/FinishTaskController";
import { ListTaskController } from "./controllers/ListTaskController";
import { ReopenTaskController } from "./controllers/ReopenTaskController";
import { createTaskMiddleware } from "./middleware/CreateTaskMiddleware";
import { reopenTaskMiddleware } from "./middleware/ReopenTaskMiddleware";
import { createTaskPolicies } from "./policies/CreateTaskPolicies";

const router = Router();

const createTaskController = new CreateTaskController();
const listTaskController = new ListTaskController();
const finishTaskController = new FinishTaskController();
const reopenTaskController = new ReopenTaskController();

router.post(
  "/api/v1/tasks",
  createTaskMiddleware,
  createTaskPolicies,
  createTaskController.handle
);
router.get("/api/v1/tasks", listTaskController.handle);
router.post("/api/v1/tasks/finish/:id", finishTaskController.handle);
router.post(
  "/api/v1/tasks/reopen/:id",
  reopenTaskMiddleware,
  reopenTaskController.handle
);

export { router };
