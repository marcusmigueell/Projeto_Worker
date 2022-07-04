import { Router } from "express";

import { CreateWorkerClientController } from "../controllers/workerClient/CreateWorkerClientController";
import { GetAllWorkerClientController } from "../controllers/workerClient/GetAllWorkerClientController";
import { GetOneWorkerClientController } from "../controllers/workerClient/GetOneWorkerClientController";
import { UpdateWorkerClientController } from "../controllers/workerClient/UpdateWorkerClientController";
import { CreateWorkerPathController } from "../controllers/workerPath/CreateWorkerPathController";
import { GetAllWorkerPathController } from "../controllers/workerPath/GetAllWorkerPathController";
import { GetOneWorkerPathController } from "../controllers/workerPath/GetOneWorkerPathController";
import { UpdateWorkerPathController } from "../controllers/workerPath/UpdateWorkerPathController";

const routes = Router();

routes
    .route("/workerClient")
    .post(new CreateWorkerClientController().handle)
    .get(new GetAllWorkerClientController().handle);

routes
    .route("/workerClient/:id")
    .get(new GetOneWorkerClientController().handle)
    .put(new UpdateWorkerClientController().handle);

routes
    .route("/workerPath")
    .post(new CreateWorkerPathController().handle)
    .get(new GetAllWorkerPathController().handle);

routes
    .route("/workerPath/:id")
    .get(new GetOneWorkerPathController().handle)
    .put(new UpdateWorkerPathController().handle);

export { routes };