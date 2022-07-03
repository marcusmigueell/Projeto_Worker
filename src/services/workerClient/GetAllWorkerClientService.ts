import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";

export class GetAllWorkerClientService {
    async execute() {
        const repo = getRepository(WorkerClients);

        const workerClients = await repo.find();

        return workerClients;
    }
}