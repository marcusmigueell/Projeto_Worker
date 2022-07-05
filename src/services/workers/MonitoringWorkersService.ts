import { MonitoringWorkers } from "../../functions/MonitoringWorkers";

export class MonitoringWorkersService {
    async execute(): Promise<Number | Error> {

        const monitoring = new MonitoringWorkers();
        
        const result = await monitoring.run();

        if(!result)
            return new Error("Failed to open workers!");

        return result;        
    }
}