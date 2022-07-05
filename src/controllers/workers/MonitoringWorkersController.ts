import { Request, Response } from "express";
import { MonitoringWorkersService } from "../../services/workers/MonitoringWorkersService";

export class MonitoringWorkersController {
    async handle(req: Request, res: Response){

        const service = new MonitoringWorkersService();

        const result = await service.execute();

        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json("Workers opened successfully");
    }
}