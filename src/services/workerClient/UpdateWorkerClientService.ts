import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";

type WorkerClientRequest = {
    id: string;
    name: string;
    status: number;
}

export class UpdateWorkerClientService {
    async execute({ id, name, status }: WorkerClientRequest) {
        const repo = getRepository(WorkerClients);

        const workerClient = await repo.findOne(id);

        if(!workerClient) return new Error("Client does not exists!");

        workerClient.name = name ? name: workerClient.name;
        status == 0 ? workerClient.status = 0 : workerClient.status = status;

        await repo.save(workerClient);

        return workerClient;
    }
}