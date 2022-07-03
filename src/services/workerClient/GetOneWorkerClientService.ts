import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";

type WorkerClientRequest = {
    id: string;
}

export class GetOneWorkerClientService {
    async execute({ id }: WorkerClientRequest) {
        const repo = getRepository(WorkerClients);

        const workerClient = await repo.findOne(id);

        if(!workerClient) return new Error("Client does not exists!");

        return workerClient;
    }
}