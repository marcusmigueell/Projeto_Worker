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

        var likelyWorkers: any = [];
        var currentWorkers: any = [];
        var pidWorker: any = [];
        var currentStdout: any = [];
        var i: number = 0;
        
        if (action == "kill" && !clientId) {
            
            const { stdout } = await exec(`tasklist /fo csv /NH /fi "imagename eq A2W*"`);

            currentStdout = stdout.split(",");

            if(currentStdout.length > 1) {
                for(i += 1; i < currentStdout.length; i += 4)
                    currentWorkers.push(currentStdout[i]);

                for (i = 0; i < currentWorkers.length; i++) 
                    exec(`taskkill /PID ${currentWorkers[i]}`);
                    
                return i;
            }
                
            return i;
            
        } else if (action == "kill") {
            
            var workers = (await repo.find()).filter(x => x.workerClient_id == clientId);
            
            if(!workers)
                return new Error("Path does not exists!");

            for (i; i < workers.length; i++) {

                const { stdout } = await exec(`tasklist /fo csv /NH /fi "imagename eq ${workers[i].workerName}.exe*"`);
                
                likelyWorkers.push(stdout.split(","));

                if(likelyWorkers[i].length == 5)
                    currentWorkers.push(likelyWorkers[i]);
            }

            if(currentWorkers.length > 0){
                
                for (i = 0; i < currentWorkers.length; i++) {
                    pidWorker.push(currentWorkers[i][1]);
                }
            
                for (i = 0; i < pidWorker.length; i++) {
                    exec(`taskkill /PID ${pidWorker[i]}`);
                }

                return i;
            }
            
            return i;

        } else {
            return new Error("Action does not exists!");
        }
    }
}