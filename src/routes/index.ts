import { Router } from "express";

import { CreateWorkerClientController } from "../controllers/workerClient/CreateWorkerClientController";
import { GetAllWorkerClientController } from "../controllers/workerClient/GetAllWorkerClientController";
import { GetOneWorkerClientController } from "../controllers/workerClient/GetOneWorkerClientController";
import { UpdateWorkerClientController } from "../controllers/workerClient/UpdateWorkerClientController";

const routes = Router();

routes
    .route("/workerClient")
    .post(new CreateWorkerClientController().handle)
    .get(new GetAllWorkerClientController().handle);

routes
    .route("/workerClient/:id")
    .get(new GetOneWorkerClientController().handle)
    .put(new UpdateWorkerClientController().handle);

export { routes };