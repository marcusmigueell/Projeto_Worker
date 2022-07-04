import { KillWorker } from "../../functions/KillWorker";

type KillWorkersRequest = {
    action: string;
}

export class KillAllWorkersService {
    async execute({ action }: KillWorkersRequest): Promise<Number | Error> {

        const kill = new KillWorker();
        
        const result = await kill.run({ action });

        if(!result)
            return new Error("All workers are closed!");

        return result;        
    }
}