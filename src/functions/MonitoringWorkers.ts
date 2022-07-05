import { getRepository } from "typeorm";
import { WorkerPath } from "../entities/WorkerPath";
import { StartWorker } from "./StartWorker";

const util = require('util');
const exec = util.promisify(require("child_process").exec);

export class MonitoringWorkers {
    async run() {

        const repo = getRepository(WorkerPath);

        const workerPath = (await repo.find()).filter(x => x.status == 1);

        if(!workerPath)
            return new Error("No active paths found in the database!");

        var i:number = 0;
        var currentWorkers: any = [];
        var currentStdout: any = [];

        const { stdout } = await exec(`tasklist /fo csv /NH /fi "imagename eq A2W*"`);
        currentStdout = stdout.split(",");
        
        if(currentStdout.length > 1) {

            for(i; i < currentStdout.length - 2; i += 4) {
                let j = currentStdout[i].indexOf("A2W");
                let k = currentStdout[i].indexOf(".exe");
                currentWorkers.push(currentStdout[i].substring(j, k));    
            }

        } else {
            const start = new StartWorker();
            const action = "start";
            const result = start.run({ action });
            return result;
        }

        for (i = 0; i < workerPath.length; i++) {
            if(!currentWorkers.includes(workerPath[i].workerName))
                await exec(`start ${workerPath[i].folderPath}${workerPath[i].folderName}\\${workerPath[i].workerName}.lnk`)
            
        }

        return i;
    }
}