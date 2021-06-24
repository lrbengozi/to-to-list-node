import { Router } from "express";
import { CreateRandomTaskController } from "./controllers/CreateRandomTaskController";
import { CreateTaskController } from "./controllers/CreateTaskController";
import { FinishTaskController } from "./controllers/FinishTaskController";
import { ListTaskController } from "./controllers/ListTaskController";
import { ReopenTaskController } from "./controllers/ReopenTaskController";
import { createRandomTaskMiddleware } from "./middleware/CreateRandomTaskMiddleware";
import { createTaskMiddleware } from "./middleware/CreateTaskMiddleware";
import { reopenTaskMiddleware } from "./middleware/ReopenTaskMiddleware";
import { createTaskPolicies } from "./policies/CreateTaskPolicies";

const router = Router();

const createTaskController = new CreateTaskController();
const createRandomController = new CreateRandomTaskController();
const listTaskController = new ListTaskController();
const finishTaskController = new FinishTaskController();
const reopenTaskController = new ReopenTaskController();

router.post(
  "/api/v1/tasks",
  createTaskMiddleware,
  createTaskPolicies,
  createTaskController.handle
);
router.post(
  "/api/v1/tasks/random",
  createRandomTaskMiddleware,
  createTaskPolicies,
  createRandomController.handle
);
router.get("/api/v1/tasks", listTaskController.handle);
router.post("/api/v1/tasks/finish/:id", finishTaskController.handle);
router.post(
  "/api/v1/tasks/reopen/:id",
  reopenTaskMiddleware,
  reopenTaskController.handle
);

export { router };
