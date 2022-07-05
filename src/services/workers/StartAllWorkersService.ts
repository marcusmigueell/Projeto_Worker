import { StartWorker } from "../../functions/StartWorker";

type StartWorkersRequest = {
    action: string;
}

export class StartAllWorkersService {
    async execute({ action }: StartWorkersRequest): Promise<Number | Error> {

        const start = new StartWorker();
        
        const result = await start.run({ action });

        if(!result)
            return new Error("Failed to open workers!");

        return result;        
    }
}