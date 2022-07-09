import { WorkerPath } from "../../entities/WorkerPath";
import { getRepository } from "typeorm";
import { GetTimeWorkers } from "../../functions/GetTimeWorkers";

type ElapseTimeRequest = {
    workerName?: string;
}

export class GetTimeWorkersService {
    async execute({ workerName }: ElapseTimeRequest) {

        const repo = getRepository(WorkerPath);
        const hours = new GetTimeWorkers();
        
        if (!workerName) {
            var workerPath = await repo.find();           
        } else {
            var workerPath = (await repo.find()).filter(x => x.workerName == workerName);
        }

        for (let i = 0; i < workerPath.length; i++) {
            workerPath[i].elapsed_time = await hours.timeDiff(workerPath[i].start_worker);             
        }
        
        console.log(workerPath);
        return null;
    }
}