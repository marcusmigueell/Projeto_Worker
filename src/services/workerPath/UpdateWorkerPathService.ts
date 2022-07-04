import { getRepository } from "typeorm";
import { WorkerClients } from "../../entities/WorkerClients";
import { WorkerPath } from "../../entities/WorkerPath";

type WorkerPathRequest = {
    id: string;
    folderName: string;
    folderPath: string;
    workerName: string;
    status: number;
    workerClient_id: number;
}

export class UpdateWorkerPathService {
    async execute({ id, folderName, folderPath, workerName, status, workerClient_id }: WorkerPathRequest): Promise<WorkerPath | Error> {
        const repo = getRepository(WorkerPath);
        const repoWorkerClient = getRepository(WorkerClients);

        if(!await repoWorkerClient.findOne(workerClient_id))
            return new Error("Client does not exists!");
            
        const workerPath = await repo.findOne(id);

        if(!workerPath)
            return new Error("Path of worker does not exists!");

        workerPath.folderName = folderName ? folderName : workerPath.folderName;
        workerPath.folderPath = folderPath ? folderPath : workerPath.folderPath;
        workerPath.workerName = workerName ? workerName : workerPath.workerName;
        status == 0 ? workerPath.status = 0 : workerPath.status = status;
        workerPath.workerClient_id = workerClient_id ? workerClient_id : workerPath.workerClient_id;

        await repo.save(workerPath);

        return workerPath;
    }
}