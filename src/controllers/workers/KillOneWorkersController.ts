import { Request, Response } from "express";
import { KillOneWorkersService } from "../../services/workers/KillOneWorkersService";

export class KillOneWorkersController {
    async handle(req: Request, res: Response) {
        const { action, name, workerName } = req.body;

        const service = new KillOneWorkersService();

        const result = await service.execute({ action, name, workerName });
        
        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json(`Workers of client ${name} closed successfully`);
    }
}