import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";
import { KillWorker } from "../../functions/KillWorker";

type StartWorkerRequest = {
    action: string;
    name?: string;
    workerName?: string;
}

export class KillOneWorkersService {
    async execute({ action, name, workerName }: StartWorkerRequest): Promise<Number | Error> {

        const repo = getRepository(WorkerClients);

        const workerClient = await repo.findOne({ name });

        if(!workerClient)
            return new Error("Client does not exists!");

        const clientId = workerClient.id;

        const kill = new KillWorker();

        const response = await kill.run({ action, clientId, workerName });
        
        if(response == 0)
            return new Error(`${name} client worker is not running!`);

        return response;
    }
}