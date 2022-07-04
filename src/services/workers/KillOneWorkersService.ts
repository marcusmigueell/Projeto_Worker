import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";
import { KillWorker } from "../../functions/KillWorker";

type StartWorkerRequest = {
    action: string;
    name: string;
}

export class KillOneWorkersService {
    async execute({ action, name }: StartWorkerRequest): Promise<Number | Error> {

        const repo = getRepository(WorkerClients);

        const workerClient = await repo.findOne({ name });

        if(!workerClient)
            return new Error("Client does not exists!");

        const clientId = workerClient.id;

        const kill = new KillWorker();

        const response = await kill.run({ action, clientId });
        
        if(response == 0)
            return new Error(`${name} client worker is not running!`);

        return response;
    }
}