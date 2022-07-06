import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";
import { StartWorker } from "../../functions/StartWorker";

type StartWorkerRequest = {
    action: string;
    name?: string;
    workerName?: string;
}

export class StartOneWorkersService {
    async execute({ action, name, workerName }: StartWorkerRequest): Promise<Number | Error> {

        const repo = getRepository(WorkerClients);

        const workerClient = await repo.findOne({ name });

        if(!workerClient)
            return new Error("Client does not exists!");

        const clientId = workerClient.id;

        const start = new StartWorker();

        const response = await start.run({ action, clientId, workerName });

        return response;
    }
}