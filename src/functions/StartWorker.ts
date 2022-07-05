import { getRepository } from "typeorm";
import { WorkerPath } from "../entities/WorkerPath";

const util = require('util');
const exec = util.promisify(require("child_process").exec);

type RunRequest = {
    action: string;
    clientId?: number;
}

export class StartWorker {
    async run({ action, clientId }: RunRequest): Promise<Number | Error> {

        const repo = getRepository(WorkerPath);
        var i: number = 0;

        if (action == "start" && !clientId) 
            var workers = await repo.find();
        else if (action == "start") {
            var workers = (await repo.find()).filter(x => x.workerClient_id == clientId);
            
            if(!workers)
                return new Error("Path does not exists!");
        }else {
            return new Error("Action does not exists!");
        }

        try {

            for (i; i < workers.length; i++) {
                await exec(`start ${workers[i].folderPath}${workers[i].folderName}\\${workers[i].workerName}.lnk`)           
            }

            return i;

        } catch (error) {
            return i;
        }
    }
}