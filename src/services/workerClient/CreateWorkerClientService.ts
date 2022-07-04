import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";

type WorkerClientRequest = {
    name: string;
    status: number;
}

export class CreateWorkerClientService {
    async execute({ name, status }: WorkerClientRequest): Promise<WorkerClients | Error> {
        const repo = getRepository(WorkerClients);

        if(await repo.findOne({ name })) return new Error("Client already exists!");

        const workerClient = repo.create({ name, status });

        await repo.save(workerClient);

        return workerClient;
    }
}