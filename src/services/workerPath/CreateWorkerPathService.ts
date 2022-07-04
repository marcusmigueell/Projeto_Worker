import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";
import { WorkerPath } from "../../entities/WorkerPath";

type WorkerPathRequest = {
    folderName: string;
    folderPath: string;
    workerName: string;
    status: number;
    workerClient_id: number;
}

export class CreateWorkerPathService {
    async execute({ folderName, folderPath, workerName, status, workerClient_id }: WorkerPathRequest): Promise<WorkerPath | Error> {
        const repo = getRepository(WorkerPath);
        const repoWorkerClient = getRepository(WorkerClients);

        if(!await repoWorkerClient.findOne(workerClient_id))
            return new Error("Client does not exists!");

        const workerPath = repo.create({ folderName, folderPath, workerName, status, workerClient_id });

        await repo.save(workerPath);

        return workerPath;
    }
}