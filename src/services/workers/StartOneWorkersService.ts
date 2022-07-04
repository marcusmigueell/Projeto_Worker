import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";
import { StartWorker } from "../../functions/StartWorker";

type StartWorkerRequest = {
    action: string;
    name: string;
}

export class StartOneWorkersService {
    async execute({ action, name }: StartWorkerRequest): Promise<Boolean | Error> {

        const repo = getRepository(WorkerClients);

        const workerClient = await repo.findOne({ name });

        if(!workerClient)
            return new Error("Client does not exists!");

        const clientId = workerClient.id;

        const start = new StartWorker();

        const response = await start.run({ action, clientId });

        return response;
    }
}