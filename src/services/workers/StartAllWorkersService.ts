import { StartWorker } from "../../functions/StartWorker";

type StartWorkersRequest = {
    action: string;
}

export class StartAllWorkersService {
    async execute({ action }: StartWorkersRequest): Promise<Boolean | Error> {

        const start = new StartWorker();
        
        if(!await start.run({ action }))
            return new Error("Failed to open workers!");

        return true;        
    }
}