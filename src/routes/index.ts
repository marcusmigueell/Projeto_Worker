import { Router } from "express";

import { CreateWorkerClientController } from "../controllers/workerClient/CreateWorkerClientController";
import { GetAllWorkerClientController } from "../controllers/workerClient/GetAllWorkerClientController";
import { GetOneWorkerClientController } from "../controllers/workerClient/GetOneWorkerClientController";
import { UpdateWorkerClientController } from "../controllers/workerClient/UpdateWorkerClientController";
import { CreateWorkerPathController } from "../controllers/workerPath/CreateWorkerPathController";
import { GetAllWorkerPathController } from "../controllers/workerPath/GetAllWorkerPathController";
import { GetOneWorkerPathController } from "../controllers/workerPath/GetOneWorkerPathController";
import { UpdateWorkerPathController } from "../controllers/workerPath/UpdateWorkerPathController";
import { KillAllWorkersController } from "../controllers/workers/KillAllWorkersController";
import { KillOneWorkersController } from "../controllers/workers/KillOneWorkersController";
import { MonitoringWorkersController } from "../controllers/workers/MonitoringWorkersController";
import { StartAllWorkersController } from "../controllers/workers/StartAllWorkersController";
import { StartOneWorkersController } from "../controllers/workers/StartOneWorkersController";

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

routes
    .route("/startWorker")
    .post(new StartOneWorkersController().handle);

routes
    .route("/startWorkers")
    .post(new StartAllWorkersController().handle);

routes
    .route("/killWorkers")
    .post(new KillAllWorkersController().handle);

routes
    .route("/killWorker")
    .post(new KillOneWorkersController().handle);

routes
    .route("/monitoringWorkers")
    .get(new MonitoringWorkersController().handle);


export { routes };