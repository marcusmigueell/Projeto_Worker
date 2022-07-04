import { getRepository } from "typeorm";
import { WorkerPath } from "../entities/WorkerPath";

const util = require('util');
const exec = util.promisify(require("child_process").exec);

type RunRequest = {
    action: string;
    clientId?: number;
}

export class KillWorker {
    async run({ action, clientId }: RunRequest): Promise<Number | Error> {

        const repo = getRepository(WorkerPath);
        
        if (action == "kill" && !clientId) {
            var workers = await repo.find();
        }else if (action == "kill") {
            var workers = (await repo.find()).filter(x => x.workerClient_id == clientId);
            
            if(!workers)
                return new Error("Path does not exists!");

        }else {
            return new Error("Action does not exists!");
        }

        try {

            var likelyWorkers: any = [];
            var currentWorkers: any = [];
            var pidWorker: any = [];
            let i: number = 0;

            for (let i = 0; i < workers.length; i++) {

                const { stdout } = await exec(`tasklist /fo csv /NH /fi "imagename eq ${workers[i].workerName}.exe*"`);
                likelyWorkers.push(stdout.split(","));

                if(likelyWorkers[i].length == 5)
                    currentWorkers.push(likelyWorkers[i]);
            }
            
            if(currentWorkers.length > 0){
                
                for (i; i < currentWorkers.length; i++) {
                    pidWorker.push(currentWorkers[i][1]);
                }
            
                for (i = 0; i < pidWorker.length; i++) {
                    exec(`taskkill /PID ${pidWorker[i]}`);
                }

                return i;
            }
            
            return i;

        } catch (error) {
            return new Error("Something unexpected happened!");
        }
    }
}