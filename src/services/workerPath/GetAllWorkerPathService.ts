import { getRepository } from "typeorm";
import { WorkerPath } from "../../entities/WorkerPath";


export class GetAllWorkerPathService {
    async execute(){
        const repo = getRepository(WorkerPath);

        const workerPaths = await repo.find({ relations: ["workerClient"] })

        return workerPaths;
    }
}