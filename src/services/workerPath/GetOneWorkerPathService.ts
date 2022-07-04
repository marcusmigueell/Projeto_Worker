import { getRepository } from "typeorm";
import { WorkerPath } from "../../entities/WorkerPath";

type WorkerPathRequest = {
    id: string;
}

export class GetOneWorkerPathService {
    async execute({ id }: WorkerPathRequest): Promise<WorkerPath | Error> {
        const repo = getRepository(WorkerPath);

        const workerPath = await repo.findOne(id, { relations: ["workerClient"] })

        if(!workerPath)
            return new Error("Path of worker does not exists!");

        return workerPath;
    }
}